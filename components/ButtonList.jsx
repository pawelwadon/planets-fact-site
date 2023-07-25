import Button from "./Button";
import { useWindowSize } from "@uidotdev/usehooks";

const ButtonList = ({setKind,setTopic,planet,internal,geology,color,overview,structure})=>{
const size = useWindowSize();

    return(
        <div className="button-list block self-end sm:flex sm:mt-0 sm:justify-between lg:place-self-center animate-general-display">
            <Button header={'Overview'} number={'01'} action={()=>{setKind(planet),setTopic(overview)}} color={color} />
            <Button header={size.width>640 ? 'Internal Structure' : 'Structure'} number={'02'} action={()=>{setKind(internal),setTopic(structure)}} color={color} />
            <Button header={size.width>640 ? 'Surface Geology' : 'Surface'} number={'03'} action={()=>{setKind(geology),setTopic(geology)}} color={color} />
        </div>
    )
}

export default ButtonList;