import { cache } from "react";
import Best from "./best";

export default async function FetchProduct() {
    const res = await fetch("https://cdn.contentful.com/spaces/n97sziju7b85/environments/master/entries?access_token=N-B0OwapzWOJIAxadr6A5a7HnaN1H-IgL8GrgiQG3Qc",
        {
            method:"GET",
            // cache: "no-cache",
        }
    )
    
    const data = await res.json()
    console.log(data.includes.Asset[0].fields.file.url);

    return (
        <div className="pb-32 p-18 pt-12 flex flex-wrap  gap-9 lg:gap-3 items-center justify-center lg:justify-evenly">
            <Best imgSrc={data.includes.Asset[0].fields.file.url} caption={data.items[0].fields.text}/>
            <Best imgSrc={data.includes.Asset[3].fields.file.url} caption={data.items[3].fields.text}/>
            <Best imgSrc={data.includes.Asset[15].fields.file.url} caption={data.items[2].fields.text}/>
            <Best imgSrc={data.includes.Asset[17].fields.file.url} caption={data.items[1].fields.text}/>
            <Best imgSrc={data.includes.Asset[16].fields.file.url} caption={data.items[5].fields.text}/>
            <Best imgSrc={data.includes.Asset[1].fields.file.url} caption={data.items[6].fields.text}/>
            <Best imgSrc={data.includes.Asset[9].fields.file.url} caption={data.items[4].fields.text}/>
            <Best imgSrc={data.includes.Asset[14].fields.file.url} caption={data.items[7].fields.text}/>
            <Best imgSrc={data.includes.Asset[5].fields.file.url} caption={data.items[8].fields.text}/>
            <Best imgSrc={data.includes.Asset[13].fields.file.url} caption={data.items[9].fields.text}/>
            <Best imgSrc={data.includes.Asset[7].fields.file.url} caption={data.items[10].fields.text}/>
            <Best imgSrc={data.includes.Asset[19].fields.file.url} caption={data.items[11].fields.text}/>
            <Best imgSrc={data.includes.Asset[6].fields.file.url} caption={data.items[12].fields.text}/>
            <Best imgSrc={data.includes.Asset[11].fields.file.url} caption={data.items[13].fields.text}/>
            <Best imgSrc={data.includes.Asset[8].fields.file.url} caption={data.items[15].fields.text}/>
            <Best imgSrc={data.includes.Asset[2].fields.file.url} caption={data.items[14].fields.text}/>
            <Best imgSrc={data.includes.Asset[12].fields.file.url} caption={data.items[19].fields.text}/>
            <Best imgSrc={data.includes.Asset[10].fields.file.url} caption={data.items[17].fields.text}/>
            <Best imgSrc={data.includes.Asset[4].fields.file.url} caption={data.items[18].fields.text}/>
            <Best imgSrc={data.includes.Asset[18].fields.file.url} caption={data.items[16].fields.text}/>
            
           
        </div>
    )
}