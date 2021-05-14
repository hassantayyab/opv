import { useEffect, useRef, useState } from 'react'
import { staggerLines } from '../../animations'
import styles from './member.module.scss'

const Member = ({ data }) => {
  const [expanded, setexpanded] = useState(false)
  const [height, setHeight] = useState({
    maxHeight: '8.4rem',
  })
  const textRef = useRef(null)
  const els = useRef([])

  useEffect(() => {
    staggerLines(els.current, { yPercent: 0, y: 20 })
  }, [])

  useEffect(() => {
    if (!expanded) {
      setHeight('8.4rem')
    } else {
      setHeight(`${textRef.current.scrollHeight}px`)
    }
  }, [expanded])

  return (
    <div id={styles.member}>
      <div className={styles.wrapper}>
        <div className={styles.designation} ref={(e) => (els.current[0] = e)}>
          <div>{data.designation}</div>
        </div>
        <div className={styles.description} ref={(e) => (els.current[1] = e)}>
          <h4>{data.name}</h4>
          <div ref={textRef} id="expandable" style={{ maxHeight: `${height}` }}>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>
          <div className={styles.actions}>
            <button type="button" onClick={() => setexpanded(!expanded)}>
              <img
                src="/arrow-down.svg"
                alt="expand button"
                className={`${expanded ? styles.expanded : ''}`}
              />
            </button>
            <a href={data.profile} target="_blank" rel="noreferrer">
              <img src="/twitter.svg" alt="social profile link" />
            </a>
          </div>
        </div>
        <div className={styles.image} ref={(e) => (els.current[2] = e)}>
          <img src={data.image} alt="member" />
        </div>
      </div>
    </div>
  )
}

export default Member
