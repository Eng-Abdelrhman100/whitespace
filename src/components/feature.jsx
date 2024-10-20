import Button from "./button"
import RightArrow from "../assets/RightArrow.svg"
import Work from "../assets/work.svg"

const Feature = () => {
  return (
    <section className="dektop:py-[140px] desktop:px-[220px]  lg:py-[100px] lg:px-8 minidesktop:py-[140px] minidesktop:px-8 tablet:py-[100px] tablet:px-5 px-4 py-20" >
        <div className="flex items-center desktop:gap-[60px] lg:gap-0 minidesktop:gap-[32.33px] tablet:gap-[60px] mobile-[60px] max-tablet:flex-col mb-[100px]">
            <div>
                <h1 className="text-text font-inter font-bold leading-normal tracking-[-2%] lg:text-[64px] minidesktop:text-[64px] md:text-[54px] mobile:text-[36px] mb-6 text-left max-tablet:text-center">Project Management</h1>
                <p className="text-text font-inter leading-[30px] tracking-[-2%] mb-[60px] text-left max-tablet:text-center">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                <div className="max-tablet:flex justify-center items-center">
                    <Button BGColor="bg-button" Text="Get Started " TextColor="text-white" icon={RightArrow} />
                </div>            
            </div>
            <div className="max-tablet:mx-auto bg-image desktop:w-[748px] desktop:h-[547px] lg:w-[719px] lg:h-[448px] minidesktop:w-[527.74px] minidesktop:h-[328.48px] tablet:w-[561px] tablet:h-[349px] mobile:w-[286px] mobile:h-[177px] max-tablet:mt-[100px] minidesktop:mt-0"/>
        </div>
        <div className="flex items-center desktop:gap-[100px] lg:gap-[160px] minidesktop:gap-[30px] tablet:gap-[100px] mobile:gap-[60px] max-tablet:flex-col-reverse">
            <img src={Work} alt="image" className="max-w-[710px] max-tablet:max-w-[454px] w-full h-auto"/>
            <div>
            <h1 className="text-text font-inter font-bold leading-normal tracking-[-2%] lg:text-[64px] minidesktop:text-[64px] md:text-[54px] mobile:text-[36px] mb-6 text-left max-tablet:text-center">Work together</h1>
                <p className="text-text font-inter leading-[30px] tracking-[-2%] mb-[60px] text-left max-tablet:text-center">With whitepace, share your notes with your colleagues and collaborate on them.
                    You can also publish a note to the internet and share the URL with others.
                </p>
                <div className="max-tablet:flex justify-center items-center">
                    <Button BGColor="bg-button" Text="Try it now " TextColor="text-white" icon={RightArrow} />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Feature