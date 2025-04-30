
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios'
import { API_BASE_URL } from '../config/config';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SignUp() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState("text");
    const [input, setInput] = useState({
        email: '',
        password: '',
        username: ''
    })

    const handlePasswordVisibility = () => {
        setShowPassword((prev: string) => (prev === "text" ? "password" : "text"));
    };



    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        axios.post(`${API_BASE_URL}/auth/register`, {
            email: input.email,
            password: input.password,
            username: input.username
        }).then((response) => {
            console.log(response.status)
            if (response.status == 201) {
                toast.success(response.data.message)
                navigate('/sign-in')
            } else {
                toast.error(response.data.message || 'Something went wrong');

            }

        })
            .catch((error) => {
                if (error.response && error.response.data && error.response.data.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error('Server error');
                }
            })
    }

    return (
        <>
            <div className=' flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold'>Welcome Back</h1>
                <p>Please enter your credentials to sign in.</p>

                <form onSubmit={(e) => handleSubmit(e)} className='mt-24 card w-full md:w-[500px] p-6 md:h-[600px]' action="">
                    {/* //email */}
                    <div>
                        <label className='text-secondary' htmlFor="email">Email</label>
                        <div className=' flex items-center h-14 relative w-full'>
                            <EmailIcon className='absolute left-2 text-secondary ' />
                            <input required onChange={(e) => handleInput(e)} className='border  w-full h-10 rounded-md pl-10' type="email" placeholder='your#email.com' name='email' />
                        </div>
                    </div>

                    {/* //username */}
                    <div>
                        <label className='text-secondary' htmlFor="username">Username</label>
                        <div className=' flex items-center h-14 relative w-full'>
                            <AccountCircleIcon className='absolute left-2 text-secondary ' />
                            <input required onChange={(e) => handleInput(e)} className='border  w-full h-10 rounded-md pl-10' type="text" placeholder='@james' name='username' />
                        </div>
                    </div>

                    {/* //password */}
                    <div>
                        <label className='text-secondary' htmlFor="email">Password</label>
                        <div className=' flex items-center h-14 relative w-full'>
                            <HttpsIcon className='absolute left-2 text-secondary ' />
                            <input required onChange={(e) => handleInput(e)} className='border  w-full h-10 rounded-md pl-10' type={showPassword} name='password' placeholder='********' />
                            <span onClick={handlePasswordVisibility} className='absolute right-2 cursor-pointer'>
                                {showPassword === "text" ? <VisibilityOffIcon className='text-secondary' /> : <VisibilityIcon className='text-secondary' />}
                            </span>
                        </div>
                    </div>

                    <Button
                        style='border text-sm w-full h-10 mt-4 rounded-lg '
                        text='Register'
                    />

                    <div className='flex items-center p-2'>
                        <hr className='border my-7 w-3/12' />
                        <p className='px-2 text-xs'>Or Continue With</p>
                        <hr className='border my-7 w-3/12' />
                    </div>


                    {/* //Oauth Buttons */}
                    <div className='flex flex-col gap-4'>
                        <Button
                            text='Google'
                            style="w-full cursor-pointer flex items-center justify-center px-4 py-2  rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white "
                            icon={
                                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            }

                        />
                        <Button
                            style="w-full flex cursor-pointer items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white "
                            text='Github'
                            icon={
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.603.07-.603a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.269-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"
                                    />
                                </svg>
                            }

                        />
                    </div>

                    <p className='text-secondary text-xs text-center mt-4'>By signing in, you agree to our <Link to={'/terms'} className='text-primary cursor-pointer'>Terms of Service</Link> and <Link to={'/privacy'} className='text-primary cursor-pointer'>Privacy Policy</Link></p>
                </form>
                <p className='text-secondary my-4 text-sm'>Already a member? <Link className='text-gray-300' to={'/sign-in'}>Sign In</Link></p>
            </div>
        </>
    )
}

export default SignUp