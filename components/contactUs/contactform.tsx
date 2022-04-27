import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/contactform.module.scss'
import handleSubmit from './submitForm'
import { BeatLoader } from 'react-spinners'
import { BsCheck2Circle } from 'react-icons/bs'

const Contactform: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [subject, setSubject] = useState<string>('')

  const [ready, setReady] = useState<boolean>(false)
  const [response, setResponse] = useState<any>()

  const buttonRef = useRef<HTMLButtonElement>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)


    const submitResponse = await handleSubmit({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message,
      subject: subject,
    }, e)

    setResponse(submitResponse)
    console.log(submitResponse)

    if (submitResponse.valid && submitResponse.success) {
      setName('')
      setCompany('')
      setEmail('')
      setPhone('')
      setMessage('')
      setSubject('')
      setReady(true)
      setLoading(false)

      return
    }
  }

  useEffect(() => {
    if (!buttonRef.current) return
    buttonRef.current.style.background = loading ? 'grey' : 'orangeRed'
  }, [loading])

  if (ready) return (    
    <div className={styles.container}>
      <div className={styles.sendReady}>
        <BsCheck2Circle size={55} color='lightGreen' />
        <h2>Thank you!</h2>
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>contact me</h1>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
        <div className={styles.inputs}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            required type="text"
            placeholder='Name *'
            disabled={loading}
          />
          <input
            value={company}
            onChange={e => setCompany(e.target.value)}
            type="text"
            placeholder='Company'
            disabled={loading}
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            required type="email"
            placeholder='Email *'
            disabled={loading}
          />
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            type="tel"
            placeholder='Phone'
            disabled={loading}
          />
          <input
            value={subject}
            onChange={e => setSubject(e.target.value)}
            required type="text"
            placeholder='Subject *'
            disabled={loading}
          />
        </div>
        <div className={styles.message}>
          <textarea value={message}
            onChange={e => setMessage(e.target.value)}
            required
            placeholder='Message *'
            disabled={loading}
          />
          <button ref={buttonRef} type='submit' className={styles.submit}>
            {
              loading
                ? <BeatLoader size={8} />
                : 'Send'
            }
          </button>
        </div>
      </form>
      <p style={{ color: 'red' }}>
        {
          response?.valid === false ? 'Err. Form is not valid. Please check fields.' : ''
        }
      </p>
      <p style={{ color: 'red' }}>
        {
          response?.success === false ? 'Err. Back end does not respond.' : ''
        }
      </p>
    </div>
  )
}

export default Contactform
