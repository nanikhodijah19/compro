import Image from "next/image";

export default function Drink() {
    return (
        <div className="pb-10 p-18 pt-20 flex flex-wrap items-center justify-center gap-9 lg:gap-3 lg:justify-evenly">

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/9flavoured soda.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Flavoured Soda</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/9cocktails.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Cocktails</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/9mojito.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Mojito</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/9smoothies.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Smoothies</h1>
            </div>

        </div>
    )
}