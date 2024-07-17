import Image from "next/image";
import Link from "next/link";

export default function OurMenu() {
    return (
        <div className="bg-black">
            <h1 className="text-center text-white font-bold size-3xl ">SPECIAL MENUS JUST FOR YOU</h1>
            <h3 className=" text-center text-white font-serif">Your favorite foods and menus are here, choose now before they run out</h3>
            <div className="pb-32 p-16 flex flex-wrap gap-9 lg:gap-6 lg:justify-evenly">
                <div className="card  bg-white w-60 shadow-xl border-2 border-yellow-600">
                    <figure>
                        <Image className=""
                            src="/images/9mojito.jpg"
                            alt="mojito"
                            width={500}
                            height={500} />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Mojito</h2>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>Mojito is one of the famous cocktails from Cuba, and it has gained popularity worldwide for its refreshing and enjoyable taste</p>
                        <button className="text-black py-2 bg-transparent border border-solid border-yellow-600 hover:bg-yellow-600 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "><Link href="/product" passHref className=""><span className="">Order</span></Link></button>
                    </div>
                </div>

                <div className="card  bg-white w-60 shadow-xl border-2 border-yellow-600">
                    <figure>
                        <Image className=""
                            src="/images/8choco lava.jpg"
                            alt="cooco lava"
                            width={500}
                            height={500} />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Choco Lava Cake</h2>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p> A famous chocolate cake known for its characteristic soft exterior yet gooey interior, resembling flowing lava.</p>
                        <button className="text-black py-2 bg-transparent border border-solid border-yellow-600 hover:bg-yellow-600 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "><Link href="/product" passHref className=""><span className="">Order</span></Link></button>
                    </div>
                </div>

                <div className="card  bg-white w-60 shadow-xl border-2 border-yellow-600">
                    <figure>
                        <Image className=""
                            src="/images/5carviar almas.jpg"
                            alt="Carviar almas"
                            width={500}
                            height={500} />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Carviar Almas</h2>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>Karviar is produced from the eggs of the rare Caspian Sea albino Beluga sturgeon.</p>
                        <button className="text-black py-2 bg-transparent border border-solid border-yellow-600 hover:bg-yellow-600 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "><Link href="/product" passHref className=""><span className="">Order</span></Link></button>
                    </div>
                </div>

                <div className="card  bg-white w-60 shadow-xl border-2 border-yellow-600">
                    <figure>
                        <Image className=""
                            src="/images/7ramen.jpg"
                            alt="ramen"
                            width={500}
                            height={500} />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Ramen</h2>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>Ramen noodles are typically made from wheat and served in a rich broth made from various ingredients such as beef bones, chicken, or kombu seaweed, known for its flavorful taste</p>
                        <button className="text-black py-2 bg-transparent border border-solid border-yellow-600 hover:bg-yellow-600 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "><Link href="/product" passHref className=""><span className="">Order</span></Link></button>
                    </div>
                </div>

            </div>
        </div>
    )
}