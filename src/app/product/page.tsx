import Image from "next/image";
import Banner from "./components/banner";
import Best from "./components/best";
import Mie from "./components/mie";
import Dessert from "./components/dessert";
import Drink from "./components/drink";
import FetchProduct from "./components/fetchProduct";

export default function Product() {
    return (
        <div className="bg-yellow-600 min-h-screen">
            <Banner />
            <h1 className="text-center pt-8 font-extrabold text-5xl text-black">Our Products</h1>
            {/* <div className="pb-32 p-18 pt-12 flex flex-wrap  gap-9 lg:gap-3 items-center justify-center lg:justify-evenly">
                <div>
                    <Image className="rounded-[19px] hover:scale-105 duration-500"
                        src="/images/5blufinTuna.jpg"
                        alt=""
                        width={250}
                        height={250}
                    />
                    <h1 className="font-serif font-semibold text-center pt-2 text-black ">Blufin Tuna</h1>
                </div>

                <div>
                    <Image className="rounded-[19px] hover:scale-105 duration-500"
                        src="/images/5carviar almas.jpg"
                        alt=""
                        width={250}
                        height={250}
                    />
                    <h1 className="font-serif font-semibold text-center pt-2 text-black ">Calviar Almas</h1>
                </div>

                <div>
                    <Image className="rounded-[19px] hover:scale-105 duration-500"
                        src="/images/5oysters.jpg"
                        alt=""
                        width={250}
                        height={250}
                    />
                    <h1 className="font-serif font-semibold text-center pt-2 text-black ">Oysters</h1>
                </div>

                <div>
                    <Image className="rounded-[19px] hover:scale-105 duration-500"
                        src="/images/5wagyu.jpg"
                        alt=""
                        width={250}
                        height={250}
                    />
                    <h1 className="font-serif font-semibold text-center pt-2 text-black ">Wagyu Kobe</h1>
                </div>
            </div>  */}
            {/* <Best/>   */}
            {/* <Mie/>   */}
            {/* <Dessert/>  */}
            {/* <Drink/>    */}
            <FetchProduct/>   
        </div>
    )

}