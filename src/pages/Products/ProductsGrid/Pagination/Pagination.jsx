import React, { useContext, useEffect, useState, useNavigate } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import { PageContext } from '../../../../components/PageContext/PageContext';
import { ProductContext } from '../../ProductContext/ProductContext';
import styles from './Pagination.module.scss'

function Pagination({ itemsPerPage }) {

    const context = useContext(ProductContext)

    const productsShow = context.productsShow

    const setCurrentItems = context.setCurrentItems
    
    const getWindowHref = useContext(PageContext).getWindowHref


    const [pageCount, setPageCount] = useState(0);

    const itemOffset = context.itemOffset
    const setItemOffset = context.setItemOffset

    const remountComponent = context.remountComponent
    

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(productsShow.list.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(productsShow.list.length / itemsPerPage));
        console.log("itembenpage" +  itemOffset)
    }, [itemOffset, itemsPerPage, productsShow]);


    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productsShow.list.length;
        setItemOffset(newOffset);
        // console.log(event)
    };

    // useEffect(() => {
    //     let path
    //     if(!getWindowHref().tab2){
    //         path = `/${getWindowHref().page}/${page}`
    //     }
    //     else{
    //         path = `/${getWindowHref().page}/${getWindowHref().tab2}/${page}`
    //     }
    //     console.log(path)
    // }, [page])

    

    return (
        <div className={styles.wrapperDiv} key={remountComponent}>
            <ReactPaginate
                breakLabel="..."
                nextLabel="❯"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="❮"
                renderOnZeroPageCount={null}
                containerClassName = {styles.wrapper}
                previousLinkClassName = {styles.directButton}
                nextLinkClassName = {styles.directButton}
                activeClassName = {styles.activePage}
            />
        </div>
    );
}

export default Pagination