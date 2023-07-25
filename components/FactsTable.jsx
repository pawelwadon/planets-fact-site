import Fact from "./Fact";

const FactsTable = ({name})=>{
    return(
        <div className="pt-12 content-center grid grid-cols-4 gap-x-12 justify-center animate-facts-display sm:block sm:space-y-4 lg:mb-6 lg:pt-4"> 
            <Fact header='Rotation Time' name={name} info='rotation'/>
            <Fact header='Revolution Time' name={name} info='revolution'/>
            <Fact header='Radius' name={name} info='radius'/>
            <Fact header='Average Temp.' name={name} info='temperature'/>
        </div>
    )
}

export default FactsTable;