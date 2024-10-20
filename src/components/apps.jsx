import Apps1 from "../assets/Apps.svg"
import RightArrow from "../assets/RightArrow.svg"
import Button from "./button"

const Apps = () => {
  return (
    <section className="tablet:py-[140px] py-[100px] desktop:px-[220px] minidesktop:px-8 tablet:px-5 px-4 bg-main">
        <div className="flex items-center flex-col lg:flex-row gap-[100px]">
            <img src={Apps1} alt="Apps" className="max-w-[582px] max-tablet:max-w-[485px] w-full h-auto"/>
            <div>
                <h1 className="font-inter font-bold minidesktop:text-[64px] md:text-[54px] mobile:text-[36px] tracking-[-2%] text-white mb-6    leading-normal text-left max-tablet:text-center"> Work with Your Favorite Apps Using whitepace</h1>
                <p className="font-inter text-[18px] leading-[30px] tracking-[-2%] text-white mb-[60px]  max-tablet:text-center">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your  project success.</p>
                <div className="max-tablet:flex justify-center items-center">
                        <Button BGColor="bg-button" TextColor="text-white"  Text="Read more " icon={RightArrow}  />
                </div>   
            </div>
        </div>
    </section>
  )
}

export default Apps