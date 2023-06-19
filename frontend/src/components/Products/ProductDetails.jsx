import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineMessage,
    AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetails = ({ data }) => {
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(0);
    const navigate = useNavigate();

    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleMessageSubmit = () => {
        navigate("/inbox/conversation=50453sddvgfgva");
    };

    return (
        <div className="bg-white">
            {data ? (
                <div className={`${styles.section} w-[90%] 800px:w-[80%] `}>
                    <div className="w-full py-5">
                        <div className="block w-full 800px:flex">
                            <div className="w-full 800px:w-[50%]">
                                <img
                                    src={data.image_Url[select].url}
                                    alt=""
                                    className="w-[80%]"
                                />
                                <div className="w-full flex">
                                    <div
                                        className={`${select === 0 ? "border" : "null"
                                            } cursor-pointer `}
                                    >
                                        <img
                                            src={data?.image_Url[0].url}
                                            alt="img"
                                            className="h-[200px]"
                                            onClick={() => setSelect(0)}
                                        />
                                    </div>
                                    <div
                                        className={`${select === 1 ? "border" : "null"
                                            } cursor-pointer `}
                                    >
                                        <img
                                            src={data?.image_Url[1].url}
                                            alt="img"
                                            className="h-[200px]"
                                            onClick={() => setSelect(1)}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Rtght */}
                            <div className="w-full 800px:w-[50%] pt-3 ">
                                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                                <p>{data.description}</p>
                                <div className="flex pt-3">
                                    <h4 className={`${styles.productDiscountPrice}`}>
                                        {data.discount_price}$
                                    </h4>
                                    <h3 className={`${styles.price}`}>
                                        {data.price ? data.price + "$" : null}
                                    </h3>
                                </div>

                                {/* inc dec option */}
                                <div className="flex items-center mt-12 justify-between pr-3">
                                    <div>
                                        <button
                                            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                                            onClick={decrementCount}
                                        >
                                            -
                                        </button>

                                        <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                                            {count}
                                        </span>

                                        <button
                                            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                                            onClick={incrementCount}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div>
                                        {click ? (
                                            <AiFillHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => setClick(!click)}
                                                color={click ? "red" : "#333"}
                                                title="Remove from wishlist"
                                            />
                                        ) : (
                                            <AiOutlineHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => setClick(!click)}
                                                title="Add to wishlist"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                                // onClick={() => addToCartHandler()
                                // }
                                >
                                    <span className="text-white flex items-center">
                                        Add to Cart <AiOutlineShoppingCart className="ml-1" />
                                    </span>
                                </div>
                                <div className="flex items-center pt-8">
                                    <img
                                        src={data.shop.shop_avatar.url}
                                        alt=""
                                        className="w-[50px] h-[50px] rounded-full mr-2"
                                    />
                                    <div className="pr-8">
                                        <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                                            {data.shop.name}
                                        </h3>

                                        <h5 className="pb-3 text-[15px]">
                                            ({data.shop.ratings}) Ratings
                                        </h5>
                                    </div>
                                    <div
                                        className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                                        onClick={handleMessageSubmit}
                                    >
                                        <span className="text-white flex items-center">
                                            Send Message <AiOutlineMessage className="ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Details  info */}

                    <ProductDetailsInfo data={data} />
                    <br />
                    <br />
                </div>
            ) : null}
        </div>
    );
};

const ProductDetailsInfo = ({ data }) => {
    const [active, setActive] = useState(1);

    return (
        <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
            <div className="w-full flex justify-between border-b pt-10 pb-2">
                <div className="relative">
                    <h5
                        className={
                            "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
                        }
                        onClick={() => setActive(1)}
                    >
                        Product Details
                    </h5>
                    {active === 1 ? (
                        <div className={`${styles.active_indicator}`} />
                    ) : null}
                </div>

                <div className="relative">
                    <h5
                        className={
                            "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
                        }
                        onClick={() => setActive(2)}
                    >
                        Product Reviews
                    </h5>
                    {active === 2 ? (
                        <div className={`${styles.active_indicator}`} />
                    ) : null}
                </div>

                <div className="relative">
                    <h5
                        className={
                            "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
                        }
                        onClick={() => setActive(3)}
                    >
                        Seller Information
                    </h5>
                    {active === 3 ? (
                        <div className={`${styles.active_indicator}`} />
                    ) : null}
                </div>
            </div>

            {active === 1 ? (
                <>
                    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                        necessitatibus similique aliquid exercitationem blanditiis est enim
                        veritatis laboriosam unde eos iusto aut debitis, nam rem sit
                        delectus vitae, obcaecati magni ut error rerum praesentium atque.
                        Quos iste ipsa aliquid eveniet veritatis facilis sit error accusamus
                        culpa corporis id, delectus non, vel, dignissimos sint. Veniam,
                        voluptas.
                    </p>
                    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                        necessitatibus similique aliquid exercitationem blanditiis est enim
                        veritatis laboriosam unde eos iusto aut debitis, nam rem sit
                        delectus vitae, obcaecati magni ut error rerum praesentium atque.
                        Quos iste ipsa aliquid eveniet veritatis facilis sit error accusamus
                        culpa corporis id, delectus non, vel, dignissimos sint. Veniam,
                        voluptas.
                    </p>
                    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line ">
                        Lorem 2  sit amet consectetur adipisicing elit. Possimus
                        necessitatibus similique aliquid exercitationem blanditiis est enim
                        veritatis laboriosam unde eos iusto aut debitis, nam rem sit
                        delectus vitae, obcaecati magni ut error rerum praesentium atque.
                        Quos iste ipsa aliquid eveniet veritatis facilis sit error accusamus
                        culpa corporis id, delectus non, vel, dignissimos sint. Veniam,
                        voluptas.
                    </p>
                    <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line ">
                        Lorem 3  sit amet consectetur adipisicing elit. Possimus
                        necessitatibus similique aliquid exercitationem blanditiis est enim
                        veritatis laboriosam unde eos iusto aut debitis, nam rem sit
                        delectus vitae, obcaecati magni ut error rerum praesentium atque.
                        Quos iste ipsa aliquid eveniet veritatis facilis sit error accusamus
                        culpa corporis id, delectus non, vel, dignissimos sint. Veniam,
                        voluptas.
                    </p>
                </>
            ) : null}

            {active === 2 ? (
                <>
                    <p>No Reviews Yet!</p>
                </>
            ) : null}

            {active === 3 ? (
                <>
                    <div className="w-full block 800px:flex p-5">
                        <div className="w-full 800px:w-[50%]">
                            <div className="flex items-center">
                                <img src={data.shop.shop_avatar.url}
                                    alt=""
                                    className="w-[50px] h-[50px] rounded-full"
                                />
                                <div className="pl-3">
                                    <h3 className={`${styles.shop_name}`}>
                                        {data.shop.name}
                                    </h3>
                                    <h5 className="pb-3 text-[15px]">
                                        ({data.shop.ratings}) Ratings
                                    </h5>
                                </div>
                            </div>
                            <p className="pt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime error aperiam magni optio atque architecto quidem veritatis veniam dolorem perferendis labore, beatae, tempore reiciendis alias. Assumenda iure laudantium sed porro blanditiis, delectus, voluptatum, officia cum deleniti corrupti provident doloribus?
                            </p>

                        </div>

                        <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
                            <div className="text-left">
                                <h5>
                                    Joined on :{" "}
                                    <span className="font-[500]">
                                        14 March,2023
                                    </span>
                                </h5>

                                <h5>
                                    Total Product :{" "}
                                    <span className="font-[500] pt-3 ">
                                        1,432
                                    </span>
                                </h5>

                                <h5>
                                    Total Reviews :{" "}
                                    <span className="font-[500] pt-3 ">
                                        433
                                    </span>
                                </h5>
                                <Link to="/">
                                    <div
                                        className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                                    >
                                        <h4 className="text-white">Visit Shop</h4>
                                    </div>
                                </Link>

                            </div>

                        </div>
                    </div>
                </>
            ) : null}

        </div>
    );
};

export default ProductDetails;
