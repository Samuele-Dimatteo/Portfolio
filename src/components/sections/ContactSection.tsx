import { motion, useTransform, MotionValue } from 'framer-motion';

interface ContactSectionProps {
  scrollYProgress: MotionValue<number>;
  index: number;
}

const ContactSection: React.FC<ContactSectionProps> = ({ scrollYProgress, index }) => {
  const opacity = useTransform(scrollYProgress, [(index - 1) / 4, index / 4, (index + 1) / 4], [0, 1, 0]);

  return (
    <motion.section style={{ opacity }} className="h-screen flex items-center justify-center bg-purple-500">
      <h1 className="text-5xl text-white">Contact Section</h1>
    </motion.section>
  );
};

export default ContactSection;
