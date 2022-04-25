import React, { createContext, useContext, useState } from 'react'
import Modal from 'react-modal'

interface IModalContext {
  modalOpenState: boolean
  setModalOpenState: React.Dispatch<React.SetStateAction<boolean>>
  modalContent?: JSX.Element
  setModalContent: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>
}

const ModalContext = createContext<IModalContext|undefined>(undefined)

export const useModalContext = () => {
  const context = useContext(ModalContext)

  if (context === undefined)
    throw new Error('Call "useModal´Context" only inside a "ModalContextProvider"')

  return context
}

const ModalContextProvider: React.FC = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true)
  const [modalContent, setModalContent] = useState<JSX.Element|undefined>()
  const defaultStyle = {
    content: {
      padding:'0',
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      zIndex: 10000,
      backgroundColor: 'rgba(21,9,110,0.53)'
    }
  }

  const onRequestClose = () => {
    setModalIsOpen(false)
    setModalContent(undefined)
  }

  return (
    <ModalContext.Provider value={
      {
        modalOpenState: modalIsOpen,
        setModalOpenState: setModalIsOpen,
        modalContent: modalContent,
        setModalContent: setModalContent
      }
    }>
      <Modal
        isOpen={ modalIsOpen }
        onRequestClose={ onRequestClose }
        style={ defaultStyle }
        contentLabel='FOO BAR'
        preventScroll
      >
        { modalContent }
      </Modal>
      { children }
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
