import DesignServices from './components/DesignServices/DesignServices';
import FooterSection from './components/FooterSection/FooterSection';
import Hero from './components/Hero/Hero';
import MyWorkSection from './components/MyWorkSection/MyWorkSection';
import ProfileSection from './components/ProfileSection/ProfileSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <DesignServices />
      <ProfileSection />
      <MyWorkSection />
      <FooterSection />
    </main>
  );
}
