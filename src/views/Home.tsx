import BestSellersProducts from "../components/Shop/BestSellersProducts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HorizontalPhotoGallery from "../components/HorizontalPhotoGallery";
import OnTop from "../components/OnTop";
import PromoBannersSlide from "../components/PromoBannersSlide";
import SubscriptionBanner from "../components/SubscriptionBanner";
import Testimonials from "../components/Testimonials";
import WhoChooseUs from "../components/WhoChooseUs";
import Spacer from "../components/Essentials/Spacer";

const Home = () => {
  return (
    <>
      <Spacer variant="top">
        <Header
          ctaText="Check our Products"
          ctaAction={() => null}
          special="Hot Gift"
          slug="There is always a lingering, familiar smell that it leaves behind"
          title="A Perfect Perfume For Every Mood"
        />
      </Spacer>
      <Hero />
      <OnTop />
      <PromoBannersSlide />
      <BestSellersProducts />
      <WhoChooseUs />
      <Testimonials />
      <HorizontalPhotoGallery />
      <SubscriptionBanner />
    </>
  );
};

export default Home;
