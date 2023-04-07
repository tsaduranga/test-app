import React from 'react'

const FormError = ({ error }) => {
  return (
    <div className="alert" style={{ color: 'red' }}>
      {error}
    </div>
  )
}

export default FormError