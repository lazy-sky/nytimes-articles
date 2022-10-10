import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface IPortal {
  children: ReactNode
}

const Portal = ({ children }: IPortal) => {
  const rootElement = document.getElementById('portal') as HTMLElement
  return createPortal(children, rootElement)
}

export default Portal
