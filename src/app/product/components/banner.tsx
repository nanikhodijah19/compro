import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function banner() {
    return (
        <div className="bg-yellow-600">
            <Marquee className="pt-9">
            <Image src={"/images/product5.png"} alt="team" width={400} height={400}/>
                <Image src={"/images/product1.png"} alt="team" width={400} height={400}/>
                <Image src={"/images/product2.png"} alt="team" width={400} height={400}/>
                <Image src={"/images/product3.png"} alt="team" width={400} height={400}/>
            </Marquee>
        </div>
    )
}