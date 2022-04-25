import React, { useState } from 'react'
import styles from '../styles/contactform.module.scss'

const Contactform: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>contact me</h1>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
        <div className={styles.inputs}>
          <input required type="text" placeholder='Name *' disabled={loading} />
          <input type="text" placeholder='Company' disabled={loading} />
          <input required type="email" placeholder='Email *' disabled={loading} />
          <input type="tel" placeholder='Phone' disabled={loading} />
          <input required type="text" placeholder='Subject *' disabled={loading} />
        </div>
        <div className={styles.message}>
          <textarea required placeholder='Message *'></textarea>
          <button type='submit' className={styles.submit}>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contactform
