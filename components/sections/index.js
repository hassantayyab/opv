import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './sections.module.scss'

// TODO: Remove this component
export default function Sections() {
  const containerRef = useRef()
  const headingRef = useRef()

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: 'pink',
      scrollTrigger: { trigger: headingRef.current, srub: true },
    })
  }, [])

  return (
    <>
      <section className={styles.section}>
        <h1>Section 1</h1>
      </section>
      <section className={styles.section} ref={containerRef}>
        <h1 ref={headingRef}>Section 2</h1>
      </section>
    </>
  )
}
