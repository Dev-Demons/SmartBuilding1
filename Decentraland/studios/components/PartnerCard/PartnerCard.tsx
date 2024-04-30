import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { VerifiedPartner, Service } from '../../interfaces/VerifiedPartner'
import ServiceTag from '../ServiceTag/ServiceTag'
import styles from './PartnerCard.module.css'
import MarkdownDescription from '../MarkdownDescription/MarkdownDescription'

interface Props {
  partner: VerifiedPartner
}

const DATA_URL = process.env.NEXT_PUBLIC_PARTNERS_DATA_URL

const SERVICES = Object.values(Service)

function PartnerCard({ partner }: Props) {
  const PROFILE_WEBSITE = `/profile/${partner.slug}`

  const displayServices = (partner.services || []).filter((service) => SERVICES.includes(service))

  return (
    <Link href={PROFILE_WEBSITE} passHref legacyBehavior prefetch={false}>
      <div className={styles.container}>
        <div className={styles.image}><Image alt='' src={`${DATA_URL}/assets/${partner.logo}?key=logo`} fill unoptimized/></div>
        <div className={styles.info_container}>
          <div className={styles.name}>
            {partner.name}
            </div>
          <div className={styles.meta}>
            <div className={styles.pills}>
              {displayServices.map((service, i) => (
                <span key={`${service}-${i}`} className={styles.services}>
                  <ServiceTag type={service} active hideText />
                </span>
              ))}
            </div>
          </div>
          <div className={styles.description_container}>
            <MarkdownDescription className={styles.description} description={partner.description} inPartnersList />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PartnerCard
