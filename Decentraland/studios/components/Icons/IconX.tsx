import React from 'react'

interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
  gray?: boolean
  red?: boolean
}

function IconX({ gray, red, ...otherProps }: Props) {
  
  let fill = '#242129'
  if (gray) fill = '#736E7D'
  if (red) fill = '#FF2D55'

  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.7056 1.77677C14.0961 1.38624 14.0961 0.753077 13.7056 0.362552L13.6372 0.294175C13.2467 -0.0963491 12.6135 -0.0963494 12.223 0.294175L6.99972 5.51743L1.77646 0.294175C1.38594 -0.0963497 0.752771 -0.0963494 0.362247 0.294175L0.29387 0.362552C-0.0966543 0.753076 -0.0966545 1.38624 0.29387 1.77677L5.51713 7.00002L0.293869 12.2233C-0.0966549 12.6138 -0.0966546 13.247 0.29387 13.6375L0.362247 13.7059C0.752771 14.0964 1.38594 14.0964 1.77646 13.7059L6.99972 8.48261L12.223 13.7059C12.6135 14.0964 13.2467 14.0964 13.6372 13.7059L13.7056 13.6375C14.0961 13.247 14.0961 12.6138 13.7056 12.2233L8.48231 7.00002L13.7056 1.77677Z" fill={fill}/>
    </svg>
  )
}

export default IconX
