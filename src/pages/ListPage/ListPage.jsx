import CardList from './component/CardList/CardList'
import styles from './ListPage.module.scss'
import Button from '../../components/UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import useDevice from '../../hooks/useDevice'

function ListPage() {
  const navigate = useNavigate()
  const { isMobile, isPhone } = useDevice()

  const handleNavigationPostPage = (cardId) => {
    navigate(`/post/${cardId}`)
  }

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={styles.hot}>
          <h1 className={styles.h1}>인기 롤링 페이퍼 🔥</h1>
          <CardList
            order="like"
            isMobile={isMobile}
            isPhone={isPhone}
            onClick={handleNavigationPostPage}
          />
        </div>
        <div className={styles.new}>
          <h1 className={styles.h1}>최근에 만든 롤링 페이퍼⭐</h1>
          <CardList
            isMobile={isMobile}
            isPhone={isPhone}
            onClick={handleNavigationPostPage}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => handleNavigationPostPage('')}
            widthMax={isMobile}
          >
            나도 만들어 보기
          </Button>
        </div>
      </div>
    </>
  )
}

export default ListPage
