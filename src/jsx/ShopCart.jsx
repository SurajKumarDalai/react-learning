function Shop(){

    const product = "Laptop";
    const price = 60000;
    const discount = 10;

    return(

        <div>
            <h1>Shopping Cart</h1>
            <p>Product:{product}</p>
            <p>Original Price:{price}</p>
            <p>Discount: {discount}%</p>
            <p>Final Price:{price - price* 10/100}</p>
        </div>
    );
}
export default Shop;