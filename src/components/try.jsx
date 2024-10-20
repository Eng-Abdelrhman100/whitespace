import Button from "./button"
import RightArrow from "../assets/RightArrow.svg"
import Appicon from "../assets/Appicon.svg"

const Try = () => {
  return (
    <section className="tablet:pt-[140px] pt-[100px] pb-8 desktop:px-[220px] lg:px-8 tablet:px-5 px-4 bg-main">
        <h1 className="lg:text-center text-left font-inter font-bold text-white tracking-[-2%] lg:text-[72px] lg:leading-normal tablet:text-[54px] tablet:leading-[62px] mobile:text-[40px] mobile:leading-[52px] mb-6">Try Whitepace <br className="md:hidden lg:block mobile:block"/> today</h1>
        <p className="lg:text-center text-left font-inter text-[24px] leading-[32px] tracking-[-2%] text-white">Get Started for free</p>
        <p className="lg:text-center text-left font-inter text-[24px] leading-[32px] tracking-[-2%] text-white mb-10">Add your whole team as your need grow.</p>
        <div className="flex items-center lg:justify-center"><Button BGColor="bg-button" Text="Try Taskey free " TextColor="text-white" icon={RightArrow}/></div>
        <p className="lg:text-center text-left font-inter text-[24px] leading-[32px] tracking-[-2%] text-white my-10">On a big team? Contact sales</p>
        <img src={Appicon} alt="icons" className="lg:mx-auto" />

    </section>
  )
}

export default Try