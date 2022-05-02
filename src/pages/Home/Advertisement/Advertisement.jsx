import React from 'react'


import { imgsHome } from '../../../constants'
import styles from './Advertisement.module.scss'

const Advertisement = () => {
  return (
    <div className={styles.subBanner__wrapper}>
        <img src={imgsHome.subBanner1}/>
        <img src={imgsHome.subBanner2}/>
    </div>
  )
}

export default Advertisement