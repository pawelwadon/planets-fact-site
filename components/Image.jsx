import data from "../src/data.json";

const Image = ({name,kind})=>{
const needed = data.filter((i) => i.name === name)
const image = needed.map((i)=> i.images[kind])

//geology needs 2 illustrations 
const Geology = ()=>{
    return(
        <div className="lg:flex lg:justify-center">
            <img src={needed.map((i)=>i.images.planet)} className="lg:max-w-[50%] "/>
            <img src={needed.map((i)=>i.images.geology)} className="object-contain w-56 absolute top-2/3 left-1/2 -translate-x-2/4 lg:max-w-[30%] "/>
        </div>
    )
}  

//if display geology section use Geology component, else display single photo 
const display = kind==='geology' ? <Geology/> : <img src={image} alt={name} className="lg:max-w-[50%]" />


    return(
        <div className="image justify-self-center self-center animate-image-display relative top-0 left-0 lg:flex lg:justify-center sm:my-10 lg:mt-8 lg:mb-16">
        {display}
        </div>
    )
}

export default Image;

