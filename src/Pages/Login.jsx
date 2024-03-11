import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import AuthBase from "../Components/AuthBase"
import { 
    getAuthToken, 
    signIn 
} from "../Helpers"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [params, setParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(getAuthToken().user && getAuthToken().user ? getAuthToken().user.role === 'admin' : false ) {
            return navigate('/dashboard')
        }
        if(getAuthToken().user ? getAuthToken().user.role === 'student': false || getAuthToken().user ? getAuthToken().user.role === 'readonly' : false) {
            return navigate('/')
        }
    })

    const formSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const signin = await signIn({ email, password })
            if(signin.success) {
                return navigate('/dashboard')
            }else {
                setLoading(false)
                setError(true)
            }
        }catch(err) {
            setLoading(false)
            setError(true)
        }
    }

    return(
        <AuthBase>
            <div className="bg-white w-[400px] h-[400px] mt-24 flex justify-center">
                <form onSubmit={formSubmit} className="flex flex-col justify-center">
                    <h2 className="text-2xl text-center m-5">
                        UPES Bus Login
                    </h2>
                    <div className="container m-2">
                        <input 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email"
                            placeholder="Email"
                            className="w-full max-w-[300px] h-[45px] text-center text-xl shadow-xl hover:border-gray-200 hover:border-2 selection:box-border focus:outline-none" 
                        />
                    </div>
                    <div className="container m-2">
                        <input 
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password"
                            placeholder="Password"
                            className="w-full max-w-[300px] h-[45px] text-center text-xl shadow-xl hover:border-gray-200 hover:border-2 focus:outline-none" 
                        />
                    </div>
                    <button disabled={loading ? true : false} type="submit" className="btn w-full max-w-[300px] h-[45px] bg-[#E9286D] text-center text-white text-xl uppercase m-2 hover:shadow-2xl flex justify-center items-center">
                        Login 
                        { !loading ? '' :
                            <ArrowPathIcon 
                                className="ml-2 animate-spin" 
                                width={30} 
                                height={30} 
                            />
                        }
                    </button>
                    <p className={error ? `text-red-400 text-center visible` : 'hidden'}>
                        Username/Password Incorrect!
                    </p>
                    { params.has('logout') ? <p className="text-green-600 text-lg text-center">Successfully logged out!</p>: ''}
                </form>
            </div>
        </AuthBase>
    )
}

export default Login