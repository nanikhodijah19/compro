import Banner from "./components/banner";
import FetchProduct from "./components/fetchProduct";

export default function Product() {
    return (
        <div className="bg-yellow-600 min-h-screen">
            {/* <Banner /> */}
            <h1 className="text-center pt-16 font-extrabold text-5xl text-black">Our Products</h1>
       
            <FetchProduct/>   
        </div>
    )

}