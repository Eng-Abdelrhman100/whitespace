import Logo from "../assets/navlogo.svg"
import Button from "./button"
import RightArrow from "../assets/RightArrow.svg"
import Globe from "../assets/Globe.svg"
import DownArrow from "../assets/DownArrow.svg"
import Social from "../assets/Social.svg"
const Footer = () => {
  return (
    <footer className="tablet:pt-[140px] pt-[100px] pb-8 desktop:px-[220px] lg:px-8 tablet:px-5 px-4 bg-main">
        <div className="flex items-start xl:gap-[100px] lg:gap-[50px] md:gap-[100px] gap-20 flex-col lg:flex-row">
            <div>
                <div className="flex items-center gap-2.5 mb-[15px]">
                    <img src={Logo} alt="logo" />
                    <h1 className="font-inter text-white font-bold text-[28px]">Whitespace</h1>
                </div>
                <p className="font-inter text-[18px] leading-[30px] tracking-[-2%] text-[#f7f7ee]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <ul className="space-y-[15px] whitespace-nowrap">
                <li className="text-white text-[18px] tracking-[-2%] font-bold font-inter">Product</li>
                <li className="text-gold text-[16px] tracking-[-2%] leading-[20px]">Overview</li>
                <li className="text-white text-[16px] tracking-[-2%] leading-[20px]">Pricing</li>
                <li className="text-white text-[16px] tracking-[-2%] leading-[20px]">Customer stories</li>
            </ul>
            <ul className="space-y-4 whitespace-nowrap">
                <li className="text-white text-[18px] tracking-[-2%] font-bold font-inter">Resources</li>
                <li className="text-white text-[16px] tracking-[-2%] leading-[20px]">Blog</li>
                <li className="text-white text-[16px] tracking-[-2%] leading-[20px]">Guides & tutorials</li>
                <li className="text-white text-[16px] tracking-[-2%] leading-[20px]">Help center</li>
            </ul>
            <ul className="space-y-4">
                <li className="text-white text-[18px] tracking-[-2%] font-bold font-inter">Company</li>
                <li className="text-white text-[16px] tracking-[-2%] leading-[20px]">About us</li>
                <li className="text-white text-[16px] tracking-[-2%] leading-[20px]">Careers</li>
                <li className="text-white text-[16px] tracking-[-2%] leading-[20px]">Media kit</li>
            </ul>
            
            <div>
                <h1 className="font-inter text-white font-bold text-[28px] leading-9 tracking-[-2%]">Try It Today</h1>
                <p className="font-inter text-[16px] leading-5 tracking-[-2%] text-white my-[23px]">Get started for free. Add your whole team as your needs grow.</p>
                <Button BGColor="bg-button" Text="Start today " TextColor="text-white" icon={RightArrow}/>

            </div>
        </div>
        <hr className="mt-[67.07px] mb-[32.93px] hidden lg:block"/>
        
        <div className="flex lg:items-center justify-between lg:flex-row flex-col items-start lg:mt-0 mt-[100px]"> 
            <div className="flex items-center md:gap-[60px] gap-[30px] max-sm:flex-col ">
                <div className="flex items-center lg:gap-1.5 gap-4">
                    <div className="flex items-center gap-1.5">
                        <img src={Globe} alt="globe" />
                        <p className="font-inter text-[16px] leading-5 tracking-[-2%] text-white">English</p>
                    </div>
                    <img src={DownArrow} alt="Arrow" />
                </div>
                <p className="font-inter text-[16px] leading-5 tracking-[-2%] text-white whitespace-nowrap">Terms & privacy</p>
                <p className="font-inter text-[16px] leading-5 tracking-[-2%] text-white">Security</p>
                <p className="font-inter text-[16px] leading-5 tracking-[-2%] text-white">Status</p>
                <p className="font-inter text-[16px] leading-5 tracking-[-2%] text-white whitespace-nowrap">©2021 Whitepace LLC.</p>
            </div>
            <hr className="lg:hidden  bg-black tablet:block mb-[36.68px]"/>
            <img src={Social} alt="Socials" />
        </div>
        
    </footer>
  )
}

export default Footer