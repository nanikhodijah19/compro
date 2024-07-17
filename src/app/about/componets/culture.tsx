import Image from "next/image";
import Marquee from "react-fast-marquee";


export default function Culture() {
    return (

        <div className="pb-32 p-16 flex flex-wrap gap-9 lg:gap-6 lg:justify-evenly">
            <div className="card  bg-white w-60 shadow-xl border-2 border-yellow-600">
                <figure>
                    <Image className="hover:scale-105 duration-500"
                        src="/images/1c.jpg"
                        alt="Shoes"
                        width={500}
                        height={500} />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">visi misi</h2>
                    <p>Stay simple, stay focused, build respectable brands lasting for centuries</p>

                </div>
            </div>

            <div className="card  bg-white w-60 shadow-xl border-2 border-yellow-600">
                <figure>
                    <Image className="hover:scale-105 duration-500"
                        src="/images/1b.jpg"
                        alt="Shoes"
                        width={500}
                        height={500} />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Our Core Values</h2>
                    <p>Sincere people, genuine hearts, and authentic products; take the right path and uphold integrity</p>

                </div>
            </div>

            <div className="card  bg-white w-60 shadow-xl border-2 border-yellow-600">
                <figure>
                    <Image className="hover:scale-105 duration-500"
                        src="/images/1a.jpg"
                        alt="Shoes"
                        width={500}
                        height={500} />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Business Principles</h2>
                    <p>The proximal embraces great pleasure.The distant sees no distance.Striver-oriented. Customer-centred</p>

                </div>
            </div>

            <div className="card  bg-white w-60 shadow-xl border-2 border-yellow-600">
                <figure>
                    <Image className="hover:scale-105 duration-500"
                        src="/images/1d.jpg"
                        alt="Shoes"
                        width={500}
                        height={500} />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Code of Conduct</h2>
                    <p>Real Place, Real Thing, Real Situation.Maintain unity between knowledge and practice. Take the lead in all respects. Thoroughness makes the ordinary extraordinary</p>

                </div>
            </div>

            <Marquee className="bg-black h-60 pt-6">
                <Image src={"/images/t1.jpg"} alt="team" width={400} height={400}/>
                <Image src={"/images/t2.jpg"} alt="team" width={400} height={400}/>
                <Image src={"/images/t3.jpg"} alt="team" width={400} height={400}/>
                <Image src={"/images/t4.jpg"} alt="team" width={400} height={400}/>
                <Image src={"/images/t5.jpg"} alt="team" width={400} height={400}/>
            </Marquee>

        </div>
        
    )
}