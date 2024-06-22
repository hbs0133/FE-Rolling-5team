import HomeStyles from './HomePage.module.scss'
import { Link } from 'react-router-dom'
import homepage_01 from '../../assets/images/homepage_01.png'
import homepage_02 from '../../assets/images/homepage_02.png'
import Button from '../../components/UI/Button/Button'

function HomePage() {
  return (
    <div className={HomeStyles.homepage}>
      <div className={HomeStyles['homepage-wrapper']}>
        <section className={HomeStyles['homepage-section']}>
          <div className={HomeStyles['homepage-content']}>
            <span className={HomeStyles.point}>Point. 01</span>
            <h1 className={HomeStyles.h1}>
              누구나 손쉽게, 온라인 <br className={HomeStyles.hideOnTablet} />
              롤링 페이퍼를 만들 수 있어요
            </h1>
            <h2 className={HomeStyles.h2}>로그인 없이 자유롭게 만들어요.</h2>
          </div>
          <img
            className={HomeStyles.topImage}
            src={homepage_01}
            alt="홈페이지 상단"
            width="720"
            height="204"
          />
        </section>

        <section
          className={`${HomeStyles['homepage-section']} ${HomeStyles.reverse}`}
        >
          <div className={HomeStyles['homepage-content']}>
            <span className={HomeStyles.point}>Point. 02</span>
            <h1 className={HomeStyles.h1}>
              서로에게 이모지로 감정을
              <br className={HomeStyles.hideOnTablet} /> 표현해보세요
            </h1>
            <h2 className={HomeStyles.h2}>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </h2>
          </div>
          <img
            className={HomeStyles.bottomImage}
            src={homepage_02}
            alt="홈페이지 하단"
            width="720"
            height="204"
          />
        </section>
      </div>

      <div className={HomeStyles.buttonContainer}>
        <Button id={HomeStyles.button}>
          <Link to="/list">구경해보기</Link>
        </Button>
      </div>
    </div>
  )
}

export default HomePage
