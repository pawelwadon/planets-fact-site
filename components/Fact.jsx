import data from "../src/data.json"

const Fact = ({header,name,info})=>{

const needed = data.filter((i) => i.name === name)

const text= needed.map((i)=>i[info])

return(
    <div className="border border-[color:var(--light-grey)] p-5 sm:flex sm:justify-between sm:items-center sm:p-4">
        <h3 className="text-[color:var(--light-grey)] ">{header}</h3>
        <h2 className="">{text}</h2>
    </div>
    )
}

export default Fact;
