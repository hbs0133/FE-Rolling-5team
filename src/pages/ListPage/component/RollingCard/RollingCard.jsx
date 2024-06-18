import React from 'react'
import RollingCardName from './RollingCardName'
import ProfileImagePreview from '../../../../components/UI/ProfileImagePreview/ProfileImagePreview'
import CountPeople from '../../../../components/UI/CountPeople/CountPeople'
import styles from './RollingCard.module.scss'
import TopReactions from '../../../../components/UI/ReactionEmoji/TopReactions'

function RollingCard({
  name,
  peopleCount,
  recentMessages,
  backgroundImage,
  backgroundColor,
  topReactions,
  isPhone,
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
      <div
        className={`${styles.card} ${styles[backgroundColor]}`}
        style={style}
      >
        <div className={styles.name}>
          <RollingCardName
            name={name}
            backgroundImage={backgroundImage}
            isPhone={isPhone}
          />
        </div>
        <div className={styles.image}>
          <ProfileImagePreview
            peopleCount={peopleCount}
            recentMessage={recentMessages}
          />
        </div>
        <CountPeople
          peopleCount={peopleCount}
          backgrounImage={backgroundImage}
          isPhone={isPhone}
        />
        <hr className={styles.hr} />
        <TopReactions topReactions={topReactions} />
      </div>
    </>
  )
}

export default RollingCard
