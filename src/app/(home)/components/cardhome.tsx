import Image from "next/image";

export default function CardHome() {
    return (
        <section className="justify-center">
            <div className="text-left text-xl font-bold font-2xl text-yellow-600">Testimonials
                <hr className="h-0.5 flex-grow bg-yellow-600"/>
            </div>
                <div className="flex justify-around pt-14 pb-32 p-16 flex-wrap gap-9 lg:gap-6 lg:justify-evenly">
                
                    <div className="w-[300px]  h-[150px] rounded-[12px] bg-slate-100 ">
                        <div className="flex gap-4 items-center">
                            <Image
                                src="/images/p1.jpg"
                                alt="avatar"
                                height={72}
                                width={72}
                                className="size-[72px] flex-shrink-0 rounded-full border object-cover"
                            />
                            <p className="text-gray-800 text-center font-serif">Alifa Putri</p>
                        </div>
                        <p className="text-center">Dinner here is amazing! Authentic Indonesian food, cozy atmosphere, friendly service. I love it</p>
                    </div>

                    <div className="w-[300px] rounded-[12px] bg-slate-100">
                        <div className="flex gap-4 items-center">
                            <Image
                                src="/images/p3.jpg"
                                alt="avatar"
                                height={72}
                                width={72}
                                className="size-[72px] flex-shrink-0 rounded-full border object-cover"
                            />
                            <p className="text-gray-800 text-center font-serif">Alvino Baskara</p>
                        </div>
                        <p className="text-center">This restaurant is truly impressive. The food is delicious, the service is quick and friendly, and the atmosphere is comfortable</p>
                    </div>

                    <div className="w-[300px] rounded-[12px] bg-slate-100">
                        <div className="flex gap-4 items-center">
                            <Image
                                src="/images/p2.jpg"
                                alt="avatar"
                                height={72}
                                width={72}
                                className="size-[72px] flex-shrink-0 rounded-full border object-cover"
                            />
                            <p className="text-gray-800 text-center font-serif">Sabrina Azzahra</p>
                        </div>
                        <p className="text-center">Delicious food, friendly service, pleasant atmosphere. Highly recommended</p>
                    </div>
                </div>
        </section>
    )
}

