"use client"
import React ,{ useState }from 'react'
import { useRouter } from "next/navigation";
import { Axios } from 'axios';
import  config from '../utils/config'

function Nav () {

  const getUsers = () => {
    Axios.get(`${BASE_URL}/users`).then((response) => {
      setUsersList(response.data)
    })
  }
  
   const[isMenuOpen, setisMenuOpen] =useState(false);
   const toggleMenu =()=> {
    setisMenuOpen(!isMenuOpen) 
   }
 const router = useRouter()
 const BASE_URL = config.SERVER_URL;
  const [values, setValues] = useState({
    username: "",
})


  return (
    <nav className='bg-green-500 p-5 'style={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
    <div className='flex item-center justify-between'>
      <div className='text-white text-2xl front-blod'>Cannabis List</div>

      {/*Toggle Menu Button */}
        <div className="md:hidden">
          <button id='menu-toogle' className='text-white' onClick={toggleMenu}>
            <svg 
            fill ='none' 
            stroke='currentColor' 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            viewBox="0 0 24 24"
            className='w-6 h-6'
            
            
            >
              <path d="M4 6h16M4 12h16M4 18h16" ></path>
            </svg>
          </button>

        </div>
        <ul className='hidden md:flex space-x-4'>
        <li><a herf="#"className='text-white'onClick={() => router.push('/')}>Home</a></li>
        <li><a herf="#"className='text-white'onClick={() => router.push('/postpage')}>Post</a></li>
        <li><a herf="#"className='text-white'onClick={() => router.push('/login')}>Login</a></li>
        <li><a herf="#"className='text-white'> N </a></li>
        
      </ul>

    </div>
    {isMenuOpen ? (
      <ul className='flex-col md:hidden py-3'>
        <li><a herf="#"className='text-white'onClick={() => router.push('/')}>Home</a></li>
        <li><a herf="#"className='text-white'onClick={() => router.push('/postpage')}>Post</a></li>
        <li><a herf="#"className='text-white'onClick={() => router.push('/login')}>Login</a></li>
        <li><a herf="#"className='text-white'> N </a></li>
      </ul>
    ):null }
    </nav>
  )


}
export default Nav