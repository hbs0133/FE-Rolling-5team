import { useEffect, useState, useCallback, useRef } from 'react'
import RollingCard from '../RollingCard/RollingCard'
import { getCustomRecipient, getRecipientList } from '../../../../services/api'
import styles from './CardList.module.scss'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/navigation'
import 'swiper/scss'

function CardList({ order = '', isMobile, isPhone, onClick }) {
  const [cardList, setcardList] = useState([])
  const [nextUrl, setnextUrl] = useState(null)
  const [prevUrl, setprevUrl] = useState(null)

  const nextButtonRef = useRef(null)
  const prevButtonRef = useRef(null)
  const swiperRef = useRef(null)

  const handleLoad = useCallback(async () => {
    const { results, next, previous } = await getRecipientList({
      sort: order,
    })
    setprevUrl(previous)
    setnextUrl(next)
    setcardList(results)
  }, [order])

  useEffect(() => {
    handleLoad()
  }, [handleLoad])

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper
  }

  const handleNextButtonClick = async () => {
    if (nextUrl) {
      const {
        next,
        previous,
        results: fetchedCards,
      } = await getCustomRecipient(nextUrl)
      setnextUrl(next)
      setprevUrl(previous)
      setcardList((currentCardList) => {
        const newCards = fetchedCards.filter(
          (newCard) =>
            !currentCardList.some(
              (existingCard) => existingCard.id === newCard.id
            )
        )
        return [...currentCardList, ...newCards]
      })
      if (!isMobile) {
        setTimeout(() => {
          swiperRef.current.update()
          swiperRef.current.slideNext()
        }, 100)
      }
    }
  }

  const handlePrevButtonClick = async () => {
    const { next, previous } = await getCustomRecipient(prevUrl)
    setnextUrl(next)
    setprevUrl(previous)
    swiperRef.current.slidePrev()
  }

  const handleReachEnd = () => {
    handleNextButtonClick()
  }

  const swiperSetting = {
    className: styles.swiper,
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = prevButtonRef.current
      swiper.params.navigation.nextEl = nextButtonRef.current
    },
    modules: [Navigation],
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    onSwiper: handleSwiper,
    spaceBetween: 20,
    onReachEnd: () => (!isMobile ? null : handleReachEnd()),
    breakpoints: {
      1920: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  }
  return (
    <>
      {cardList.length !== 0 ? (
        <div className={styles.cardList}>
          <Swiper {...swiperSetting}>
            {cardList.map((cardInfo) => (
              <SwiperSlide
                onClick={() => onClick(cardInfo.id)}
                key={cardInfo.id}
                className={styles.swiperSlide}
              >
                <RollingCard
                  name={cardInfo.name}
                  peopleCount={cardInfo.messageCount}
                  recentMessages={cardInfo.recentMessages}
                  backgroundImage={cardInfo.backgroundImageURL}
                  backgroundColor={cardInfo.backgroundColor}
                  topReactions={cardInfo.topReactions}
                  isPhone={isPhone}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {!isMobile && (
            <>
              {nextUrl && (
                <button
                  onClick={handleNextButtonClick}
                  ref={nextButtonRef}
                  className={styles.customSwiperButtonNext}
                />
              )}
              {prevUrl && (
                <button
                  onClick={handlePrevButtonClick}
                  ref={prevButtonRef}
                  className={styles.customSwiperButtonPrev}
                />
              )}
            </>
          )}
        </div>
      ) : (
        <div className={styles.intializeCardList} />
      )}
    </>
  )
}

export default CardList
