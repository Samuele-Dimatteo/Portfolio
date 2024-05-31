import { motion, useTransform, MotionValue } from 'framer-motion';

interface AboutSectionProps {
  scrollYProgress: MotionValue<number>;
  index: number;
}

const AboutSection: React.FC<AboutSectionProps> = ({ scrollYProgress, index }) => {
  const opacity = useTransform(scrollYProgress, [(index - 1) / 4, index / 4, (index + 1) / 4], [0, 1, 0]);

  return (
    <motion.section style={{ opacity }} className="h-screen flex items-center justify-center bg-green-500">
      <h1 className="text-5xl text-white">About Section</h1>
    </motion.section>
  );
};

export default AboutSection;
