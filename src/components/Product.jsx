function Product({product}){

    return(
        <>
        <h2>Product Detailes</h2>
        <p>Name : {product.name}</p>
        <p>Price : {product.price}</p>
        <p>Brand : {product.brand}</p>
        </>
    );
}
export default Product;