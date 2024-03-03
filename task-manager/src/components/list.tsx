import React, { useState } from 'react'


interface filterItem{

item?:string|number

}

export const List:React.FC <filterItem>= ({item}:filterItem) => {
console.log(item)
const[tasks,setTask]=useState<{task:string,priority:string,rank:number}[]>([{task:"task1",priority:"high",rank:1},{task:"task1",priority:"high",rank:2},
{task:"task1",priority:"high",rank:3},{task:"task1",priority:"high",rank:4}])
  return (
    <div>

{tasks.map((i,index)=>( <li key={index}>{i.task} {i.rank }{i.rank}</li>))}




    </div>
  )
}
