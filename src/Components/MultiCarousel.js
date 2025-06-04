import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MultiCarousel() {
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div>
    <Carousel responsive={responsive}>
  <div>
    <div class="card" style={{width: "18rem"}}>
  <img src="Image/cake1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cake1</h5>
    <p class="card-text">Price: ₹600</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
</div>

  <div>
    <div class="card" style={{width: "18rem"}}>
  <img src="Image/cake2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cake2</h5>
    <p class="card-text">Price: ₹600</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
  </div>

  <div>
    <div class="card" style={{width: "18rem"}}>
  <img src="Image/cake3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cake3</h5>
    <p class="card-text">Price: ₹600</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
  </div>

  <div>
    <div class="card" style={{width: "18rem"}}>
  <img src="Image/cake4.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cake4</h5>
    <p class="card-text">Price: ₹600</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
  </div>


   <div>
    <div class="card" style={{width: "18rem"}}>
  <img src="Image/cake5.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cake5</h5>
    <p class="card-text">Price: ₹700</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
   </div>

    <div>
        <div class="card" style={{width: "18rem"}}>
  <img src="Image/cake5.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cake6</h5>
    <p class="card-text">Price: ₹800</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
    </div>
</Carousel>
    </div>
  )
}

export default MultiCarousel
