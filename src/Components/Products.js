
function Products({product1 }) {
    return (
      <div>
        {/* <h2> {product1.id}  {product1.name}  {product1.weight}  {product1.price}</h2> */}
        <div class="card" style={{width:" 18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product1.name}</h5>
    <p class="card-text">{product1.weight}</p>
    <p class="card-text">{product1.price}</p>
    <a href="#" class="btn btn-primary">Bye</a>
  </div>
</div>
      </div>
    )
  }
  
  export default Products
  