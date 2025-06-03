import Products from "./Products"

function List2() {
    const products=[
        {
            id:1,
            name:'Parle-G',
            weight:'100 GM',
            price:'10 Rs.'
        },
        {
            id:2,
            name:'Meggi',
            weight:'400GM',
            price:'67 Rs.',
        },
        {
            id:3,
            name:'Frooti',
            weight:'-',
            price:'20',
        },

        {
            id:4,
            name:'Cookies',
            weight:'200GM',
            price:'50',
        }

    ]
    //  const productList =  products.map(product => <h5>{product.id}  {product.name}  {product.weight}  {product.price}</h5>)
    
    //Refactor the JSX into seperate component
    // We will pass products as prop
    // const productList =  products.map(product => <Products product1={product}/>)

    //Adding key prop
    // const productList =  products.map(product => <Products key="unique" product={product}/>) 
    // in above code every item render will have the same value for the key prop so, value is not unique within the list

    // const productList =  products.map(product => <Products key={product.id} product1={product}/>) 
    
    // Below code is splitting an array of products into rows, where each row contains up to 2 products. It wraps each pair in a Bootstrap .row and .col-md-6 structure for a two-column grid layout.
   // This loop goes through the products array two items at a time.

    const rows = [];
    for (let i = 0; i < products.length; i += 2) {
        rows.push(
            <div className="row" key={i}>
                <div className="col-md-6">
                    <Products product1={products[i]} />
                </div>
                {i + 1 < products.length && (
                    <div className="col-md-6">
                        <Products product1={products[i + 1]} />
                    </div>
                )}
            </div>
        );
    }
    
    return (
    <div>
      {/* {productList} */}
      <div className="container">
                {rows}
            </div>
    </div>
  )
}

export default List2
