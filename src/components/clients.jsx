import DBQuote from "../assets/DBQuote.svg"
import WQuote from "../assets/WQuote.png"
import Client1 from "../assets/Client1.svg"
import Client2 from "../assets/Client2.svg"
import Client3 from "../assets/Client3.svg"
import Client4 from "../assets/Client4.svg"
import Slider from "../assets/Slider.svg"


const Clients = () => {
  return (
    <section className="tablet:py-[140px] py-[100px] desktop:px-[220px] minidesktop:px-8 tablet:px-5 px-4 ">
        <h1 className="text-center text-text font-inter font-bold minidesktop:leading-[84px] leading-normal tracking-[-2%]  minidesktop:text-[70px] md:text-[54px] mobile:text-[40px] mb-[60px]">
            What Our Clients Says
        </h1>
        <div className="flex items-center gap-8">
            <div className="lg:py-[60px] xl:px-10 lg:px-6 max-tablet:w-[450px]  mobile:px-10 mobile:py-[60px] mobile:mx-auto rounded-[10px] shadow-xl lg:block hidden  max-md:block">
                <img src={DBQuote} alt="Quote" className="mb-8"/>
                <p className="font-inter text-[18px] leading-[30px] tracking-[-2%] mb-10">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                <hr  className="mb-[60px] bg-black"/>
                <div className="flex items-center gap-[46px] max-tablet:flex-col">
                    <img src={Client1} alt="client" />
                    <div>
                        <p className="font-montserrat font-bold text-2xl text-text">Oberon Shaw, MCH</p>
                        <p className="font-montserrat text-text">Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>
            <div className="lg:py-[60px] xl:px-10 lg:px-6 tablet:p-5 mobile:p-0 rounded-[10px] bg-button hidden lg:block">
                <img src={WQuote} alt="Quote" className="mb-8"/>
                <p className="font-inter text-[18px] leading-[30px] tracking-[-2%] mb-10 text-white">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                <hr  className="mb-[60px] bg-white "/>
                <div className="flex items-center gap-[46px]">
                    <img src={Client2} alt="client" />
                    <div>
                        <p className="font-montserrat font-bold text-2xl text-text2">Oberon Shaw, MCH</p>
                        <p className="font-montserrat text-white">Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>
            <div className="lg:py-[60px] xl:px-10 lg:px-6 tablet:p-5 mobile:p-0 rounded-[10px] bg-button hidden lg:block">
                <img src={WQuote} alt="Quote" className="mb-8"/>
                <p className="font-inter text-[18px] leading-[30px] tracking-[-2%] mb-10 text-white">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                <hr  className="mb-[60px] bg-white "/>
                <div className="flex items-center gap-[46px]">
                    <img src={Client3} alt="client" />
                    <div>
                        <p className="font-montserrat font-bold text-2xl text-text2">Oberon Shaw, MCH</p>
                        <p className="font-montserrat text-white">Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>
            <div className="lg:hidden max-tablet:hidden px-10 w-[450px] mx-auto py-[60px] md:block rounded-[10px] shadow-xl">
                <img src={DBQuote} alt="Quote" className="mb-8"/>
                    <p className="font-inter text-[18px] leading-[30px] tracking-[-2%] mb-10">Whitepate is designed as a collaboration tool for businesses that is a full project   management solution.</p>
                    <hr  className="mb-[60px] bg-white "/>
                    <div className="flex items-center gap-[46px]">
                        <img src={Client4} alt="client" />
                        <div>
                            <p className="font-montserrat font-bold text-2xl text-text2">Oberon Shaw, MCH</p>
                            <p className="font-montserrat text-white">Head of Talent Acquisition, North America</p>
                        </div>
                    </div>
                </div>
            </div>
        <img src={Slider} className="mt-[60px] mx-auto" alt="Slider" />
    </section>
  )
}

export default Clients