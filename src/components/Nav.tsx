import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import ThemeToggle from "./ThemeToggle"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Nav() {
    const theme = useSelector((state:RootState)=>state.theme.theme)
    
    useGSAP(()=>{
        // Use a lighter animation instead of bounce for better performance
        gsap.fromTo(".nav",
          {y:-100, opacity:0},
          {
            y:0,
            opacity:1,
            duration:1,
            ease:"power2.out" // Smoother than bounce, better performance
          }
        )
    },[])

  return (
    <div className="bg-transparent fixed w-full py-6 z-50">
        <div className={`nav ${theme =='dark'? 'bg-gray-500 ':'bg-gray-200'} w-[80%] mx-auto flex justify-between px-4 items-center py-4 rounded-4xl shadow-2xl`}>
            <h1 className="font-bold text-3xl font-serif">Gagan</h1>
            <ul className="flex justify-between items-center gap-10">
                <li className="hover:border-b-2 cursor-pointer transition-colors duration-300">Home</li>
                <li className="hover:border-b-2 cursor-pointer transition-colors duration-300">About</li>
                <li className="hover:border-b-2 cursor-pointer transition-colors duration-300">Contact</li>
                <li className="hover:border-b-2 cursor-pointer transition-colors duration-300">Query</li>
            </ul>
             <ThemeToggle />
        </div>
    </div>
  )
}

export default Nav