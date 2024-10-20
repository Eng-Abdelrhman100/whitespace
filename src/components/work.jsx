import Button from "./button"
import RightArrow from "../assets/RightArrow.svg"
const Work = () => {
  return (
    <section className="tablet:py-[140px] py-[100px] desktop:px-[220px] minidesktop:px-8 tablet:px-5 px-4 bg-main">
        <div className=" ">
            <h1 className="font-inter text-white font-bold tracking-[-2%] lg:text-[72px] minidesktop:text-[64px] md:text-[54px] text-[36px] mb-6 xl:text-center text-left">Your work, everywhere you are</h1>
            <p className="font-inter text-white tracking-[-2%] text-[18px] leading-[30px] mb-[60px] xl:text-center text-left">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
            <div className="xl:flex items-center justify-center">
                <Button BGColor="bg-button" Text="Try Taskey " TextColor="text-white" icon={RightArrow}/>
            </div>
        </div>
    </section>
  )
}

export default Work

