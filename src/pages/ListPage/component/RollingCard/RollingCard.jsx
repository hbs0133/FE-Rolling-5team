import React from 'react'
import RollingCardName from './RollingCardName'
import ProfileImagePreview from '../../../../components/UI/ProfileImagePreview/ProfileImagePreview'
import CountPeople from '../../../../components/UI/CountPeople/CountPeople'
import styles from './RollingCard.module.scss'

function RollingCard({
  name,
  peopleCount,
  recentMessage,
  backgroundImage,
  backgroundColor,
}) {
  const style = {
    backgroundImage: backgroundImage
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${backgroundImage})`
      : {},
    backgroundSize: backgroundImage ? 'cover' : {},
    border: backgroundImage ? 'none' : undefined,
  }

  return (
    <>
      <div className={`${style.card} ${style[backgroundColor]}`} style={style}>
        <div className={styles.name}>
          <RollingCardName name={name} backgroundImage={backgroundImage} />
        </div>
        <div className={style.image}>
          <ProfileImagePreview
            peopleCount={peopleCount}
            recentMessage={recentMessage}
          />
        </div>
        <CountPeople
          peopleCount={peopleCount}
          backgrounImage={backgroundImage}
        />
        <hr className={style.hr} />
      </div>
    </>
  )
}

export default RollingCard
