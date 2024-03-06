import React, { useState } from 'react'
interface itemStructure{
  _id:string,
  task:string,
  priority:string,
  status:string,
  start:string,
  end:string,
  __v:number|string

}

  

interface props{
  items:itemStructure[]
  setSelectItem: React.Dispatch<React.SetStateAction<itemStructure | undefined>>

}



export const List:React.FC <props>= ({items,setSelectItem}) => {

  const getTask=(e: React.SyntheticEvent<EventTarget>)=>{
  let Id:string;
 Id=(e.target as HTMLButtonElement).value
    console.log((e.target as HTMLButtonElement).value)
   let  selectedTask=items.filter((item)=>item._id==Id)
    console.log(selectedTask)
    setSelectItem(selectedTask[0])
    }
  return (
    <div  style={{width:'30%',height:'100%',background:'red'}}>
{items.map((item)=>(
<li key={item.task}>{item.task} --  {item.priority}--{item.status}  <button value={item._id} onClick={getTask}>view</button> </li>

))}





    </div>
  )
}
