import React, { SyntheticEvent, useEffect, useState } from "react";
interface itemStructure {
  _id: string;
  task: string;
  priority: string;
  status: string;
  start: string;
  end: string;
  __v: number | string;
}
interface apiRequest {

  task: string|undefined;
  priority:string|undefined;
  status:string|undefined;
  start:string|undefined;
  end:string|undefined;

}

interface props {
  items: itemStructure[];
  selectedItem: itemStructure | undefined;
  setSelectItem:React.Dispatch<React.SetStateAction<itemStructure | undefined>>
  setTrigger:React.Dispatch<React.SetStateAction<boolean>>
}
export const EditForm: React.FC<props> = ({ items, selectedItem,setSelectItem,setTrigger }) => {

  const[task_,setTask_]=useState<string|undefined>()
  const[priority_,setPriority_]=useState<string|undefined>()
  const[status_,setStatus_]=useState<string|undefined>()
  const[start_,setStart_]=useState<string|undefined>()
  const[end_,setEnd_]=useState<string|undefined>()
  useEffect(()=>{
    setTask_(selectedItem?.task)
    setPriority_(selectedItem?.priority)
    setStatus_(selectedItem?.status)
    setStart_(selectedItem?.start)
    setEnd_(selectedItem?.end)
  },[selectedItem])



const updateTask=async(e:SyntheticEvent)=>{
let data:apiRequest={
  task: task_,
  priority: priority_,
  status: status_,
  start: start_,
  end: end_,
}


  let response=await fetch(`http://localhost:8080/update_one/${(e.target as HTMLButtonElement).value}`,{
method:'PUT',
headers: {
  "Content-Type": "application/json",
  
},
body: JSON.stringify(data),


  })
  let response_json= await response.json()
  console.log('updated ',response_json)

  setTask_(response_json?.task)
    setPriority_(response_json?.priority)
    setStatus_(response_json?.status)
    setStart_(response_json?.start)
    setEnd_(response_json?.end)



    setTrigger(prev=>(!prev))
}

const deleteTask=async(e:SyntheticEvent)=>{


  let response=await fetch(`http://localhost:8080/delete_one/${(e.target as HTMLButtonElement).value}`,{
    method:'DELETE'
  })
  let response_json= await response.json()
  console.log('deleted ',response_json)

  setTrigger(prev=>(!prev))
  setTask_(undefined)
    setPriority_(undefined)
    setStatus_(undefined)
    setStart_(undefined)
    setEnd_(undefined)




}






  return (
    <div
      style={{
        width: "30%",
        height: "100%",
        background: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      E<input value={selectedItem?._id} type="text" /> 
      <input value= {task_} onChange={(e)=>setTask_((e.target as HTMLInputElement).value)} type="text"/>
      <input value= {priority_} onChange={(e)=>setPriority_((e.target as HTMLInputElement).value)}  type="text"/>
      <input value={status_} onChange={(e)=>setStatus_((e.target as HTMLInputElement).value)}  type="text"/> 
      <input value={start_} onChange={(e)=>setStart_((e.target as HTMLInputElement).value)}  type="text"/> 
      <input value= {end_} onChange={(e)=>setEnd_((e.target as HTMLInputElement).value)}  type="text"/>
      <button value={selectedItem?._id} onClick={updateTask}>Update</button>
      <button value={selectedItem?._id} onClick={deleteTask}>Delete</button>
    </div>
  );
};
