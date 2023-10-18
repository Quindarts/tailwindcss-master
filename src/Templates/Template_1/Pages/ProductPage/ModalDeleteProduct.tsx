import React from 'react'
import { StyledModal } from './style'
import { Box, Button, Fade, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
function ModalDeleteProduct(props: any) {
    const { id, hanldeCloseModal } = props
    return (
        <Box id={id} className="main__frame--delete">
            <Box className="outline__icon">
                <CloseIcon />
            </Box>
            <Typography>Bạn có chắc chắn muốn xóa sản phẩm này? </Typography>
            <Box className="group__btn">
                <Button onClick={hanldeCloseModal} className="btn__exits">
                    Thoát
                </Button>
                <Button className="btn__delete">Xoá sản phẩm </Button>
            </Box>
        </Box>
    )
}

export default ModalDeleteProduct
