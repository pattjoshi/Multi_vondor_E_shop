import React, { useEffect, useState } from 'react'
import Header from "../components/Layout/Header";
import { useSelector } from "react-redux";
import Loader from "../components/Layout/Loader";
import { useSearchParams } from "react-router-dom";
import styles from '../styles/styles';
import ProductCard from "../components/Route/ProductCard/ProductCard";
import Footer from "../components/Layout/Footer";
const ProductsPage = () => {
    const [searchParams] = useSearchParams();
    const categoryData = searchParams.get("category");
    const { allProducts, isLoading } = useSelector((state) => state.products);
    const [data, setData] = useState([])

    useEffect(() => {
        if (categoryData === null) {
            const d = allProducts
        } else {
            const d = allProducts && allProducts.filter((i) => i.category === categoryData);
            setData(d)
        }
        // window.scrollTo(0, 0);

    }, [allProducts])



    return (

        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <Header activeHeading={3} />
                        <br />
                        <br />
                        <div className={`${styles.section}`}>
                            <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12'>
                                {
                                    data && data.map((i, index) => <ProductCard data={i} key={index} />)
                                }
                            </div>
                            {
                                data && data.length === 0 ? (
                                    <h1 className="text-center w-full pb-[100px] text-[20px]">
                                        No Product Found!</h1>
                                ) : null
                            }
                        </div>
                        <Footer />
                    </div>
                )
            }
        </>
    )
}

export default ProductsPage