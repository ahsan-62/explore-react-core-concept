
export default function Todo({task,isOn}){
    if(isOn===true){
        return(
            <li style={{color:"red",listStyleType:"none"}} >Hello,I want to {task}</li>
        )
    }

    else{
        return(
            <li style={{color:"green",listStyleType:"none"}}>All the Best for next task</li>
        )
    }
   
}