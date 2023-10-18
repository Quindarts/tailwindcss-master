import { Box, Fade, Typography } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'
import React from 'react'

function ModalViewProduct(props: any) {
    const { id, handleCloseModal } = props
    return (
        <Box id={id} className="main__frame--delete">
            <Box className="outline__icon">
                <GridCloseIcon />
            </Box>
            <Typography>Bạn có chắc chắn muốn xóa sản phẩm này? </Typography>
        </Box>
    )
}

export default ModalViewProduct
