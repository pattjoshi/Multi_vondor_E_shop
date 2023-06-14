import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { server } from "../server";
import axios from 'axios';



const ActivationPage = () => {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios
                        .post(`${server}/user/activation`, {
                            activation_token
                        })
                    console.log(res.data.message);
                } catch (err) {
                    console.log(err.response.data.message);
                    setError(true);
                }
            }
            activationEmail();
        }

    }, [activation_token]);

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            {
                error ? (
                    <p className='text-red-800'>Your toke is expair </p>
                ) : (
                    <p className='text-green-800'>Your Account has been created sucess fully!</p>
                )
            }

        </div>
    )
}

export default ActivationPage