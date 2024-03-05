import React, { useState } from 'react'
interface itemStructure{
id:number,
  name:string,
  priority:string,
  status:string,
  start:string,
  end:string


}

interface props{
  items:itemStructure[]
  setSelectItem: React.Dispatch<React.SetStateAction<itemStructure | undefined>>

}



export const List:React.FC <props>= ({items,setSelectItem}) => {
  let selectedTask:itemStructure|undefined;
  const getTask=(e: React.SyntheticEvent<EventTarget>)=>{
  
let Id=(e.target as HTMLButtonElement).value
    console.log((e.target as HTMLButtonElement).value)
    selectedTask=items.filter((item)=>item.id==Number(Id))
    console.log(selectedTask)
    setSelectItem(selectedTask)
    }
  return (
    <div  style={{width:'30%',height:'100%',background:'red'}}>
{items.map((item)=>(
<li key={item.name}>{item.name} --  {item.priority}--{item.status}  <button value={item.id} onClick={getTask}>view</button> </li>

))}





    </div>
  )
}
