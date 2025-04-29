import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import useUserProfile from '../hooks/useUserProfile';

function Profile() {

    //get user profile
    useUserProfile()

    const user = useSelector((state: RootState) => state.user.value)
    const isLoading = useSelector((state: RootState) => state.user.isLoading)


    return (
        <>
            <section>
                <h1 className='text-secondary border h-22 text-2xl text-center pt-6'>Welcome to your User-ProfilePage</h1>



                <div className='card mt-3 flex item-center  md:w-9/12 m-auto p-3 rounded-xl '>
                    <Link to={'/settings'} className=' w-14 text-center h-14 rounded-full pt-3 block cursor-pointer opacity-44 hover:opacity-100'>
                        <SettingsIcon className='inline-block mr-2' />
                    </Link>
                    <div className=' mt-5 w-full md:flex-row flex flex-col item-center gap-10 md:w-9/12 m-auto md:p-6 p-4 '>

                        {
                            !isLoading ?
                                <>
                                    <div>
                                        <img className='w-50 h-50 object-cover rounded-md' src={user.image} alt="profilepic" />
                                    </div>
                                    <div className='gap-4 items-center flex flex-wrap md:w-80 w-full '>
                                        <div className=' text-start'>
                                            <h2 className='text-secondary text-xs '>Name</h2>
                                            <p className=' text-xl'>{user.name}</p>
                                        </div>
                                        <div>
                                            {
                                                user.email ?
                                                    <>
                                                        <h2 className='text-secondary text-xs '>Email Address</h2>
                                                        <p className=' text-sm'>{user.email}</p
                                                        ></> : ''
                                            }
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
