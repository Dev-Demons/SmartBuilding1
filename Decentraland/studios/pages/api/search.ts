import type { NextRequest } from 'next/server'
import { PartnerProject } from '../../interfaces/PartnerProject'
import { Resource } from '../../interfaces/Resource'
import { VerifiedPartner } from '../../interfaces/VerifiedPartner'

export const config = {
  runtime: 'experimental-edge',
}

const DB_URL = process.env.NEXT_PUBLIC_PARTNERS_DATA_URL

const API_TOKEN = process.env.API_ACCESS_TOKEN

const sliceAroundQuery = (query: string, description: string) => {
  
    let sliceRange = [0, 300]
    const queryIndex = (description || '').toLowerCase().indexOf(query.toLowerCase())
    const slicedStart = queryIndex >= 50
    if (slicedStart){
        sliceRange= [queryIndex - 10, queryIndex + 190]
    }
    
    return `${slicedStart ? '...' : ''}${(description || '').substring(sliceRange[0], sliceRange[1]).trim()}...`
}

const getSearchScore = (text: string, query: string) => {
  return (text || '').match(new RegExp(query, 'gi'))?.length || 0
}

const sortResult = (item1: any, item2: any, query: string) => {
  const score1 = getSearchScore(item1.title || item1.name, query) * 30 + getSearchScore(item1.description, query) * 10
  const score2 = getSearchScore(item2.title || item2.name, query) * 30 + getSearchScore(item2.description, query) * 10

  return score2 - score1
}

export default async function (req: NextRequest) {
    const body = await req.json()
    const { query } = body;

    await fetch(`${DB_URL}/items/search_queries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify({
        query,
        geo: req.geo, 
        ip: req.ip
      })
    })

    let filterQuery = query.split(' ').map((token: string) => ({
      "_or": [
        { title: {
          "_icontains": token
        }},
        { description: {
          "_icontains": token
        }}
      ]}))

      let studiosQuery = query.split(' ').map((token: string) => ({
      "_or": [
        { name: {
          "_icontains": token
        }},
        { description: {
          "_icontains": token
        }}
      ]}))

    const resResources = (await fetch(`${DB_URL}/items/resources`, {
      method: 'SEARCH',
      headers: { 
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
          filter: {
            "_and": filterQuery
          },
          fields: ["id", "video_1", "image_1", "title", "description", "github_link", "play_link"]
        }
      })
    }).then((res) => res.json())).data

    const resStudios = (await fetch(`${DB_URL}/items/profile`, {
      method: 'SEARCH',
      headers: { 
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
          filter: {
            "_and": studiosQuery
          },
          fields: ["id", "name", "description", "logo", "slug"]
        }
      })
    }).then((res) => res.json())).data

    const resProjects = (await fetch(`${DB_URL}/items/projects`, {
      method: 'SEARCH',
      headers: { 
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
          filter: {
            "_and": filterQuery
          },
          fields: ["id","image_1", "title", "description", "profile.name", "profile.logo"]
        }
      })
    }).then((res) => res.json())).data

    const resource = resResources.sort((a: any , b: any ) => sortResult(a, b, query)).map((resource: Resource) => ({ ...resource, description: sliceAroundQuery(query, resource.description), type: 'resource'}))
    const studio = resStudios.sort((a: any , b: any ) => sortResult(a, b, query)).map((profile: VerifiedPartner) => ( { ...profile, title:profile.name, description: sliceAroundQuery(query, profile.description) , type: 'studio'} ))
    const project = resProjects.sort((a: any , b: any ) => sortResult(a, b, query)).map((project: PartnerProject) => ({ ...project, description: sliceAroundQuery(query, project.description), type: 'project'}))
   
    const results = [].concat(resource, studio, project)
    
    return new Response(JSON.stringify({results }))
  }