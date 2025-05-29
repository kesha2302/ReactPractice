import Carousel from "./Carousel"
import Footer from "./Footer"
import Navbar from "./Navbar"

function HomePage() {
  return (
    <div className="text-center">

      <Navbar/>
      <h1 className="m-4">Home Page</h1>
      {/* <img src="Image/cake1.jpg" className="img-fluid" alt="Cake" width="900px" height="100px"/> */}
      <Carousel/>
      <div className="container bg-primary p-5 mt-3 mb-3 rounded text-dark">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat qui facilis ratione iste doloribus, incidunt nulla dignissimos architecto aliquam eligendi distinctio dolorum mollitia iure ea magni earum! Eaque, aut maiores!
      </div>



      <Footer/>
    </div>
  )
}

export default HomePage
