import { ReactElement } from 'react';
import WorkCard from '../common/WorkCard';

const WorkSection = (): ReactElement => {
  const works = [
    { title: 'Work 1', siteType: 'Site Type 1' },
    { title: 'Work 2', siteType: 'Site Type 2' },
    { title: 'Work 3', siteType: 'Site Type 3' }
  ];

  return (
    <section className='flex flex-col justify-center py-8 h-screen'>
      {works.map((item, idx) => (
        <WorkCard key={idx} title={item.title} siteType={item.siteType}/>
      ))}
    </section>
  );
};

export default WorkSection;
