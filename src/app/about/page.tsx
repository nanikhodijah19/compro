import Image from "next/image";
import Culture from "./componets/culture";
import Footer from "../footer";





export const metadata = {
    title: "about",
    description: "tentang kami",
};


function About() {
    return (
        <section className="bg-black">
            <h1 className="pt-20 py-8 text-white text-center font-bold text-5xl">About us</h1>
            <hr className="h-0.5 flex-grow bg-yellow-600 dark:bg-white" />

            <div>
                <h1 className="text-center text-white hover:text-yellow-600 text-xl px-32 font-semibold py-6">What is the Story Behind Nankho Restaurant</h1>
                <p className="text-center text-white px-32 p-8">
                Our story begins with a passion for creating unforgettable dining experiences. Inspired by the rich culinary heritage of Indonesia and the world, Nankho Restaurant was founded with the belief that exceptional food can bring people together. Whether you`&apos`re enjoying our signature dishes or exploring delicious desserts, each offering at Nankho tells a tale of skill and dedication.

                At Nankho Restaurant, we invite you to embark on a culinary adventure that delights the senses and leaves a lasting impression. Join us and discover why we are more than just an ordinary restaurant we are a destination for food lovers, adventurers, and anyone seeking the taste of culinary excellence
                </p>
         
            </div>

            <div className="flex justify-around pt-9">
                <div className="xl:countener m:auto px-6 text-black md:px-12 xl:16">
                    <div className="lg:bg-slate-100 lg:p-16 rounded-[7px] h-[280px] lg:w-[800px] space-y-6 md:flex md:gap-6 justify-center md:space-x-0 lg:items-center">
                        <div className="flex rounded-[100px] gap-4 items-center lg:flex-row flex-col">

                            <div>
                                <div className="flex flex-col justify-center items-center">
                                    <button className="text-yellow-600 py-2  border border-solid border-yellow-600 hover:bg-yellow-600 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">2002</button>
                                </div>
                                <p className="text-white lg:text-black" >The first year of developing the Nankho restaurant business unit in Indonesia, specifically in the city of Subang</p>
                            </div>

                            <Image
                                src="/images/depan.jpg"
                                alt="depan"
                                height={300}
                                width={300}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div>
                {/* <h1 className="py-12 mt-28 sm:mt-0 text-yellow-600 text-center text-1xl font-bold">I LOVE YOU<br />YOU LOVE ME<br />Restaurant Nankho</h1> */}
                <p className="text-white text-center px-32 mt-24">The slogan happy tummy, happy heart signifies that when your stomach is content and satisfied after a meal, it brings joy and happiness to your emotions as well. It suggests that good food not only satisfies your physical hunger but also enhances emotional well-being, contributing to overall happiness and satisfaction</p>
            </div>
            < div className="py-11" >
                <div className="xl:countener m:auto px-6 text-white md:px-12 xl:16">
                    <div className="lg:bg-black lg:p-16 rounded-[3rem] space-y-2 md:flex md:gap-6  md:space-x-0 ">
                        <Image
                            src="/images/profile2.jpg"
                            alt="profile"
                            height={150}
                            width={400}
                        />
                        <div className="">
                            <h1 className="text-white py-2 text-4xl font-bold">Nanda Khofifah </h1>
                            <h1 className="text-gray-400 text-2xl font-bold">Direktur Utama</h1>
                            <p className="text-white py-2">Lorem ipsum dolor si sit aadipisicing elit. Sed porro iste animum dolor sit amet consectetur um doum dolor situm dolor sit amet um dolor sit amet consectetur adipisicing elit. Sed porro iste anum dolor sit amet consectetur adipisicing elit. Sed porro iste anconsectetur adipisicing elit. Sed porro iste an amet consectetur adipisicing elit. Sed porro iste anlor sit amet consectetur adipisicing elit. Sed porro iste anadipisicing elit. Sed porro iste ani amet non saepe id dolorum libero qui ut magnam officia, voluptatibus quos unde nisi, eligendi vel eaque facere quidem a maxime dolorem dignissimos ipsum velit? Tempora error dignissimos incidunt! Iusto dolores mollitia iure neque necessitatibus repellat, eum ullam voluptatem omnis recusandae totam dicta, itaque soluta voluptatum rem porro facilis ipsum odio voluptas. Veniam sint unde, ducimus tempore doloribus excepturi vero consequatur cupiditate itaque aliquam cumque totam labore assumenda pariatur repellat sed velit temporibus quidem! Ad magni sequi ratione tempore itaque, optio consequuntur fuga recusandae at repudiandae architecto debitis.</p>
                        </div>
                    </div>
                </div>
            </div >

            <Culture />

            <div>

            </div>

        </section>


    )
}
export default About



