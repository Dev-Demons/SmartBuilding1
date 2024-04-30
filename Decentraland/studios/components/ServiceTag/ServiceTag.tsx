import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { Service } from '../../interfaces/VerifiedPartner'
import { toSnakeCase } from '../utils'

import styles from './ServiceTag.module.css'

interface Props {
  type: Service
  active?: boolean
  hideText?: boolean
  hideTooltip?: boolean
  hover?: boolean
}

function ServiceTag({ type, active = false, hideText, hideTooltip, hover }: Props) {

  const [isActive, setIsActive] = useState(active)

  useEffect(() => setIsActive(active), [active])

  let intl = useIntl()

  const service = toSnakeCase(type)
  const serviceName = intl.formatMessage({ id: `service.${service}` })

  let strokeColor = "#242129"
  let backgroundColor = "#FFFFFF"
  let iconSvg

  if (type === '3D Modeling') {
    if (isActive) {
      backgroundColor = "#F7EBEA"
      strokeColor = "#A53627"
    }
    iconSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.25 7.3825L12.75 4.2025C12.29 3.9325 11.71 3.9325 11.25 4.2025L5.75 7.3825C5.29 7.6525 5 8.1425 5 8.6825V15.0325C5 15.5725 5.29 16.0625 5.75 16.3325L11.25 19.5125C11.71 19.7825 12.29 19.7825 12.75 19.5125L18.25 16.3325C18.71 16.0625 19 15.5725 19 15.0325V8.6825C19 8.1425 18.71 7.6525 18.25 7.3825ZM7 14.7425V10.1225L11 12.4425V17.0525L7 14.7425ZM12 10.7125L8 8.3925L12 6.0825L16 8.3925L12 10.7125ZM13 17.0525V12.4425L17 10.1225V14.7425L13 17.0525Z" fill={strokeColor}/>
    </svg>
  }
  if (type === 'Advertisement') {
    if (isActive) {
      backgroundColor = "#F9EEE6"
      strokeColor = "#B24D00"
    }
    iconSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4 11.125V12.875H21V11.125H17.4ZM15.6 16.9088C16.464 17.53 17.589 18.3525 18.48 19C18.84 18.5363 19.2 18.0637 19.56 17.6C18.669 16.9525 17.544 16.13 16.68 15.5C16.32 15.9725 15.96 16.445 15.6 16.9088ZM19.56 6.4C19.2 5.93625 18.84 5.46375 18.48 5C17.589 5.6475 16.464 6.47 15.6 7.1C15.96 7.56375 16.32 8.03625 16.68 8.5C17.544 7.87 18.669 7.05625 19.56 6.4ZM4.8 9.375C3.81 9.375 3 10.1625 3 11.125V12.875C3 13.8375 3.81 14.625 4.8 14.625H5.7V18.125H7.5V14.625H8.4L12.9 17.25V6.75L8.4 9.375H4.8ZM15.15 12C15.15 10.8362 14.628 9.78625 13.8 9.06875V14.9225C14.628 14.2137 15.15 13.1637 15.15 12Z" fill={strokeColor}/>
    </svg>
  }
  if (type === 'Creative Director') {
    if (isActive) {
      backgroundColor = "#EAF2EA"
      strokeColor = "#267829"
    }
    iconSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5289 4C11.1657 4 10.7947 4.03158 10.4236 4.11053C8.24467 4.52895 6.50783 6.28947 6.0973 8.46842C5.71835 10.5289 6.47625 12.4237 7.84993 13.6474C8.1894 13.9474 8.37098 14.3658 8.37098 14.8079V16.6316C8.37098 17.5 9.08151 18.2105 9.94993 18.2105H10.171C10.4473 18.6842 10.9447 19 11.5289 19C12.1131 19 12.6184 18.6842 12.8868 18.2105H13.1078C13.9762 18.2105 14.6868 17.5 14.6868 16.6316V14.8079C14.6868 14.3737 14.8605 13.9474 15.192 13.6553C16.3368 12.6447 17.0552 11.1684 17.0552 9.52632C17.0552 6.47105 14.5841 4 11.5289 4ZM13.1078 16.6316H9.94993V15.8421H13.1078V16.6316ZM13.1078 15.0526H9.94993V14.2632H13.1078V15.0526ZM11.9236 10.6395V12.6842H11.1341V10.6395L9.6894 9.20263L10.2499 8.64211L11.5289 9.92105L12.8078 8.64211L13.3684 9.20263L11.9236 10.6395Z" fill={strokeColor}/>
    </svg>
  }
  if (type === 'Emote Design') {
    if (isActive) {
      backgroundColor = "#E8F3F1"
      strokeColor = "#067A6D"
    }
    iconSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.993 5C8.129 5 5 8.136 5 12C5 15.864 8.129 19 11.993 19C15.864 19 19 15.864 19 12C19 8.136 15.864 5 11.993 5ZM9.55 9.2C10.131 9.2 10.6 9.669 10.6 10.25C10.6 10.831 10.131 11.3 9.55 11.3C8.969 11.3 8.5 10.831 8.5 10.25C8.5 9.669 8.969 9.2 9.55 9.2ZM12 16.2C10.404 16.2 9.046 15.038 8.5 13.4H15.5C14.954 15.038 13.596 16.2 12 16.2ZM14.45 11.3C13.869 11.3 13.4 10.831 13.4 10.25C13.4 9.669 13.869 9.2 14.45 9.2C15.031 9.2 15.5 9.669 15.5 10.25C15.5 10.831 15.031 11.3 14.45 11.3Z" fill={strokeColor}/>
    </svg>
  }
  if (type === 'Entertainment'){
    if (isActive) {
      backgroundColor = "#E6F2F8"
      strokeColor = "#0072AB"
    }
    iconSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.0457 5.80165C11.4134 5.06177 12.4689 5.06177 12.8367 5.80165L14.1618 8.46765C14.3078 8.76154 14.5888 8.96504 14.9136 9.01219L17.867 9.4409C18.6891 9.56023 19.0157 10.5718 18.4186 11.1493L16.2919 13.2064C16.0541 13.4365 15.9455 13.7693 16.0018 14.0953L16.5047 17.0073C16.6456 17.8233 15.7904 18.4472 15.0563 18.0638L12.4041 16.6787C12.1141 16.5272 11.7683 16.5272 11.4782 16.6787L8.82602 18.0638C8.09199 18.4472 7.23675 17.8233 7.37768 17.0073L7.88057 14.0953C7.93689 13.7693 7.82825 13.4365 7.59041 13.2064L5.46374 11.1493C4.86667 10.5718 5.19327 9.56023 6.01534 9.4409L8.96876 9.01219C9.29354 8.96504 9.57452 8.76153 9.72059 8.46765L11.0457 5.80165Z" fill={strokeColor}/>
    </svg>
  }
  if (type === 'Land Rental'){
    if (isActive) {
      backgroundColor = "#EEEFFC"
      strokeColor = "#4D56DF"
    }
    iconSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.53027 15.0005L11.9997 12.9014L16.4692 15.0005L11.9997 17.0997L7.53027 15.0005Z" fill={strokeColor}/>
      <path d="M2 12.2347L6.46945 10.1355L10.9389 12.2347L6.46945 14.3339L2 12.2347Z" fill={strokeColor}/>
      <path d="M13.0615 12.3584L17.531 10.2592L22.0004 12.3584L17.531 14.4576L13.0615 12.3584Z" fill={strokeColor}/>
      <path d="M7.53027 9.46939L11.9997 7.37023L16.4692 9.46939L11.9997 11.5686L7.53027 9.46939Z" fill={strokeColor}/>
    </svg>
  }
  if (type === 'Linked Wearables'){
    if (isActive) {
      backgroundColor = "#EBEEF6"
      strokeColor = "#304C9C"
    }
    iconSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7815 7.26172L14.914 5C14.4115 5.65156 13.299 6.10625 12.0015 6.10625C10.704 6.10625 9.59151 5.65156 9.08901 5L4.22151 7.26172C4.02401 7.35547 3.94401 7.58047 4.04151 7.76562L5.47151 10.4492C5.57151 10.6344 5.81151 10.7094 6.00901 10.618L7.42401 9.96875C7.68901 9.84688 7.99901 10.0273 7.99901 10.3062V16.25C7.99901 16.6648 8.35651 17 8.79901 17H15.199C15.6415 17 15.999 16.6648 15.999 16.25V10.3039C15.999 10.0273 16.309 9.84453 16.574 9.96641L17.989 10.6156C18.1865 10.7094 18.4265 10.6344 18.5265 10.4469L19.959 7.76562C20.059 7.58047 19.979 7.35313 19.7815 7.26172Z" fill={strokeColor} />
      <ellipse cx="15" cy="16" rx="3" ry="2" fill={strokeColor}/>
      <path d="M14.6 15.01C14.7381 15.01 14.85 14.8981 14.85 14.76V14C14.85 13.8619 14.7381 13.75 14.6 13.75H13C11.7579 13.75 10.75 14.7579 10.75 16C10.75 17.2421 11.7579 18.25 13 18.25H14.6C14.7381 18.25 14.85 18.1381 14.85 18V17.24C14.85 17.1019 14.7381 16.99 14.6 16.99H13C12.4541 16.99 12.01 16.5459 12.01 16C12.01 15.4541 12.4541 15.01 13 15.01H14.6ZM13.15 16.4C13.15 16.5381 13.2619 16.65 13.4 16.65H16.6C16.7381 16.65 16.85 16.5381 16.85 16.4V15.6C16.85 15.4619 16.7381 15.35 16.6 15.35H13.4C13.2619 15.35 13.15 15.4619 13.15 15.6V16.4ZM15.4 13.75C15.2619 13.75 15.15 13.8619 15.15 14V14.76C15.15 14.8981 15.2619 15.01 15.4 15.01H17C17.5459 15.01 17.99 15.4541 17.99 16C17.99 16.5459 17.5459 16.99 17 16.99H15.4C15.2619 16.99 15.15 17.1019 15.15 17.24V18C15.15 18.1381 15.2619 18.25 15.4 18.25H17C18.2421 18.25 19.25 17.2421 19.25 16C19.25 14.7579 18.2421 13.75 17 13.75H15.4Z" fill={isActive ? backgroundColor : strokeColor} stroke={isActive ? strokeColor : backgroundColor} strokeWidth="0.5" strokeLinejoin="round"/>
    </svg>
  }
  if (type === 'Programming'){
    if (isActive) {
      backgroundColor = "#F5EDFA"
      strokeColor = "#9541CA"
    }
    iconSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill={strokeColor}/>
    </svg>
  }
  if (type === 'Venue Rental'){
    if (isActive) {
      backgroundColor = "#F9E9F4"
      strokeColor = "#B91D90"
    }
    iconSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.1111 5H4.88889V6.75H19.1111V5ZM20 13.75V12L19.1111 7.625H4.88889L4 12V13.75H4.88889V19H13.7778V13.75H17.3333V19H19.1111V13.75H20ZM12 17.25H6.66667V13.75H12V17.25Z" fill={strokeColor}/>
    </svg>
  }
  if (type === 'Wearable Design'){
    if (isActive) {
      backgroundColor = "#F6E9EF"
      strokeColor = "#A31F5E"
    }
    iconSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3352 16.8359L13.1685 11.4609V10.7026C14.5435 10.2942 15.5018 8.89424 15.1935 7.32757C14.9768 6.23591 14.1102 5.32757 13.0185 5.07757C11.1185 4.64424 9.41851 6.08591 9.41851 7.91924H11.0852C11.0852 7.22757 11.6435 6.66924 12.3352 6.66924C13.0268 6.66924 13.5852 7.22757 13.5852 7.91924C13.5852 8.61924 13.0102 9.18591 12.3102 9.16924C11.8602 9.16091 11.5018 9.54424 11.5018 9.99424V11.4609L4.33518 16.8359C3.69351 17.3192 4.03518 18.3359 4.83518 18.3359H12.3352H19.8352C20.6352 18.3359 20.9768 17.3192 20.3352 16.8359ZM7.33518 16.6692L12.3352 12.9192L17.3352 16.6692H7.33518Z" fill={strokeColor}/>
    </svg>
  
  }

  const tooltip = <div className={styles.tooltip_container}>
    <div className={`${styles.tooltip} ${hideText ? styles['tooltip--name'] : ''}`}>
      {
        hideText ? 
          intl.formatMessage({ id: `service.${service}` }) 
        : 
          intl.formatMessage({ id: `service.${service}.description` })
      }
    </div>
  </div>

return (
    <div className={`${styles.container} ${isActive ? `${styles['container--active']}` : ''}`}
      style={{
        padding: `${hideText ? '4px' : '4px 6px'}`, 
        backgroundColor: backgroundColor, 
        color: strokeColor
      }}
        onMouseEnter={() => hover && setIsActive(true)}
        onMouseLeave={() => setIsActive(active)}>
      {iconSvg}
      {!hideText && <span className={styles.service_name}>{serviceName}</span>}
      {!hideTooltip && tooltip}
    </div>
  )
}

export default ServiceTag
