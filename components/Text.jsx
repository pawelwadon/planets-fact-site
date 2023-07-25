import data from "../src/data.json";

const Text = ({name,topic})=>{

const needed = data.filter((i) => i.name === name)
const text = needed.map((i)=> i[topic].content)
const wiki = needed.map((i)=> i[topic].source)

    return(
        <div className="py-6">
        <p className="text-justify py-2 mb-6 sm:text-center ">{text}</p>
        <div className="flex items-baseline gap-2 text-[color:var(--light-grey)] sm:justify-center">
            <p>Source :</p>
            <a href={wiki} className="flex items-center gap-1 font-bold underline tracking-wider">Wikipedia <img src="src/assets/icon-source.svg" alt="source-icon"/></a>
        </div>  
        </div>
    )
}

export default Text;