import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/contactform.module.scss'
import handleSubmit from './submitForm'
import { BeatLoader } from 'react-spinners'
import { BsCheck2Circle } from 'react-icons/bs'
import { Button, TextArea, TextAreaStylesProps, TextField, TextFieldStylesProps } from '@rintsin/common-components'
import { useModalContext } from '@rintsin/common-components'

const inputStyles: TextFieldStylesProps = {
  colors: {
    default: {
      borderColor: 'orangered',
      // inputBackgroundColor: '#fff',
      inputColor: '#ffe4c4',
      labelColor: 'orangered',
    },
    focus: {
      labelColor: 'purple',
      borderColor: 'purple',
      inputColor: '#ffe4c4',
    },
    invalid: {
      labelColor: 'red'
    }
  }
}

const messageStyles: TextAreaStylesProps = {
  colors: {
    default: {
      labelColor: 'orangered',
      borderColor: 'orangered',
      inputColor: '#ffe4c4',
    },
    focus: {
      labelColor: "purple",
      borderColor: "purple",
      inputColor: '#ffe4c4',
    }
  }
}

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

  const { modal, exitModal } = useModalContext()

  useEffect(() => {
    if (!ready) return
    const id = setTimeout(() => {
      console.log('Clear timeout')
      exitModal()
    }, 3000)
    return () => clearTimeout(id)
  }, [exitModal, ready])

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
          <TextField
            value={name}
            onChange={e => setName(e.target.value)}
            required
            type='text'
            label='Name'
            disabled={loading}
            styles={inputStyles}
          />
          <TextField
            value={company}
            onChange={e => setCompany(e.target.value)}
            type='text'
            label='Company'
            disabled={loading}
            styles={inputStyles}
          />
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            type='email'
            label='Email'
            disabled={loading}
            styles={inputStyles}
          />
          <TextField
            value={phone}
            onChange={e => setPhone(e.target.value)}
            type="tel"
            label='Phone'
            disabled={loading}
            styles={inputStyles}
          />
          <TextField
            value={subject}
            onChange={e => setSubject(e.target.value)}
            required
            type="text"
            label='Subject'
            disabled={loading}
            styles={inputStyles}
          />
        </div>
        <div className={styles.message}>
          <TextArea
            onChange={e => setMessage(e.target.value)}
            value={message}
            required
            label='Message'
            disabled={loading}
            styles={messageStyles}
          />
          <button ref={buttonRef} tabIndex={6} type='submit' className={styles.submit}>
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
