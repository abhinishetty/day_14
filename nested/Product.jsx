import { useSearchParams } from "react-router-dom";

function Product() {
    const [searchParams,setSearchParams] = useSearchParams();
    const category = searchParams.get("category");
    const price = searchParams.get("price");
    return (
        <div>
            <h2>Product Page</h2>
            <p><strong>Category: {category}</strong></p>
            <p><strong>Price: {price}</strong></p>
            <hr></hr>
            <button onClick={()=>setSearchParams({category:"DellLaptop",price:"90000"})}>Update category</button>
            <button onClick={()=>setSearchParams({category:"HPLaptop",price:"70000"})}>Update price</button>
        </div>
    );
}
export default Product;