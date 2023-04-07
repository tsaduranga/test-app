import { TextField } from '@mui/material'
import React from 'react'

const TextFieldComponent = ({formik,id, name, label, type}) => {
  return (
    <TextField
                  margin="normal"
                  type={type}
                  required
                  fullWidth
                  id={id}
                  name={name}
                  label={label}
                  value={formik.values[name]}
                  onChange={formik.handleChange}
                  error={formik.touched[name] && Boolean(formik.errors[name])}
                  helperText={formik.touched[name] && formik.errors[name]}
                />
  )
}

export default TextFieldComponent