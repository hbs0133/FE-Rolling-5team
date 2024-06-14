import React from 'react'
import styles from './RollingCardName.module.scss'

const RollingCardName = ({ name, backgroundImage }) => {
  const textStyle = backgroundImage ? { color: '#ffffff' } : {}
  return (
    <h1 className={styles.cardName} style={textStyle}>
      To .{name}
    </h1>
  )
}

export default RollingCardName
