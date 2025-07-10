import { Button } from "../atoms/Button"
import { Content } from "../molecules/Content"


export const ContentDis = () =>{

    function showAlert (){
    alert("Hi, Button's Onclick Given from Organism Level >> Molecule Level >> Atoms Level >> Button Component");
}

    return(
        <>
        <div className="text-center shadow-md flex justify-center items-center flex-col p-40 cursor-pointer transition hover:ring-2 ring-green-500 rounded-xl hover:shadow-2xl hover:scale-110 duration-750">
            <Content></Content>
            <Button onClick={showAlert}>Click Me</Button>
        </div>
        </>
    )
}