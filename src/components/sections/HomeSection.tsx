import { motion, useTransform, MotionValue } from 'framer-motion';

interface HomeSectionProps {
  scrollYProgress: MotionValue<number>;
  index: number;
}

const HomeSection: React.FC<HomeSectionProps> = ({ scrollYProgress, index }) => {
  const opacity = useTransform(scrollYProgress, [index / 4, (index + 1) / 4], [1, 0]);

  return (
    <motion.section style={{ opacity }} className="h-screen flex items-center justify-center bg-blue-500">
      <h1 className="text-5xl text-white">Home Section</h1>
    </motion.section>
  );
};

export default HomeSection;
