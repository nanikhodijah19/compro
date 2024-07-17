import Image from "next/image";
import Link from "next/link";
import Cardhome from "./components/cardhome";
import OurMenu from "./components/ourmenu";


export const metadata = {
  title: "home",
  description: "halaman depan",
};

export default function Home() {
  return (

    <div className="bg-black min-h-screen">
      
      <Image className="relative"
        src='/images/sate (2).jpg'
        alt="home"
        width={900}
        height={300}
        layout="responsive"

      />
      <h3 className="absolute inset-0 p-4 flex md:right-[70px] md:top-[500px]  top-40 justify-between md:text-5xl text-3x1 text-bold font-mono text-white text-center">Happy Tummy<br></br>Happy Heart </h3>

      <div className="p-4 ">
        <h2 className="text-white text-center font-bold text-3xl"></h2>
        <div className="py-16">
          <div className="xl:countener m:auto px-6 text-white md:px-12 xl:16">
            <div className="lg:bg-zinc-900 lg:p-16 rounded-[3rem] space-y-6 md:flex md:gap-6 justify-center md:space-x-0 lg:items-center">
              <div>
                <Image 
                  src="/images/about.jpg"         
                  alt="about"
                  height={1200}
                  width={1200}
                />
              </div>
              <div className="">
                <h1 className="text-white text-center py-6 text-5xl font-bold">Welcome<br></br>Restaurant Nankho</h1>
                <p className="text-white py-2">Restaurant Nankho is a culinary destination offering a unique and satisfying dining experience. Located in Subang, West Java, we serve a variety of dishes from both international and local cuisines, using fresh ingredients of the highest quality. Enjoy a comfortable atmosphere and friendly service from our team at Restaurant Nankho</p>
                <button className="text-yellow-600 py-2 bg-transparent border border-solid border-yellow-600 hover:bg-yellow-600 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "><Link href="/about" passHref className=""><span className="">view more</span></Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurMenu/>
      <Cardhome/> 
    </div>
  );
}
