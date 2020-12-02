import React from 'react'
import { withStyles } from '@material-ui/styles'
import clsx from 'clsx'

import styles from './styles'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
}

const Button = (props: ButtonProps): JSX.Element => {
  const { className, children } = props

  return (
    <button className={clsx(className)}>
      {children}
    </button>
  )
}

Button.defaultProps = {

}

export default withStyles(styles, {
  name: 'Button'
})(Button)
