import Image from "next/image";

export default function Dessert() {
    return (
        <div className="pb-10 p-18 pt-20 flex flex-wrap items-center justify-center gap-9 lg:gap-3 lg:justify-evenly">

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/8macaroon.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Macaroon</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/8choco lava.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Choco Lava Cake</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/8panna cotta.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Panna Cotta</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/8dessert.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Red Valvet</h1>
            </div>

        </div>
    )
}