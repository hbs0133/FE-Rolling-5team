import React from 'react'
import styles from './ProfileImagePreview.module.scss'

function ProfileImagePreview({ peopleCount, recentMessage = [] }) {
  let isCountVisible = false
  if (peopleCount > 3) {
    isCountVisible = true
  }
  return (
    <>
      <div className={styles.profileContainer}>
        {recentMessage &&
          recentMessage.map((message, index) => (
            <img
              className={styles.img}
              key={message.id}
              src={message.ProfileImgURL}
              alt="profileImg"
              style={{
                transform: `translatex(${index * 16}px)`,
                zIndex: index,
              }}
            />
          ))}
        {isCountVisible && (
          <div className={styles.span} style={{ transform: 'translate(48px)' }}>
            +{peopleCount - 3}
          </div>
        )}
      </div>
    </>
  )
}

export default ProfileImagePreview
