import { useEffect, useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 150)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`navbar py-7 flex justify-between items-center ${active ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portfolio</h1>
      </div>
      <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 
        -translate-x-1/2 md:-translate-x-0 -top-10 md:opacity-100 bg-white/30 backdrop-blur-md 
        p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40
        ${active ? 'top-0 opacity-100' : '-top-10 opacity-0'}`}>
        <li><a href="#home" className="sm:text-lg text-base font-medium">Home</a></li>
        <li><a href="#about" className="sm:text-lg text-base font-medium">About</a></li>
        <li><a href="#projects" className="sm:text-lg text-base font-medium">Projects</a></li>
        <li><a href="#contact" className="sm:text-lg text-base font-medium">Contact</a></li>
      </ul>
    </div>
  )
}
export default Navbar
