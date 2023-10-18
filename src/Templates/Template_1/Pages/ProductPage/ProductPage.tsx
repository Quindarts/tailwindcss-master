import { Box, Button, Fade, IconButton, TextField } from '@mui/material'
import { CustomProductPage, StyledModal } from './style'
import { useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import ModalDeleteProduct from './ModalDeleteProduct'

interface ProductTablePropsTypes {
    id: Number
    image: String
    name: String
    price: String
    quantity: Number
    description: String
    category_id: String
    discount: String
}
const rows = [
    {
        id: 'P151020230001',
        image: 'https://product.hstatic.net/200000312481/product/olc31004_2_b39ac20da55f482f909352073fcb0f73_grande.jpg',
        name: 'Áo Team Code Mely Màu Xám Đẹp',
        price: '200.000VND',
        quantity: 520,
        description: 'Chất liệu vải cotton, thoáng mát chống thấm, chống ẩm',
        category_id: 'CT151020230001',
        discount: '25%',
    },
    {
        id: 'P151020230002',
        image: 'https://product.hstatic.net/200000312481/product/olc31003_2_8e4cd6622567440e91e7ce8b362af137_grande.jpg',
        name: 'Áo Team Code Mely Hệ Mặt trời ',
        price: '250.000VND',
        quantity: 300,
        description: 'Chất liệu vải cotton, thoáng mát chống thấm, chống ẩm',
        category_id: 'CT151020230002',
        discount: '5%',
    },
    {
        id: 'P151020230003',
        image: 'https://product.hstatic.net/200000312481/product/olc31002_2_e77de8b09fe74b94aefdb487b5ea93ae_grande.jpg',
        name: 'Áo Trắng Code Mely code là mê ',
        price: '350.000VND',
        quantity: 150,
        description: 'Chất liệu vải cotton, thoáng mát chống thấm, chống ẩm',
        category_id: 'CT151020230002',
        discount: '25%',
    },
    {
        id: 'P151020230004',
        image: 'https://product.hstatic.net/200000312481/product/ajo4003_1_01d01a344ae044b7b8ddf87d96d47578_grande.jpg',
        name: 'Áo Hoodie Code Mely code Kem ',
        price: '550.000VND',
        quantity: 150,
        description: 'Chất liệu vải mềm mải, chống xù',
        category_id: 'CT151020230003',
        discount: '15%',
    },
    {
        id: 'P151020230005',
        image: 'https://product.hstatic.net/200000312481/product/aho2002_2_3b8e4a0a87ba4bea8da5302008670270_grande.jpg',
        name: 'Áo Hoodie Code Mely Màu DO Đẹp',
        price: '550.000VND',
        quantity: 220,
        description: 'Chất liệu vải cotton, thoáng mát chống thấm, chống ẩm',
        category_id: 'CT151020230001',
        discount: '25%',
    },
    {
        id: 'P151020230006',
        image: 'https://product.hstatic.net/200000312481/product/apo7006_2_5a387becfaee41ec9e71014a79535270_grande.jpg',
        name: 'Áo Team Code Mely Màu Nâu Đẹp',
        price: '200.000VND',
        quantity: 520,
        description: 'Chất liệu vải cotton, thoáng mát chống thấm, chống ẩm',
        category_id: 'CT151020230001',
        discount: '25%',
    },
]
enum ModalProductEnum {
    VIEW,
    DELETE,
    ALERT,
}
function ProductPage() {
    const [modalProduct, setmodalProduct] = useState({
        _id: '',
        isOpen: false,
    })

    const handlemodalProduct = () =>
        setmodalProduct({ ...modalProduct, isOpen: true })
    const handleCloseModal = () =>
        setmodalProduct({ ...modalProduct, isOpen: false })
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'Mã sản phẩm',
            align: 'center',
            headerAlign: 'center',
            flex: 1,
            sortable: false,
        },
        {
            field: 'image',
            headerName: 'Ảnh sản phẩm',
            align: 'center',
            headerAlign: 'center',
            cellClassName: 'table__product--image',
            renderCell(params: any) {
                return (
                    <>
                        <img
                            width={50}
                            height={50}
                            src={params.row.image}
                            alt=""
                        />
                    </>
                )
            },
            flex: 1,
            sortable: false,
        },
        {
            field: 'name',
            headerName: 'Tên sản phẩm',
            align: 'center',
            headerAlign: 'center',
            flex: 2,
            sortable: false,
        },
        {
            field: 'price',
            headerName: 'Đơn giá',
            align: 'center',
            headerAlign: 'center',
            type: 'number',
            flex: 1,
            sortable: false,
        },
        {
            field: 'quantity',
            headerName: 'Số lượng',
            align: 'center',
            headerAlign: 'center',
            description: 'This column has a value getter and is not sortable.',
            flex: 0.8,
            sortable: false,
        },
        {
            field: 'description',
            headerName: 'Mô tả',
            align: 'center',
            headerAlign: 'center',
            type: 'string',
            flex: 1.5,
            sortable: false,
        },
        {
            field: 'discount',
            headerName: 'Giảm giá',
            align: 'center',
            headerAlign: 'center',
            type: 'string',
            flex: 1,
            sortable: false,
        },
        {
            field: 'action',
            headerName: 'Action',
            align: 'center',
            headerAlign: 'center',
            type: 'string',
            flex: 1,
            sortable: false,
            renderCell() {
                return (
                    <>
                        <IconButton
                            onClick={handlemodalProduct}
                            aria-label="delete"
                            size="small"
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" size="small">
                            <CreateIcon />
                        </IconButton>
                        <IconButton aria-label="delete" size="small">
                            <RemoveRedEyeIcon />
                        </IconButton>
                    </>
                )
            },
        },
    ]

    return (
        <CustomProductPage className="product__page">
            <Box className="product__page--head">
                <Box className="">
                    <h1 className="">Quản lý Sản phẩm</h1>
                    <p>
                        Gọi Áo Code Mely là xoài non dễ bị trộm. Vì nó ngon hết
                        nước chấm.
                    </p>
                </Box>
            </Box>
            <Box className="product__page--content">
                <Box className="header">
                    <Box className="search__product">
                        <IconButton
                            className="search__product--icon"
                            aria-label="search"
                            size="small"
                        >
                            <SearchIcon />
                        </IconButton>
                        <TextField
                            className="search__product--textfield"
                            placeholder="Tìm kiếm"
                        />
                    </Box>
                    <Box className="feature__product">
                        <Button variant="contained" className="btn__add">
                            <AddIcon /> Thêm sản phẩm mới
                        </Button>
                        {/* <Button className='btn__other'>import</Button>
                            <Button className='btn__other'>export</Button> */}
                    </Box>
                </Box>
                <Box className="table__product">
                    <Box>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            checkboxSelection
                            disableColumnMenu
                        />
                    </Box>
                </Box>
                <Box className="footer"></Box>
            </Box>
            <StyledModal
                aria-labelledby="transition-modal-Product"
                aria-describedby="transition-modal-description"
                open={modalProduct.isOpen}
                onClose={handleCloseModal}
                closeAfterTransition
            >
                <Fade in={modalProduct.isOpen}>
                    <ModalDeleteProduct
                        id={modalProduct._id}
                        handleCloseModal={handleCloseModal}
                    />
                </Fade>
            </StyledModal>
        </CustomProductPage>
    )
}

export default ProductPage
