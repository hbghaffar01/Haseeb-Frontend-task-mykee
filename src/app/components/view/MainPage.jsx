import Banner from "../common/Banner"
import BestSelling from "../common/BestSelling"
import { Divider } from "../common/Divider"
import Footer from "../common/Footer"
import Navbar from "../common/Navbar"
import PropertySwipper from "../common/PropertySwipper"

export const MainPage = () => {
  return (
    <section className="min-h-screen">
        <Navbar />
        <Banner />
        <PropertySwipper />
        <Divider />
        <BestSelling />
        <Footer />
    </section>
  )
}
