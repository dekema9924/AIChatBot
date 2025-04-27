import React from 'react'
import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';

function Profile() {
    const user = useSelector((state: RootState) => state.user.value)
    const isLoading = useSelector((state: RootState) => state.user.isLoading)

    return (
        <>
            <section>
                <h1 className='text-secondary border h-22 text-2xl text-center pt-6'>Welcome to your User-ProfilePage</h1>



                <div className='card mt-3 flex item-center  w-9/12 m-auto p-3 rounded-xl '>
                    <Link to={'/settings'} className=' w-14 text-center h-14 rounded-full pt-3 block cursor-pointer opacity-44 hover:opacity-100'>
                        <SettingsIcon className='inline-block mr-2' />
                    </Link>
                    <div className=' mt-5 md:flex-row flex flex-col item-center gap-10 md:w-9/12 m-auto md:p-6 p-4 '>

                        {
                            !isLoading ?
                                <>
                                    <div>
                                        <img className='w-50 h-50 object-cover rounded-md' src={user.image} alt="profilepic" />
                                    </div>
                                    <div className='gap-4 items-center  flex flex-wrap w-80'>
                                        <div className=' text-start'>
                                            <h2 className='text-secondary text-xs '>Name</h2>
                                            <p className=' text-xl'>{user.name}</p>
                                        </div>
                                        <div>
                                            <h2 className='text-secondary text-xs '>Email Address</h2>
                                            <p className=' text-sm'>TestUser@gmail.com</p>
                                        </div>
                                        <div>
                                            <h2 className='text-secondary text-xs'>Username</h2>
                                            <p className='  text-xl'>@testUser</p>
                                        </div>
                                    </div>
                                </>
                                : "Loading..."
                        }
                    </div>
                </div>
            </section >
        </>
    )
}

export default Profile
