import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import conference from "../src/assets/conference.jpg";
import Navbar from './components/Navbar';

const Home = () => {
    const [RoomCode, setRoomCode] = useState("");
    console.log(RoomCode);

    const navigate = useNavigate();

    const submitCode = (e) =>{
        e.preventDefault();
        navigate(`/room/${RoomCode}`)

    };

  return (
    <div className=' '>

        <Navbar />
        <div className='relative h-screen'>
            <div className='absolute h-full w-full flex
            overflow-hidden'>
                <img src={conference} className='object-cover
                w-full h-full'/>
            </div>

            <div className='absolute h-full w-full flex overflow-hidden bg-black/70'> </div>

        <div className='lg flex lg:pt-15 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto'>
            <div className='flex flex-col items-center justify-center pb-8'>
                <h1 className='text-[50px] md:text-[70px] text-white pt-6'>Video Conference Application
                </h1>
            </div>
        <form onSubmit={submitCode} 
        className='text-white md:pt-12 flex flex-col items-center justify-center'> 
        <div className='flex flex-col justify-center items-center'>
        <label className='text-[25px] md:text-[40px] font-bold'>Enter Room Code</label>
        <input type="text" required placeholder='Enter Room Code'
        value={RoomCode}
        onChange={(e) =>  setRoomCode(e.target.value)}
        className='py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0'
        />
        </div>
        <button type='submit'
        className='bg-orange-500 hover:bg-orange-400 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-1.5 md:py-2 mt-2 md:mt-4 px-6'>Go</button>
        </form>
        </div>
        
    </div>
    </div>
    
  )
}

export default Home