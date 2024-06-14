import React from 'react'
import styles from './CountPeople.module.scss'

export default function CountPeople({ peopleCount, backgrounImage = null }) {
  const textStyle = backgrounImage ? { color: '#ffffff' } : {}

  const handleMouseEnter = (event) => {
    event.target.style.cursor = 'default'
  }
  return (
    <h1
      className={styles.countpeople}
      style={textStyle}
      onMouseEnter={handleMouseEnter}
    >
      {peopleCount}
      <p className={styles.countText}>명이 작성했어요.</p>
    </h1>
  )
}
