import Title from '../../components/Title'
import { AiOutlineSafety } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiDropbox } from "react-icons/tfi";
import { LiaHandshakeSolid } from "react-icons/lia";
import { BsDoorOpen } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const Service = () => {
    const { t } = useTranslation()
  return (
    <section id='services' className="container mx-auto px-4 pt-8">
        {/* <Title text={t('qualityservice')} /> */}
        <Title size={"md"} text={t('servicedescription')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12">
          <div className="h-[200px] sm:h-[270px] p-4 sm:p-6 border-whiteGray border rounded-tr-lg sm:rounded-tr-none rounded-tl-lg flex flex-col justify-between">
            <IoTimeOutline color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto translate-y-2" text={t('safetime')} />
          </div>
          <div className="h-[200px] sm:h-[270px] p-4 sm:p-6 border-whiteGray border sm:rounded-tr-lg md:rounded-tr-none flex flex-col justify-between">
            <BsDoorOpen color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto translate-y-2" text={t('getdoor')} />
          </div>
          <div className="h-[200px] sm:h-[270px] p-4 sm:p-6 border-whiteGray border md:rounded-tr-lg flex flex-col justify-between">
            <LiaHandshakeSolid color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto translate-y-2" text={t('deliverhand')} />
          </div>
          <div className="h-[200px] sm:h-[270px] p-4 sm:p-6 border-whiteGray border md:rounded-bl-lg flex flex-col justify-between">
            <TfiDropbox color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto translate-y-2" text={t('package')} />
          </div>
          <div className="h-[200px] sm:h-[270px] p-4 sm:p-6 border-whiteGray border sm:rounded-bl-lg md:rounded-bl-none  flex flex-col justify-between">
            <AiOutlineSafety color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto translate-y-2" text={t('trustly')} />
          </div>
          <div className="h-[200px] sm:h-[270px] p-4 sm:p-6 border-whiteGray border rounded-bl-lg sm:rounded-bl-none rounded-br-lg flex flex-col justify-between">
            <CiDeliveryTruck color={'#FAFAFA'} size={42} />
            <Title className="!text-[35px] mt-auto translate-y-2" text={t('deliverdoor')} />
          </div>
        </div>
      </section>
  )
}

export default Service