import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import React from 'react'
import { Container } from 'decentraland-ui/dist/components/Container/Container'
import JobSharing from '../../components/JobSharing/JobSharing'


function JobsSharingPage() {
  return (
    <Container className={styles.container}>
      <Head>
        <meta property="og:title" content="Let’s build the metaverse together" />
        <meta property="og:description" content="Find the Right Team for Your Project." />
        <meta property="og:image" content="/images/banner_jobs.png" />
      </Head>
      <main className={styles.main}>
        <JobSharing />
      </main>
    </Container>
  )
}

export default JobsSharingPage
