import { useState } from 'react'

interface IUseOpenCloseHandler {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const useOpenClose = (): IUseOpenCloseHandler => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}

export { useOpenClose }
