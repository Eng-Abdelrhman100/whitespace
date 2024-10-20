import Button from "./button"
import RightArrow from "../assets/RightArrow.svg"
import Data1 from "../assets/data.svg"

const Data = () => {
  return (
    <section className="tablet:py-[140px] py-[100px] desktop:px-[220px] minidesktop:px-8 tablet:px-5 px-4 ">
        <div className="flex items-center lg:flex-row flex-col-reverse mobile:gap-[100px] minidesktop:gap-0"> 
            <div>
                <h1 className="font-inter font-bold text-text tracking-[-2%] xl:text-[72px] minidesktop:text-[64px] md:text-[54px] text-[36px] text-center minidesktop:text-left">100% your data</h1>
                <p className="font-inter text-text tracking-[-2%] text-[18px] leading-[30px] mb-[60px] text-center minidesktop:text-left">
                    The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End   Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
                </p>
                <div className="flex items-center max-tablet:justify-center">
                     <Button BGColor="bg-button" Text="ٌRead more " TextColor="text-white" icon={RightArrow}/>
                </div>
            </div>
            <img src={Data1} alt="data" className="max-w-[681px] max-tablet:max-w-[513px] w-full h-auto" />
        </div>
    </section>
  )
}

export default Data