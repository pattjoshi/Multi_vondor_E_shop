import React from 'react'
import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = ({ active }) => {
    return (
        <div className={`   w-full block rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
            <div className='w-full lg:-w[50%] m-auto bg-gray-50'>
                <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="img event cart" />
            </div>

            <div className='w-full lg:[w-50%] flex flex-col justify-center'>
                <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/258GB</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi atque illum rerum? Repudiandae, amet nam, a quidem soluta quis quae enim inventore nihil sapiente, facilis sint? Fugit nam, maxime voluptatem dignissimos blanditiis iste, quae veniam velit doloremque hic ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi atque illum rerum? Repudiandae, amet nam, a quidem soluta quis quae enim inventore nihil sapiente, facilis sint? Fugit nam, maxime voluptatem dignissimos blanditiis iste, quae veniam velit doloremque hic ducimus!
                </p>

                <div className="flex py-2 justify-between">
                    <div className='flex'>
                        <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through'
                        >
                            $ 12455
                        </h5>
                        <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
                            $ 9999
                        </h5>
                    </div>
                    <span className='pr-3 font-[400] text-[17px] text-[#44a55e]'>
                        120 sold
                    </span>
                </div>
                <CountDown />
            </div>

        </div>
    )
}

export default EventCard