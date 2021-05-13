import { useEffect, useRef } from 'react'
import { staggerLines } from '../../animations'
import Container from '../../container'
import styles from './profiles.module.scss'

const Profiles = () => {
  const els = useRef([])

  useEffect(() => {
    staggerLines(els.current)
  }, [])

  return (
    <div className={styles.profiles} id="featured-profiles">
      <Container>
        <div className={styles.wrapper}>
          <h4>Featured Profiles</h4>
          <img
            src="/profile-1.svg"
            alt="profile 2"
            ref={(e) => (els.current[0] = e)}
          />
          <img
            src="/profile-2.svg"
            alt="profile 1"
            ref={(e) => (els.current[1] = e)}
          />
          <img
            src="/profile-3.svg"
            alt="profile 3"
            ref={(e) => (els.current[2] = e)}
          />
          <img
            src="/profile-4.svg"
            alt="profile 4"
            ref={(e) => (els.current[3] = e)}
          />
        </div>
      </Container>
    </div>
  )
}

export default Profiles
