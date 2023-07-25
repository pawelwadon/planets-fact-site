import { useState } from "react";
import FactsTable from "./FactsTable"
import Image from "./Image";
import ButtonList from "./ButtonList";
import Text from "./Text";

const PlanetSite = ({name,color})=>{

const[kind,setKind] = useState('planet')
const[topic,setTopic] = useState('overview')

    return(
        <section className="px-10 h-[85vh] w-[100%] lg:h-auto sm:h-auto sm:px-6 sm:relative mt-8 sm:mt-4">
            <div className="mx-auto max-w-7xl h-full w-full flex flex-col relative">
                <div className="content pb-12 h-full content-center">
                    <Image name={name} kind={kind}/>
                        <div className="text relative animate-general-display sm:text-center sm:mt-16 self-end">
                            <h1 className="">{name}</h1>
                            <Text name={name} topic={topic}/>
                        </div>
                    <ButtonList setKind={setKind} setTopic={setTopic} planet={'planet'} internal={'internal'} geology={'geology'} overview={'overview'} structure={'structure'} color={color}/>
                </div>
                <FactsTable name={name}/>
            </div>
        </section>
    )
}

export default PlanetSite;