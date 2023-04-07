import React from 'react'
import { Link } from 'react-router-dom'

const FormLink = ({ to, text }) => {
    return (
        <Link to={to} variant="body2">
            {text}
        </Link>
    )
}

export default FormLink