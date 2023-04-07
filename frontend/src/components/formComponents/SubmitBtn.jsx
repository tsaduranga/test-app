import { Button } from '@mui/material'
import React from 'react'

const SubmitBtn = ({ text }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      {text}
    </Button>
  )
}

export default SubmitBtn