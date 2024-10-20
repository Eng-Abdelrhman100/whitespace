import Apple from "../assets/Apple.svg"
import Microsoft from "../assets/Microsoft.svg"
import Slack from "../assets/Slack.svg"
import Google from "../assets/Google.svg"
const Sponsor = () => {
  return (
    <section className="tablet:py-[140px] py-[100px] desktop:px-[220px] minidesktop:px-8 tablet:px-5 px-4 ">
        <h1 className="font-inter font-bold text-text tracking-[-2%] xl:text-[72px] minidesktop:text-[64px] md:text-[54px] text-[36px] text-center mb-[100px]">Our Sponsors</h1>
        <div className="flex max-tablet:flex-col items-center desktop:gap-[216.18px] xl:gap-[180.84px] minidesktop:gap-[84.84px] mobile:gap-[100px]">
            <img src={Apple} alt="Apple" />
            <img src={Microsoft} alt="Microsoft" />
            <img src={Slack} alt="Slack" />
            <img src={Google} alt="Google" />
        </div>
    </section>
  )
}

export default Sponsor