import { ReactElement } from "react";

interface WorkCardPorps {
  title: string;
  siteType: string;
}

const WorkCard = ({ title, siteType }: WorkCardPorps): ReactElement => {
  return (
    <div className='flex justify-between items-center py-12 px-20 w-full border-b-2 border-black'>
      <span className='text-3xl font-bold'>{title}</span>
      <span className='text-3xl font-bold'>{siteType}</span>
    </div>
  )
}

export default WorkCard;
