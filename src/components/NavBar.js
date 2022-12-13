import React, { useState } from 'react'
import Selector from './Selector';


const NavBar = () => {

    let Links =[
        {name:"Home", link:"/", logo:<ion-icon name="home-outline"></ion-icon>},
        
    ];

    let [open,setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7'>

            <div className='font-bold text-3xl cursor-pointer flex items-center font-poppins text-black'>

            <div className='relative left-[225px] top-[7px] -scale-x-100'>
            <span className='text-3xl text-blue-600 mr-1 pt-2'>
            {/* <ion-icon name="pricetags-outline"></ion-icon> */}
            </span>
            </div>

                <div className='text-blue-600 text-[22px] font-pm'>TRIVIA</div> <div className='text-[25px]'>FUEL</div>
            </div>

            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden '>
            <ion-icon name={open ? 'close': 'menu'}></ion-icon>
            </div>

            <div className='absolute left-[230px] top-[20px]'>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'}`}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href={link.link } className="text-black text-[15px] font-poppins hover:text-gray-400 duration-500">{open ? link.name : link.name}</a>
                        </li>
                    ))
                }
            </ul>   
            </div>

            {/* <div className='top-[100px] left-[319px] absolute'>
            <Selector/>
             </div> */}

            <div className='absolute top-[18px] left-[500px]'>
            <button className='bg-blue-600 text-white font-poppins py-1.5 px-2 text-sm rounded md:ml-8 hover:text-black duration-500'>
            CREATE <ion-icon name="create-outline"></ion-icon>
            </button>
            </div>
            
        

            <form className='w-[350px] max-w-md absolute right-[210px]'>

                <div className='relative flex items-center text-blue-600 focus-within:text-gray-400'>

                    <div className='absolute left-[7px] top-[10px]'>
                    <ion-icon name="search-outline" className="w-5 h-5 absolute ml-3 pointer-events-none"></ion-icon>
                    </div>
                    

                    <input 
                    type="text"  
                    name='search' 
                    placeholder='Search subjects, quiz, etc...' 
                    autoComplete='off' 
                    aria-label='Search brands'
                    className=' w-full pr-3 pl-7 py-2 font-poppins placeholder:text-gray-400 text-black rounded-2xl border-none ring-2 ring-blue-600 focus:ring-blue-400 focus:ring-2'
                    />
                </div> 
                
                
            </form>

            <div className='absolute right-[30px]'>
            <button className='bg-transparent text-blue-600 font-poppins py-1 px-2 text-sm rounded md:ml-8 hover:text-black duration-500'>
            LOGIN
            </button>

            <a href="/login" className='bg-blue-600 text-white font-poppins py-1 px-2 text-sm rounded md:ml-8 hover:text-black duration-500'>
            SIGN UP
            </a>
            </div>

           

        </div>
    </div>
  )
}

export default NavBar
