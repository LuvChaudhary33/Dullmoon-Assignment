import Link from "next/link"
import {FiLogOut} from "react-icons/fi"

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-[3.6rem] lg:px-20 px-2">
        <h1 className="lg:text-2xl font-bold tracking-wider">
         Dullmoon Technologies
        </h1>
        <ul className="flex justify-between gap-2 md:gap-12 items-center">
            <li className="relative before:absolute before:-bottom-1 before:left-0 before:w-0 hover:before:w-[100%] before:h-[3px] before:bg-cyan-400 hover:text-cyan-400 before:rounded-lg before:transition-all ease-in-out before:duration-200"><Link href="">Home</Link></li>
            <li className="relative before:absolute before:-bottom-1 before:left-0 before:w-0 hover:before:w-[100%] before:h-[3px] before:bg-cyan-400 hover:text-cyan-400 before:rounded-lg before:transition-all ease-in-out before:duration-200"><Link href="">Contact</Link></li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-cyan-400"><Link href="">Logout</Link><FiLogOut /></li>
        </ul>
    </div>
  )
}

export default Header