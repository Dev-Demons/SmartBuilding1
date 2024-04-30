import React from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Partners from '../../../clients/Partners'
import { VerifiedPartner } from '../../../interfaces/VerifiedPartner'
import { Container } from 'decentraland-ui/dist/components/Container/Container'
import ReviewSubmitForm from '../../../components/ReviewSubmitForm/ReviewSubmitForm'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.slug) {
    const partner = await Partners.getPartnerData({ slug: params.slug })

    return {
      props: {
        partner,
      },
    }
  }

  return {
    props: { error: true },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await Partners.getAllSlugs()

  return {
    paths,
    fallback: false,
  }
}

function ReviewForm({ partner }: { partner: VerifiedPartner }) {

  return (
    <Container>
      <Head>
        <meta property="og:title" content="Let’s build the metaverse together. Find the Right Team for Your Project" />
        <meta property="og:description" content={`Leave a review to ${partner.name} studio`} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content={`https://studios.decentraland.org/reviews/submit/${partner.slug}`} />

        <meta property="twitter:url" content={`https://studios.decentraland.org/reviews/submit/${partner.slug}`} />
        <meta name="twitter:title" content="Let’s build the metaverse together. Find the Right Team for Your Project" />
        <meta name="twitter:description" content={`Leave a review to ${partner.name} studio`} />
        
        <link rel="canonical" href={`https://studios.decentraland.org/reviews/submit/${partner.slug}`} />
      </Head>

      <main>
        <ReviewSubmitForm partner={partner} />
      </main>
    </Container>
  )
}

export default ReviewForm
