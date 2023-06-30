import React, { useEffect, useState } from 'react'
import Header from "../components/Layout/Header";
import { useSelector } from "react-redux";
import Loader from "../components/Layout/Loader";
import { useSearchParams } from "react-router-dom";
import styles from '../styles/styles';
import { productData } from '../static/data';
import ProductCard from "../components/Route/ProductCard/ProductCard";

const BestSellingPage = () => {

    const [data, setData] = useState([])
    const { allProducts, isLoading } = useSelector((state) => state.products);
    useEffect(() => {
        //  const d = allProducts && allProducts.sort((a,b) => b.sold_out - a.sold_out); we will add it after complete order route
        const d = allProducts;
        setData(d);
        window.scrollTo(0, 0);
    }, [allProducts])

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <Header activeHeading={2} />
                        <br />
                        <br />
                        <div className={`${styles.section}`}>
                            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                                {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )



}

export default BestSellingPage







