import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";


const Signup = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);

    // const navigate = useNavigate()

    // fule upload
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        // meaning of uper line is that we are creating a new object with the name of config and the value of config is {headers:{'Content-Type':'multipart/form-data'}}  

        const newForm = new FormData();
        // meaning of uper line is that we are creating a new form data object and we are sending it to the backend with the name of newForm and the value of newForm is new FormData()
        newForm.append("file", avatar);
        // meanin of newForm.append("file",avatar) is that we are sending a file to the backend with the name of file and the value of the file is avatar
        newForm.append("name", name);
        newForm.append("email", email);
        newForm.append("password", password)


        axios
            .post(`${server}/user/create-user`, newForm, config)
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setPassword("");
                setAvatar();
            }).catch((error) => {
                toast.error(error.response.data.message);
            })
    }

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Register as new user
                </h2>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-6' onSubmit={handleSubmit} >
                        {/* Full Name start */}
                        <div>
                            <label htmlFor="email"
                                className='block text-sm font-medium text-gray-700'
                            >
                                Full Name
                            </label>
                            <div className='mt-1'>
                                <input type="text"
                                    name='text'
                                    autoComplete='text'
                                    required
                                    placeholder='john doe'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                />
                            </div>
                        </div>
                        {/* Full Name end */}

                        {/* Email address */}
                        <div>
                            <label htmlFor="email"
                                className='block text-sm font-medium text-gray-700'
                            >
                                Email Address
                            </label>
                            <div className='mt-1 relative'>
                                <input
                                    type="email"
                                    name='email'
                                    autoComplete='email'
                                    required
                                    placeholder='Enter valid email address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                />
                            </div>
                        </div>
                        {/* Email address end */}
                        {/* Password start */}
                        <div>
                            <label htmlFor="password"
                                className='block text-sm font-medium text-gray-700'
                            >
                                password
                            </label>
                            <div className='mt-1 relative'>
                                <input type={visible ? "text" : "password"}
                                    name='password'
                                    autoComplete='password'
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                )}

                            </div>
                        </div>
                        {/* Password end */}

                        {/* Avatar start */}
                        <div>
                            <label htmlFor="avatar"
                                className="block text-sm font-medium text-gray-700"
                            ></label>
                            <div className='mt-2 flex items-center'>
                                <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                                    {
                                        avatar ? (
                                            <img
                                                src={URL.createObjectURL(avatar)}
                                                alt="avatar"
                                                className="h-full w-full object-cover rounded-full"
                                            />
                                        ) : (
                                            <RxAvatar className="h-8 w-8" />
                                        )}
                                </span>
                                {/* Input file start */}
                                <label htmlFor="file-input"
                                    className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <span>Upload a file</span>
                                    <input type="file"
                                        name='avatar'
                                        id='file-input'
                                        accept=".jpg,.jpeg,.png"
                                        onChange={handleFileInputChange}
                                        className="sr-only"
                                    />
                                </label>
                                {/* Input file end */}
                            </div>
                        </div>
                        {/* Avatar end */}


                        <div>
                            <button
                                type='submit'
                                className=' className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"'
                            >
                                Submit
                            </button>
                        </div>

                        <div className={`${styles.noramlFlex} w-full`} >
                            <h4>Already have an account?</h4>
                            <Link to="/login" className="text-blue-600 pl-2">
                                Sign In
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup



