import Image from "next/image";

interface IProps {
    imgSrc: string;
    caption: string;
}

export default function Best({ imgSrc, caption }: IProps) {
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
        </div>
    )
}