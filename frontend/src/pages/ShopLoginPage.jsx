import React, { useEffect } from 'react'
import ShopLogin from "../components/Shop/ShopLogin";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShopLoginPage = () => {
    const navigate = useNavigate();
    const { isSeller, isLoading } = useSelector((state) => state.seller);
    // if user is login then redirect to home page
    useEffect(() => {
        if (isSeller === true) {
            navigate(`/dashboard`);
        }
    }, [isLoading, isSeller])
    return (
        <div>
            <ShopLogin />
        </div>
    )
}

export default ShopLoginPage