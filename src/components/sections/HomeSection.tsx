import Text from '@/components/common/Text';

const HomeSection = () => {
  return (
    <section className="flex justify-between h-screen">
      <Text textElement={'h1'} size='xl' weight='bd' color='foreground'>Hi, I'm Samuele Dimatteo</Text>
      <Text textElement={'h3'} size='xl' weight='bd' color='foreground'>and I'm a Web Developer</Text>
    </section>
  );
};

export default HomeSection;
