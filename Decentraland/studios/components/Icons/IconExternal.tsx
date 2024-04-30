import React from 'react'

interface Props {
    red?: boolean
}

function IconExternal({ red, ...otherProps }: Props) {

  const style = {
    verticalAlign: 'text-bottom'
  }

  let stroke = "white" 
  if (red) {
    stroke = "#FF2D55"
  }


  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={style} { ...otherProps }>
        <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 2H14V6" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 9.33333L14 2" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default IconExternal
