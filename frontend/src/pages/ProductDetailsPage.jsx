import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ProductDetails from "../components/Products/ProductDetails";
import { useParams } from 'react-router-dom';
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from 'react-redux';



const ProductDetailsPage = () => {
    const { allProducts } = useSelector((state) => state.products);


    const { name } = useParams();
    const [data, setData] = useState(null)
    const productName = name.replace(/-/g, " ");


    useEffect(() => {
        const data = allProducts && allProducts.find((i) => i.name === productName);
        setData(data)
        /* `window.scrollTo(0, 0)` is a JavaScript method that scrolls the window to the top of the page.
        In this code, it is used inside the `useEffect` hook to scroll the window to the top whenever
        the component is rendered. This ensures that when the user navigates to the
        `ProductDetailsPage`, the page starts at the top rather than at the previous scroll position. */
        window.scrollTo(0, 0)
    }, []);



    return (
        <div>
            <Header />
            <ProductDetails data={data} />
            {data && <SuggestedProduct data={data} />}
            <Footer />
        </div>
    )
}

export default ProductDetailsPage
