import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import styles from './ProductsGrid.module.scss'
import { ProductContext } from '../ProductContext/ProductContext'

import Pagination from './Pagination/Pagination'
import ItemProduct from '../../../smallComponents/ItemProduct/ItemProduct'

const ProductsGrid = () => {

  const context = useContext(ProductContext)
  const productsShow = context.productsShow

  const currentItems = context.currentItems
  const setCurrentItems = context.setCurrentItems


 


  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__item}>
        {
          productsShow.list.length === 0 &&
          (<h2>Không có sản phẩm phù hợp</h2>)
        }
        {
          currentItems.map((product, index) => (
            <div key={index}>
              <ItemProduct
                product={product}
              />
            </div>

          ))
        }

      </div>
      <Pagination itemsPerPage={20} />

    </div>
  )
}

export default ProductsGrid