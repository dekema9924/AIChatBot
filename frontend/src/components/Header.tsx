import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import SearchIcon from '@mui/icons-material/Search';
import Person3Icon from '@mui/icons-material/Person3';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';
import { logout } from '../features/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Header() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const isLoading = useSelector((state: RootState) => state.user.isLoading)
    const user = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        setSidebarOpen(false);
    };
    const closeSidebar = () => {
        setSidebarOpen(false);
        setDropdownOpen(false);
    };

    const handleLogOut = () => {
        axios.get(`${API_BASE_URL}/auth/logout`, { withCredentials: true }).then((response) => {
            console.log(response.data)
            dispatch(logout())
            setDropdownOpen(false)
            navigate('/sign-in')
        })
    }

    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    document.body.style.overflowY = sidebarOpen ? "hidden" : "auto";

    return (
        <>
            <header className='border h-20 flex items-center justify-between border-b-1 relative'>
                {/* /* //left side nav */}
                <div onClick={toggleSidebar} className='card w-14 rounded-md text-center h-14 text-gray-300 pt-3 ml-4 cursor-pointer '>
                    <ArrowForwardIosIcon />
                </div>
                {/* //right side nav */}
                <nav className='flex items-center gap-4 mr-12 z-50'>
                    {/* <span className='card w-14 h-14 rounded-full text-center pt-3 block cursor-pointer'>
                        <SearchIcon />
                    </span> */}
                    {
                        user.isLoggedIn ?
                            <span onClick={toggleDropdown} className='card w-14 h-14 rounded-full text-center pt-3 block cursor-pointer'>
                                <Person3Icon />
                            </span>
                            : ""
                    }

                    {
                        user.isLoggedIn ?
                            <>
                                <Link to="/" className="w-14 h-14 rounded-full text-center pt-3 block cursor-pointer">
                                    Home
                                </Link>
                            </>
                            :
                            <Link to="/sign-in" className="w-14 h-14 rounded-full text-center pt-3 block cursor-pointer">
                                Sign In
                            </Link>


                    }

                    {/* //dropdown menu */}
                    <div className={`card absolute  ${dropdownOpen ? "w-70" : "w-0 h-0 overflow-hidden"} bg-white rounded-md shadow-lg right-5 top-18`}>
                        <div className='flex items-center gap-2 p-6'>
                            <img className='w-20 h-20 object-cover rounded-md' src={!isLoading ? user.image || "https://placehold.co/600x400" : "https://placehold.co/600x400"} alt="profileImg" />
                            {
                                !isLoading ?
                                    <>
                                        <div className=' text-start'>
                                            <p>{user.name}</p>
                                            <p className='text-secondary'>{user.email}</p>
                                        </div>
                                    </>
                                    : ""
                            }
                        </div>
                        <hr className=' border w-11/12 m-auto' />
                        <ul className=' text-start text-secondary relative z-50'>
                            <Link onClick={closeSidebar} to={'/profile'} className='p-2 hover:bg-[#2a2835] block cursor-pointer'>
                                <Person3Icon className='inline-block mr-2' />
                                Profile
                            </Link>
                            <Link onClick={closeSidebar} to={'/settings'} className='p-2 hover:bg-[#2a2835] block  cursor-pointer'>
                                <SettingsIcon className='inline-block mr-2' />
                                Settings
                            </Link>
                            <li onClick={handleLogOut} className='p-2 hover:bg-[#2a2835] rounded-md cursor-pointer '>
                                <LogoutIcon className='inline-block mr-2' />
                                Logout
                            </li>
                        </ul>
                    </div>


                </nav>

                {/* //sidebar */}
                <aside className={`border ${!sidebarOpen ? "w-0 p-0" : "w-80 p-5"} h-screen absolute text-white mt-20 z-50 transition-all duration-500 top-0 overflow-hidden card`}>
                    <h1 className='text-[3em]'>CYBRS</h1>

                    <hr className='border w-11/12 my-4'></hr>

                    <p className='text-secondary text-sm mb-6'>Start Here</p>

                    <ul className='flex flex-col gap-4'>
                        <Link onClick={closeSidebar} to={'/'} className='flex items-center gap-2 cursor-pointer'>
                            <HomeFilledIcon className='text-secondary' />
                            <span className='text-gray-300'>Home</span>
                        </Link>
                        <li className='flex items-center gap-2 cursor-pointer'>
                            <GroupsIcon className='text-secondary' />
                            <span className='text-gray-300'>Community feed</span>
                        </li>

                    </ul>

                </aside>
            </header>
        </>
    )
}

export default Header
