import logo from "../assets/navlogo.svg"
import DownArrow from "../assets/DownArrow.svg"
import Button from "./button"
import RightArrow from "../assets/RightArrow.svg"
import { useState } from "react"
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

     const toggleMobileMenu = () => {
       setIsMobileMenuOpen(!isMobileMenuOpen);
     };
  return (
    <header className="bg-main desktop:px-[220px] px-8 py-4">
        <nav className="flex items-center justify-between">
            <a href="/">
                <div className="flex items-center gap-[2.5px]">
                    <img src={logo} alt="logo" />
                    <p className="font-inter text-white font-bold text-[28px]">whitespace</p>
                </div>
            </a>
           <div className="flex items-center gap-[60px]">
                <ul className="minidesktop:flex items-center gap-8 hidden">
                    <li>
                        <div className="flex items-center gap-2.5">
                            <p className="font-dmsans text-[18px] font-medium text-white">Products</p>
                            <img src={DownArrow} alt="Arrow" />
                        </div>  
                    </li>
                    <li>
                        <div className="flex items-center gap-2.5">
                            <p className="font-dmsans text-[18px] font-medium text-white">Solutions</p>
                            <img src={DownArrow} alt="Arrow" />
                        </div>  
                    </li>
                    <li>
                        <div className="flex items-center gap-2.5">
                            <p className="font-dmsans text-[18px] font-medium text-white">Resources</p>
                            <img src={DownArrow} alt="Arrow" />
                        </div>  
                    </li>
                    <li>
                        <div className="flex items-center gap-2.5">
                            <p className="font-dmsans text-[18px] font-medium text-white">Pricing</p>
                            <img src={DownArrow} alt="Arrow" />
                        </div>  
                    </li>    
                </ul>
                <div className="flex items-center gap-5">
                    <div className="tablet:flex items-center gap-6 hidden">
                        <Button BGColor="bg-gold" TextColor="text-main"  Text="Login"/>
                        <Button BGColor="bg-button" TextColor="text-white"  Text="Try Whitespace free " icon={RightArrow}/>
                    </div>
                    
                        <button className="max-xl:block hidden" onClick={toggleMobileMenu}>
                          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                          </svg>
                        </button>
                    
                </div>
           </div>
        </nav>
        {isMobileMenuOpen && (
            <div className="xl:hidden fixed max-tablet:top-[75px] top-[77px] right-0 w-[250px] h-2/4 bg-main shadow-lg flex flex-col items-center p-4 transition-all duration-300 ease-in-out transform translate-x-0">
              
              <ul className="flex flex-col items-center gap-4 mt-4 ">
                <li>
                      <div className="flex items-center gap-2.5">
                          <p className="font-dmsans text-[18px] font-medium text-white">Products</p>
                          <img src={DownArrow} alt="Arrow" />
                      </div>  
                  </li>
                  <li>
                      <div className="flex items-center gap-2.5">
                          <p className="font-dmsans text-[18px] font-medium text-white">Solutions</p>
                          <img src={DownArrow} alt="Arrow" />
                      </div>  
                  </li>
                  <li>
                      <div className="flex items-center gap-2.5">
                          <p className="font-dmsans text-[18px] font-medium text-white">Resources</p>
                          <img src={DownArrow} alt="Arrow" />
                      </div>  
                  </li>
                  <li>
                      <div className="flex items-center gap-2.5 mb-20">
                          <p className="font-dmsans text-[18px] font-medium text-white">Pricing</p>
                          <img src={DownArrow} alt="Arrow" />
                      </div>  
                </li>
                <Button BGColor="bg-gold" TextColor="text-main"  Text="Login" />
              </ul>
              
            </div>
        )}
    </header>
  )
}

export default Navbar    