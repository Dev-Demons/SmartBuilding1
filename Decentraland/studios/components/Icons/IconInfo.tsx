import React from 'react'

interface Props {
    red?: boolean
}

function IconInfo({ red, ...otherProps }: Props) {

    const style = { verticalAlign: 'text-bottom' }
    
    let fillColor = '#736E7D'
    if (red) fillColor = '#B71C1C'
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={style} { ...otherProps }>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM9.23375 5.58704C9.03964 5.76741 8.80592 5.85759 8.53262 5.85759C8.25987 5.85759 8.0245 5.76741 7.82874 5.58704C7.63407 5.40667 7.53564 5.18725 7.53564 4.931C7.53564 4.67529 7.63462 4.45532 7.82874 4.2733C8.0245 4.09073 8.25987 4 8.53262 4C8.80592 4 9.04019 4.09073 9.23375 4.2733C9.42787 4.45532 9.52521 4.67529 9.52521 4.931C9.52521 5.1878 9.42787 5.40667 9.23375 5.58704ZM9.30744 11.5689C8.97309 11.7009 8.70694 11.801 8.50732 11.8703C8.30826 11.9396 8.07674 11.9742 7.81334 11.9742C7.4086 11.9742 7.09351 11.8752 6.86914 11.6778C6.64478 11.4804 6.53315 11.2302 6.53315 10.9261C6.53315 10.8079 6.5414 10.6869 6.5579 10.5637C6.57494 10.4405 6.60189 10.3019 6.63873 10.1463L7.05721 8.66817C7.09406 8.52629 7.12595 8.39156 7.15125 8.26618C7.17654 8.1397 7.18864 8.02367 7.18864 7.91809C7.18864 7.73002 7.1496 7.59804 7.07206 7.52381C6.99342 7.44957 6.8455 7.41327 6.62498 7.41327C6.5172 7.41327 6.40612 7.42922 6.29229 7.46277C6.17956 7.49741 6.08168 7.52875 6.00139 7.55955L6.11192 7.10423C6.38577 6.99259 6.64808 6.89691 6.89829 6.81772C7.1485 6.73744 7.38496 6.69784 7.60767 6.69784C8.00965 6.69784 8.3198 6.79573 8.53812 6.98929C8.75533 7.18341 8.86476 7.43582 8.86476 7.74597C8.86476 7.81031 8.85706 7.92359 8.84222 8.08526C8.82737 8.24749 8.79932 8.39541 8.75863 8.53124L8.34235 10.005C8.30826 10.1232 8.27801 10.2585 8.25051 10.4097C8.22357 10.561 8.21037 10.6764 8.21037 10.754C8.21037 10.9497 8.25381 11.0834 8.3418 11.1543C8.42869 11.2252 8.58101 11.261 8.79657 11.261C8.89831 11.261 9.01214 11.2428 9.14082 11.2076C9.2684 11.1724 9.36078 11.1411 9.41907 11.1142L9.30744 11.5689Z" fill={fillColor} />
        </svg>
    )
}

export default IconInfo
