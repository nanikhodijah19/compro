import Image from "next/image"

export default async function FetchingData() {
    const res = await fetch(`https://randomuser.me/api/?results=8`, {
        method: "GET"
    })
    const data = await res.json()

    return (
        <div className="bg-black min-h-screen">
             <h1 className="pt-20 py-8 text-white text-center font-bold text-5xl">Our Teams</h1>
             <hr className="h-0.5 flex-grow bg-yellow-600 dark:bg-white" />
            <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-3  p-6 ">
                {
                    data.results.map((item: any, idx: any) => (
                        <div className="items-center flex flex-col pt-16 pb-14" key={idx}>
                            <Image src={item.picture.medium} width={200} height={200} alt="team1" className="rounded-[14px]"/>
                            <p className="text-white font-serif">{item.name.first} {item.name.last}</p>
                            <p className="text-white">{item.email}</p>
                            <p className="text-white">{item.phone}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}