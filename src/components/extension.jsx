import Button from "./button"
import RightArrow from "../assets/RightArrow.svg"
import Extension1 from "../assets/extension.svg"

const Extension = () => {
  return (
    <section className="w-full dektop:py-[140px] desktop:px-[220px] bg-main lg:py-[140px] lg:px-8 tablet:py-[100px] tablet:px-8 px-4 py-20 ">
        <div className="flex items-center minidesktop:gap-[98px]  mobile:gap-[60px]  max-tablet:flex-col ">
            <div>
                <h1 className="text-white font-inter font-bold leading-normal tracking-[-2%] lg:text-[72px] minidesktop:text-[64px] md:text-[54px] mobile:text-[36px] mb-6 text-left max-tablet:text-center">Use as Extension</h1>
                <p className="text-white font-inter leading-[30px] tracking-[-2%] mb-[60px] text-left max-tablet:text-center">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                <div className="max-tablet:flex justify-center items-center">
                    <Button BGColor="bg-button" Text="Let’s Go " TextColor="text-white" icon={RightArrow} />
                </div>
            </div>
            <img src={Extension1} alt="Frame" className="max-w-[686px] max-tablet:max-w-[557px] w-full h-auto" />
        </div>
    </section>
  )
}

export default Extension