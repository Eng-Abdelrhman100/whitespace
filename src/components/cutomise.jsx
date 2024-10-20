import Button from "./button"
import RightArrow from "../assets/RightArrow.svg"
const Customise = () => {
  return (
    <section className="dektop:py-[140px] desktop:px-[220px]  lg:py-[100px] lg:px-8 minidesktop:py-[140px] minidesktop:px-8 tablet:py-[100px] tablet:px-5 px-4 py-20" >    
        <div className="flex items-center desktop:gap-[98px]   gap-[60px]  max-tablet:flex-col ">
            <div className="max-tablet:mx-auto bg-image desktop:w-[714px] desktop:h-[532.09px] lg:w-[670px] lg:h-[499.3px] minidesktop:w-[534px] minidesktop:h-[397.95px] tablet:w-[557px] tablet:h-[388.93px] mobile:w-[288px] mobile:h-[214.62px] "/>
            <div>
                <h1 className="text-text font-inter font-bold leading-normal tracking-[-2%] lg:text-[72px] minidesktop:text-[64px] md:text-[54px] mobile:text-[40px] mb-6 text-left max-tablet:text-center">Customise it
                to <br  className="hidden minidesktop:block"/> your needs</h1>
                <p className="text-text font-inter leading-[30px] tracking-[-2%] text-[18px] mb-[60px] text-left max-tablet:text-center">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                <div className="max-tablet:flex justify-center items-center">
                    <Button BGColor="bg-button" Text="Let’s Go " TextColor="text-white" icon={RightArrow} />
                </div>            
            </div>
        </div>
    </section>
)
}

export default Customise