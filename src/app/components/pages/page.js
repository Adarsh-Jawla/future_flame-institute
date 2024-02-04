import About from "../about/page"
import Banner from "../banner/page"
import Course from "../courses/page"
import Faq from "../faq/page"
import Newsletter from "../newsletter/page"
import Sliders from "../slider/page"
import Stats from "../stats/page"
import Testimonials from "../testimonials/page"

const HomePage = () => {
  return (
    <>
      <Banner />
      <Sliders />
      <Course />
      <Newsletter />
      <About />
      <Stats />
      <Testimonials />
      <Faq />
    </>
  )
}

export default HomePage