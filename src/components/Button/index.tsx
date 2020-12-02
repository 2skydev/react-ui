import React from 'react'
import { withStyles } from '@material-ui/styles'
import clsx from 'clsx'

import styles from './styles'

export interface ButtonProps {
  color: string
  children: React.ReactChildren
}

const Button = (props: ButtonProps): JSX.Element => {
  const { color, children } = props

  return (
    <button className={clsx()}>
    </button>
  )
}

export default withStyles(styles, {
  name: 'Button'
})(Button)
