import { motion, useTransform, MotionValue } from 'framer-motion';

interface WorksSectionProps {
  scrollYProgress: MotionValue<number>;
  index: number;
}

const WorksSection: React.FC<WorksSectionProps> = ({ scrollYProgress, index }) => {
  const opacity = useTransform(scrollYProgress, [(index - 1) / 4, index / 4, (index + 1) / 4], [0, 1, 0]);

  return (
    <motion.section style={{ opacity }} className="h-screen flex items-center justify-center bg-red-500">
      <h1 className="text-5xl text-white">Works Section</h1>
    </motion.section>
  );
};

export default WorksSection;
