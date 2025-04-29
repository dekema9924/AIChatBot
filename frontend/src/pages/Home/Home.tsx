
import { Link } from 'react-router-dom'
import ImageIcon from '@mui/icons-material/Image';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import useUserProfile from '../../hooks/useUserProfile'

function Home() {
    useUserProfile()

    return (
        <main className='flex flex-col' >
            <section className='flex flex-col gap-4 mb-16 items-center'>
                <h1 className='text-3xl font-bold'>Welcome to CYBRS</h1>
                <p className='text-gray-500 text-center'>This is the home page of the CYBRS application.</p>
            </section>

            {/* //cards */}
            <div className='flex flex-col gap-10 items-center'>

                <div className='card border-2 w-10/12 flex flex-col items-center justify-center py-4 transition-all duration-700 cursor-pointer'>
                    <span className=' w-24 rounded-full h-24 block text-center pt-5 bg-gray-500'>
                        <ImageIcon style={{ fontSize: 50 }} />
                    </span>
                    <h1 className='my-4'>Image Generations</h1>
                    <p className='text-secondary text-center w-10/12 my-4 '>Create stunning AI-generated images in seconds. Just describe what you imagine, and our tool brings it to life</p>
                    {/* <NavigateNextIcon className='hover:scale-145 transotion-all duration-500' /> */}
                    <p className='text-xs '>COMING SOON</p>

                </div>

                <Link to={'/chat'} className='card border-2 w-10/12 flex flex-col items-center justify-center py-4 cursor-pointer'>
                    <span className=' w-24 rounded-full h-24 block text-center pt-5 bg-gray-500'>
                        <QuestionAnswerIcon style={{ fontSize: 50 }} />
                    </span>
                    <h1 className='my-4'>Chat Bot</h1>
                    <p className='text-secondary text-center w-10/12  my-4'>Talk to CYBRS, AI Chatbot</p>
                    <NavigateNextIcon className='hover:scale-145 transotion-all duration-500' />

                </Link>
            </div>
        </main>
    )
}

export default Home
