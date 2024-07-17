import Image from "next/image";

interface IProps{
    imgSrc : string;
    caption : string;
}

export default function Best({imgSrc,caption}:IProps) {
    return (
        <div className="pb-10 p-18 pt-0 flex flex-wrap items-center justify-center gap-9 lg:gap-3 lg:justify-evenly">

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src={imgSrc}
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">{caption}</h1>
            </div>
{/* 
            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/6atiampela.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Ati Ampela Goreng</h1>
            </div> */}

            {/* <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/6ayam.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Ayam Bakakak</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/6wings.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Chiken Wings</h1>
            </div>

            <div>
                <Image className="rounded-[19px] hover:scale-105 duration-500"
                    src="/images/6rendang.jpg"
                    alt=""
                    width={250}
                    height={250}
                />
                <h1 className="font-serif font-semibold text-center pt-2 text-black ">Rendang</h1>
            </div> */}

        </div>
    )
}