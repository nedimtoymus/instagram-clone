import image from './img/screenshot1.png'
import image2 from './img/screenshot2.png'
import image3 from './img/screenshot3.png'
import image4 from './img/screenshot4.png'
import { useEffect, useRef, useState } from 'react'


function App() {
  const ref = useRef()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const enable = username && password

  useEffect(() => {
    
   let images = ref.current.querySelectorAll('img'),
   total = images.length,
    current = 0
    const imageSlider = () => {
      if(current > 0) {
        images[current - 1].classList.add('opacity-0')
      } else {
        images[total - 1].classList.add('opacity-0')
      }
      images[current].classList.remove('opacity-0')
      if(current === total -1) {
        current = 0
        
      }else {
        current += 1
      }  
      
    }
    imageSlider()
    let interval = setInterval(imageSlider, 3000)
    return () => clearInterval(interval)
  }, [ref])
  return (
   <div className="flex items-center justify-center w-full h-full gap-x-8">
    
    <div className="w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
     <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px] "ref={ref}> 
      <img className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-linear opacity-0" src={image} />
      <img className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-linear opacity-0" src={image2} />
      <img className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-linear opacity-0" src={image3} />
      <img className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-linear opacity-0" src={image4} />
     </div>
     
     
    </div>
    <div className='w-[350px] bg-white border px-[50px] pt-8 pb-2'>
      <a href='#' className='flex justify-center'>
   <img className='h-[51px]' src='https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png' alt=''/>
   </a>
     <form className='grid gap-y-1.5'>
      <label className='relative block'>
        <input type='text'  value={username} onChange={e => setUsername(e.target.value)} required={true} className='w-full border bg-zinc-50 h-[38px] rounded-sm focus:border-gray-400 outline-none px-2 text-xs valid:pt-[10px] peer ' />
        <small className='absolute text-gray-500 -translate-y-1/2 pointer-events-none text-xss top-1/2 left-[9px] cursor-text transition-all peer-valid:text-[10px] peer-valid:top-2.5'>
          Phone number, username, or email
        </small>
      </label>

      <label className='relative block'>
        <input type='password' value={password} onChange={ e=> setPassword (e.target.value)}r equired={true} className='w-full border bg-zinc-50 h-[38px] rounded-sm focus:border-gray-400 outline-none px-2 text-xs valid:pt-[10px] peer ' />
        <small className='absolute text-gray-500 -translate-y-1/2 pointer-events-none text-xss top-1/2 left-[9px] cursor-text transition-all peer-valid:text-[10px] peer-valid:top-2.5'>
          Password
        </small>
      </label>
      <button type='submit' disabled={!enable} className='h-[30px] bg-brand text-white text-sm rounded disabled:opacitiy-50 font-semibold'>Log In</button>
      <div className='flex items-center justify-center mt-2 text-gray-500 gap-x-2'>
        <div className='flex-1 h-px bg-gray-300'/>
          <span className='px-4 text-xs font-semibold text-gray-500'>OR</span>
        <div className='flex-1 h-px bg-gray-300'/>
      </div>
     </form>
     </div>
   </div>
  );
}

export default App;
