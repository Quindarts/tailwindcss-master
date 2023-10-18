import styled from '@emotion/styled'
import { Backdrop, Modal } from '@mui/material'

const theme = {
    orange_200: '#fff0e4',
    orange_300: '#ffb37c',
    orange_400: '#ff720d',
    dark: '#2b2623',
    black: '#0e0803',
    grey: '#f1eeea',
    pink: '#fee6ea',
    pink_600: '#f72b50',
}
export const CustomProductPage = styled.div`
    width: 1280px;
    margin: 0 auto;
    .product__page {
        &--head {
            display: flex;
            justify-content: space-between;
            gap: 3rem;
            color: ${theme.black};
            margin: 1rem 0;
            h1 {
                font-weight: bold;
                font-size: 1.5rem;
            }
            button {
                margin: 0 0.5rem;
            }
        }
        &--content {
            .header {
                margin: 3rem 0 1rem 0;
                display: flex;
                justify-content: space-between;
                .feature__product {
                    display: flex;
                    gap: 5px;
                    .btn__add,
                    .btn__other {
                        height: 2rem;
                        border-radius: 8px;
                        text-transform: none;
                        font-size: 12px;
                        svg {
                            font-size: 15px;
                        }
                    }
                    .btn__add {
                        color: white;
                        background-color: ${theme.orange_400};
                    }
                    .btn__other {
                        color: black;
                        background-color: ${theme.orange_200};
                    }
                }
                .search__product {
                    position: relative;
                    &--icon {
                        position: absolute;
                        cursor: pointer;
                        z-index: 2;
                    }
                    &--textfield {
                        .MuiInputBase-root {
                            height: 2rem;
                            width: 20rem;
                            font-size: 14px;
                            padding: 0.5rem 0.5rem 0.5rem 1.4rem;
                            input {
                                width: 100%;
                            }
                        }
                        .Mui-focused .MuiOutlinedInput-notchedOutline {
                            border-width: 2px;
                            border-color: ${theme.grey};
                            box-shadow: 1px 1px 1px 1px ${theme.orange_200};
                        }
                        .MuiOutlinedInput-notchedOutline {
                            border-color: ${theme.grey};
                            border-width: 2px;
                        }
                    }
                }
            }
            .table__product {
                .MuiDataGrid-root .MuiDataGrid-main {
                    font-size: 0.8rem;
                    font-weight: 500;
                    .Mui-selected {
                        background-color: white;
                    }
                    .MuiDataGrid-columnHeader:focus,
                    .MuiDataGrid-columnHeader:focus-within,
                    .MuiDataGrid-cell:focus,
                    .MuiDataGrid-cell:focus-within {
                        outline: none;
                    }
                    .MuiDataGrid-columnHeaders {
                        background-color: ${theme.orange_400};
                        color: white;
                        font-weight: bold;
                    }
                    .MuiDataGrid-columnHeaders .MuiDataGrid-columnSeparator {
                        visibility: hidden;
                    }
                    .MuiCheckbox-root.Mui-checked {
                        color: ${theme.orange_300};
                    }
                    .table__product--image img {
                        padding: 2px;
                        object-fit: contain;
                        border-radius: 50%;
                    }
                    button svg {
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`
export const StyledModal = styled(Modal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .main__frame--delete {
        border: none;
        border-radius: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 400px;
        box-shadow: 24;
        background-color: white;
        transform: translate(-50%, -50%);
        box-shadow: 0px 2px 24px #333;
        padding: 1rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .outline__icon {
            padding: 1.5rem;
            border-radius: 50%;
            margin: 1rem 0;
            background-color: ${theme.pink};
            svg {
                color: ${theme.pink_600};
                font-size: 2rem;
                font-weight: bold;
            }
        }
        .group__btn {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin: 1rem 0;
            button {
                text-transform: none;
            }
            .btn__delete {
                background-color: ${theme.pink_600};
                color: white;
                font-size: 12px;
                padding:4px 8px;
            }
        }
    }
`
