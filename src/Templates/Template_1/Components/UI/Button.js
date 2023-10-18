import styled from '@emotion/styled'
import { Button as MuiButton } from '@mui/material'
import theme from 'Theme'
const CustomButton = styled(MuiButton)`
    &.hover:hover {
        color: ${theme.reddemo};
    }
`
const Button = (props) => {
    const { children, className, ...rest } = props
    return (
        <CustomButton {...rest} className={`${className}`}>
            {children}
        </CustomButton>
    )
}
export default Button
