import { MainPage } from "./components/view/MainPage";
import SectionWrapper from "./hoc/SectionWrapper";

const Home = () => {
  return (
    <>
      <MainPage />
    </>
  );
};

const WrappedApp = SectionWrapper(Home);
WrappedApp.displayName = "WrappedApp";

export default WrappedApp;
