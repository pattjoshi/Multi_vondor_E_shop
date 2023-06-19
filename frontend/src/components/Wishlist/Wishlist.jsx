import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {

    const cartData = [
        {
            name: "Iphone 14 pro max 256 gb ssd and 8 gb ram sliver colour",
            description: "test description",
            price: 1000,
        },
        {
            name: "Iphone 14 pro max 256 gb ssd and 8 gb ram sliver colour",
            description: "test description",
            price: 63400,
        },
        {
            name: "Iphone 14 pro max 256 gb ssd and 8 gb ram sliver colour",
            description: "test description",
            price: 3230,
        },
    ]


    return (
        <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
            <div className='fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm'>
                <div >
                    <div className='flex w-full justify-end pt-5 pr-5 '>
                        <RxCross1
                            size={25}
                            className="cursor-pointer"
                            onClick={() => setOpenWishlist(false)}
                        />
                    </div>
                    {/* item length */}
                    <div className={`${styles.noramlFlex} p-4`}>
                        <AiOutlineHeart size={25} />
                        <h5 className="pl-2 text-[20px] font-[500]">
                            3 items
                        </h5>
                    </div>

                    {/* Cart Single item */}
                    <br />
                    <div className='w-full border-t'>
                        {
                            cartData && cartData.map((i, index) => {
                                return (
                                    <CartSingle data={i} key={index} />
                                )
                            })
                        }
                    </div>



                </div>
            </div>
        </div>
    )
}

const CartSingle = ({ data }) => {
    const [value, setValue] = useState(1)
    const totalPrice = data.price * value

    return (
        <>
            <div className='border-b p-4'>
                <div className='w-full flex items-center'>
                    <RxCross1
                        className='cursor-pointer'
                    />
                    <img src="https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg"
                        className='w-[80px] h-[80px] ml-2 '
                        alt="side card" />

                    <div className='pl-[15px]'>
                        <h1>{data.name}</h1>

                        <h4
                            className='font-[400] text-[17px] pt-[3px]  text-[#d02222] font-Roboto '
                        >
                            US${totalPrice}
                        </h4>
                    </div>

                    <div>
                        <BsCartPlus
                            size={25}
                            className='cursor-pointer'
                            title='Add to cart'
                        />
                    </div>
                </div>

            </div>

        </>
    )
}




export default Wishlist



