import { Typography } from '@mui/material'
import React from 'react'

const FormHeaderText = ({ text, varient}) => {
  return (
    <Typography component="h1" variant={varient}>
            {text}
    </Typography>
  )
}

export default FormHeaderText