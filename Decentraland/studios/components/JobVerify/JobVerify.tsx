import React, { useEffect, useState } from 'react'

import styles from './JobVerify.module.css'
import { useRouter } from 'next/router'
import { Loader } from 'decentraland-ui/dist/components/Loader/Loader'
import { budgetToRanges, openIntercom } from '../utils'
import { Job } from '../../interfaces/Job'
import IconFile from '../Icons/IconFile'
import MarkdownDescription from '../MarkdownDescription/MarkdownDescription'
import IconExternal from '../Icons/IconExternal'
import Link from 'next/link'

const DB_URL = process.env.NEXT_PUBLIC_PARTNERS_DATA_URL

function JobVerify() {
  const [verifyOk, setVerifyOk] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [jobData, setJobData] = useState<Job>({} as Job)

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      setLoading(true)
      fetch(`/api/jobs/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id })
      })
        .then((res) => {
          setVerifyOk(res.ok)
          return res.json()
        }).then((data) => {
          setJobData(data)
          setLoading(false)
        })
    }
  }, [id])

  const shareUrl = `/jobs/share?id=${id}`
  const projectUrl = `/dashboard?id=${id}`

  const reach_out_link = <a className={styles.link} href=""
    rel="noreferrer"
    onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      openIntercom()
    }}>reach out</a>


  if (isLoading) return <Loader active>Loading...</Loader>

  if (!verifyOk) return <div className={styles.subtitle} style={{ margin: 'auto' }}>Wrong link</div>

  return <div className={styles.container}>
    <img className={styles.image} alt='Your job post is live' src="/images/item_ok.png" />

    <div className={styles.title}>
      You published a new project!
    </div>
    <div className={styles.subtitle}>
      Your project is now visible to all Decentraland Studios.
    </div>
    <Link href={`/dashboard?id=${jobData.id}`}><div className='button_primary'>MANAGE YOUR PROJECT</div></Link>
    <div className={styles.factsContainer}>
      <div className={styles.factCard}>
        <img className={styles.factIcon} alt='calendar' src="/images/iconCalendar.png" />
        <div className={styles.factText}>
          <b>Your project will be available for 30 days after you publish it.</b> If you need to remove it sooner, you can close it on your <Link href={projectUrl} className={styles.link}>project profile</Link>.
        </div>
      </div>
      <div className={styles.factCard}>
        <img className={styles.factIcon} alt='calendar' src="/images/iconCard.png" />
        <div className={styles.factText}>
          <b>You will receive email notifications</b> when studios apply to your project. Talk to them through <Link href="/dashboard" className={styles.link}>your dashboard.</Link>
        </div>
      </div>
    </div>
    {/* <div className={styles.previewText}>
      <span>Here&apos;s a preview of your project</span>
      <Link href={shareUrl} ><span className={styles.liveText}>See it live</span><IconExternal red /></Link>
    </div>
    <div className={styles.jobContainer}>
      <div className={styles.jobAuthor}>Project created by <b>{jobData.author_name}</b>{jobData.company && <> from <b>{jobData.company}</b></>}</div>
      <div className={styles.jobTitle}>{jobData.title}</div>
      <div className={styles.jobSectionTitle}>SHORT DESCRIPTION</div>
      <div className={styles.jobText}>{jobData.short_description}</div>
      <div className={styles.jobSectionTitle}>FULL DESCRIPTION</div>
      <MarkdownDescription className={styles.jobText} description={jobData.long_description} />
      {jobData.brief_file && <>
        <div className={styles.jobSectionTitle}>BRIEF FILE</div>
        <div className={styles.jobText}><a className={styles.link} href={`${DB_URL}/assets/${jobData.brief_file.id}`} rel="noreferrer" target='_blank'><IconFile red /> {jobData.brief_file.filename_download}</a></div>
      </>}
      <div className={styles.jobSectionTitle}>BUDGET</div>
      <div className={styles.jobText}>{budgetToRanges(jobData.budget)}</div>
      {jobData.deadline_date && <>
        <div className={styles.jobSectionTitle}>DEADLINE FOR THIS PROJECT</div>
        <div className={styles.jobText}>{jobData.deadline_date}</div>
      </>}
    </div>
    <div style={{ textAlign: 'center' }} className={styles.jobAuthor}>
      If you have any questions or need help regarding your listing, don’t hesitate to {reach_out_link}.
    </div> */}
  </div>
}

export default JobVerify