import silvercheck from "../assets/silvercheck.svg"
import goldcheck from "../assets/goldcheck.svg"
import Slider from "../assets/Slider.svg"
import Button from "./button"

const Plan = () => {
  return (
    <section className="dektop:py-[140px] desktop:px-[220px]  lg:py-[100px] lg:px-8 minidesktop:py-[140px] minidesktop:px-8 tablet:py-[100px] tablet:px-5 px-4 py-20" >    

        <h1 className="text-text font-inter font-bold leading-normal tracking-[-2%] lg:text-[72px] minidesktop:text-[64px] md:text-[54px] mobile:text-[36px] mb-6 text-center">Choose Your Plan</h1>
        <p className="text-text font-inter leading-[30px] tracking-[-2%] mb-[60px] text-[18px] text-center ">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        <div className="flex items-center gap-8 mb-[82px]">
            <div className="desktop:my-[63.5px] lg:[53.5px] minidesktop:my-[78px] py-10 px-11 border border-gold rounded-[10px] max-tablet:hidden">
                <p className="font-inter font-semibold text-[24px] leading-[36px] text-text">Free</p>
                <h4 className="font-inter font-bold tracking-[-2%] text-[36px] text-text my-[25px]">$0</h4>
                <p className="font-inter font-medium text-[18px] leading-[23px] tracking-[-2%] text-text mb-[25px]">Capture ideas and find them quickly</p>
                <ul className="space-y-7 mb-[25px]">
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">Sync unlimited devices</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">10 GB monthly uploads
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">200 MB max. note size</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">Customize Home dashboard and access extra widgets</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">Connect primary Google Calendar account</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">Add due dates, reminders, and notifications to your tasks</p>
                        </div>
                    </li>
                </ul>
                <button className="font-inter font-medium text-[16px] tracking-[-2%] text-text px-10 py-4 rounded-[10px] border border-gold ">Get Started</button>
            </div>

            <div className="tablet:py-20 tablet:px-11 p-5 bg-main rounded-[10px] max-tablet:mx-auto">
                <p className="font-inter font-semibold text-[24px] leading-[36px] text-white">Personal</p>
                <h4 className="font-inter font-bold tracking-[-2%] text-[36px] text-gold my-[25px]">$11.99</h4>
                <p className="font-inter font-medium text-[18px] leading-[23px] tracking-[-2%] text-white mb-[25px]">Capture ideas and find them quickly</p>
                <ul className="space-y-7 mb-[25px]">
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={goldcheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-white">Sync unlimited devices</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={goldcheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-white">10 GB monthly uploads
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={goldcheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-white">200 MB max. note size</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={goldcheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-white">Customize Home dashboard and access extra widgets</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={goldcheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-white">Connect primary Google Calendar account</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={goldcheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-white">Add due dates, reminders, and notifications to your tasks</p>
                        </div>
                    </li>
                </ul>
                <Button BGColor="bg-button" Text="Get Started" TextColor="text-white" />
            </div>

            <div className="desktop:my-[63.5px] lg:[53.5px] minidesktop:my-[78px] py-10 px-11 border border-gold rounded-[10px] max-tablet:hidden">
                <p className="font-inter font-semibold text-[24px] leading-[36px] text-text">Organization</p>
                <h4 className="font-inter font-bold tracking-[-2%] text-[36px] text-text my-[25px]">$49.99</h4>
                <p className="font-inter font-medium text-[18px] leading-[23px] tracking-[-2%] text-text mb-[25px]">Capture ideas and find them quickly</p>
                <ul className="space-y-7 mb-[25px]">
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">Sync unlimited devices</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">10 GB monthly uploads
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">200 MB max. note size</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">Customize Home dashboard and access extra widgets</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">Connect primary Google Calendar account</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-[19px]">
                            <img src={silvercheck} alt="check" />
                            <p className="font-inter text-[16px] leading-[20px] text-text">Add due dates, reminders, and notifications to your tasks</p>
                        </div>
                    </li>
                </ul>
                <button className="font-inter font-medium text-[16px] tracking-[-2%] text-text px-10 py-4 rounded-[10px] border border-gold ">Get Started</button>
            </div>
        </div>
        <img src={Slider} alt="slider" className="hidden max-minidesktop:block mx-auto mb-20" />
    </section>
  )
}

export default Plan