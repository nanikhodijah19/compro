import Image from "next/image";

export default function Mie() {
    return (
        <div className="pb-10 p-18 pt-20 flex flex-wrap gap-9 items-center justify-center lg:gap-3 lg:justify-evenly">

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/7ramen.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Ramen</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/7soba.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Soba</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/7spageti.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Spaghetti</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/7udon.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Udon</h1>
            </div>

        </div>
    )
}