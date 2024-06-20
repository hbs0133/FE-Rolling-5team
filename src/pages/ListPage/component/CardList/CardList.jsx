import { useEffect, useState, useCallback, useRef } from 'react'
import RollingCard from '../RollingCard/RollingCard'
import { getCustomRecipient, getRecipientList } from '../../../../services/api'
import styles from './CardList.module.scss'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/navigation'
import 'swiper/scss'

function CardList({ order = '', isMobile, isPhone, onClick }) {
  const [cardList, setCardList] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [prevUrl, setPrevUrl] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextButtonRef = useRef(null)
  const prevButtonRef = useRef(null)
  const swiperRef = useRef(null)

  const handleLoad = useCallback(async () => {
    const { results, next, previous } = await getRecipientList({
      sort: order,
    })
    setPrevUrl(previous)
    setNextUrl(next)
    setCardList(results)
  }, [order])

  useEffect(() => {
    handleLoad()
  }, [handleLoad])

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper
    setCurrentSlide(swiper.realIndex)
  }

  const handleSlideChange = () => {
    setCurrentSlide(swiperRef.current.realIndex)
  }

  const handleNextButtonClick = async () => {
    if (nextUrl) {
      const {
        next,
        previous,
        results: fetchedCards,
      } = await getCustomRecipient(nextUrl)
      setNextUrl(next)
      setPrevUrl(previous)
      setCardList((currentCardList) => {
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
          if (swiperRef.current.isEnd) {
            swiperRef.current.slideTo(currentSlide + 1, 0)
          } else {
            swiperRef.current.slideNext()
          }
        }, 100)
      }
    } else {
      swiperRef.current.slideNext()
    }
  }

  const handlePrevButtonClick = async () => {
    if (prevUrl) {
      const {
        next,
        previous,
        results: fetchedCards,
      } = await getCustomRecipient(prevUrl)
      setNextUrl(next)
      setPrevUrl(previous)
      setCardList((currentCardList) => {
        const newCards = fetchedCards.filter(
          (newCard) =>
            !currentCardList.some(
              (existingCard) => existingCard.id === newCard.id
            )
        )
        return [...newCards, ...currentCardList]
      })
      setTimeout(() => {
        swiperRef.current.update()
        swiperRef.current.slidePrev()
      }, 100)
    } else {
      swiperRef.current.slidePrev()
    }
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
    onSlideChange: handleSlideChange,
    spaceBetween: 20,
    onReachEnd: () => (!isMobile ? null : handleReachEnd()),
    breakpoints: {
      1920: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  }

  const showPrevButton = currentSlide > 0
  const showNextButton = currentSlide < cardList.length - 4

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
            <div className={styles.navigationButtons}>
              {showPrevButton && (
                <button
                  onClick={handlePrevButtonClick}
                  ref={prevButtonRef}
                  className={styles.customSwiperButtonPrev}
                />
              )}
              {showNextButton && (
                <button
                  onClick={handleNextButtonClick}
                  ref={nextButtonRef}
                  className={styles.customSwiperButtonNext}
                />
              )}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.intializeCardList} />
      )}
    </>
  )
}

export default CardList
