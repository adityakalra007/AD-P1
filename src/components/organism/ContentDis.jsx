import { Button } from "../atoms/Button"
import { Content } from "../molecules/Content"

export const ContentDis = () =>{
    return(
        <>
        <div className="text-center shadow-md flex justify-center items-center flex-col p-40 cursor-pointer transition hover:ring-1 ring-green-500 rounded-xl hover:shadow-2xl hover:scale-110 duration-750">
            <Content></Content>
            <Button>Click Me</Button>
        </div>
        </>
    )
}