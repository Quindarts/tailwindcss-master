import styled from '@emotion/styled'
import { IconButton, TextField } from '@mui/material'
import { Icon } from '@iconify/react'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useState } from 'react'
const DemoTextfield = styled(TextField)`
    &.text-red {
        color: red;
    }
    &.text-password {
        color: blue;
    }
`

function Textfield(props) {
    const {
        className,
        type,
        color,
        placeholder,
        error,
        label,
        helperText,
        ...rest
    } = props
    const [showPassword, setShowPassword] = useState(true)
    const handlePassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="relative">
            {' '}
            <DemoTextfield
                {...rest}
                label={label}
                type={showPassword ? type : 'text'}
                className={`${className} textfield-${color} text-${type} }
            w-full`}
                placeholder={placeholder}
            />
            {type === 'password' && (
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handlePassword}
                    edge="end"
                    className="absolute right-3 top-5"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            )}
        </div>
    )
}

export default Textfield
