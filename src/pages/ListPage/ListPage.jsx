import CardList from './component/CardList/CardList'
import styles from './ListPage.module.scss'
import Button from '../../components/UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import useDevice from '../../hooks/useDevice'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react'

function ListPage() {
  const navigate = useNavigate()
  const { isMobile, isPhone } = useDevice()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const handleNavigationPostPage = (cardId) => {
    navigate(`/post/${cardId}`)
  }

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={styles.hot}>
          <h1 className={styles.h1}>인기 롤링 페이퍼 🔥</h1>
          {loading ? (
            <div className={styles.cardList}>
              <Skeleton className={styles.skeleton} />
              <Skeleton className={styles.skeleton} />
              <Skeleton className={styles.skeleton} />
              <Skeleton className={styles.skeleton} />
            </div>
          ) : (
            <CardList
              order="like"
              isMobile={isMobile}
              isPhone={isPhone}
              onClick={handleNavigationPostPage}
            />
          )}
        </div>
        <div className={styles.new}>
          <h1 className={styles.h1}>최근에 만든 롤링 페이퍼⭐</h1>
          {loading ? (
            <div className={styles.cardList}>
              <Skeleton className={styles.skeleton} />
              <Skeleton className={styles.skeleton} />
              <Skeleton className={styles.skeleton} />
              <Skeleton className={styles.skeleton} />
            </div>
          ) : (
            <CardList
              isMobile={isMobile}
              isPhone={isPhone}
              onClick={handleNavigationPostPage}
            />
          )}
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/post" className={styles.buttonLink}>
            <Button widthMax={isMobile}>나도 만들어 보기</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ListPage
//수정본 커밋 완성
