import Button from "./button"
import RightArrow from "../assets/RightArrow.svg"

const Hero = () => {
  return (
    <section className="dektop:py-[140px] desktop:px-[220px] bg-main lg:py-[100px] lg:px-8 tablet:pt-[140px] tablet:pb-[100px] tablet:px-5 px-4 py-20" >
        <div className="flex itmes-center flex-row max-tablet:flex-col">
            <div className="desktop:mt-12 lg:mt-6 ">
                <h1 className="font-inter font-bold minidesktop:text-[64px] md:text-[54px] mobile:text-[36px] tracking-[-2%] text-white mb-6 leading-normal text-left max-tablet:text-center">Get More Done <br className="max-minidesktop:block max-tablet:block hidden tablet:hidden" /> with whitepace</h1>
                <p className="font-inter text-[18px] leading-[30px] tracking-[-2%] text-white mb-[60px]  max-tablet:text-center">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <div className="max-tablet:flex justify-center items-center">
                    <Button BGColor="bg-button" TextColor="text-white"  Text="Try Whitespace free " icon={RightArrow}  />
                </div>   
            </div>
            <div className="max-tablet:mx-auto bg-image desktop:w-[824px] desktop:h-[549px] lg:w-[685px] lg:h-[456.39px] minidesktop:w-[526px] minidesktop:h-[350.45px] tablet:w-[551px] tablet:h-[367px] mobile:w-[286px] mobile:h-[191px] max-tablet:mt-[100px] minidesktop:mt-0"/>
        </div>
    </section>
  )
}

export default Hero      