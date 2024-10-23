import { FC, MouseEventHandler, PropsWithChildren } from 'react'

type IButton = {
  type?: 'submit' | 'reset' | 'button'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<PropsWithChildren<IButton>> = ({
  type,
  onClick,
  children
}) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
