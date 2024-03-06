import React, { useEffect, useState } from 'react'
import { List } from '../components/list'
import { Searchbar } from '../components/searchbar'
import { EditForm } from '../components/editform'
export const Home:React.FC = () => {


interface itemStructure{
  _id:string,
  task:string,
  priority:string,
  status:string,
  start:string,
  end:string,
  __v:number|string


}

const[items,setItems]=useState<itemStructure[]>([])

const[selectedItem,setSelectItem]=useState<itemStructure|undefined>()

const[trigger,setTrigger]=useState<boolean>(true)
const  fetchData=async()=> {
  let response=await fetch('http://localhost:8080/')
  let response_json= await response.json()
  console.log('ss',response_json)

  setItems(response_json)
}

useEffect(()=>{


fetchData()






},[trigger])
// setItems(itemList)

  return (
    <div   style={{
      background:"black",
      height:'100vh',
      display:'flex',
      alignItems:'center',
      flexDirection:'row',
      color:'white',
      justifyContent:'space-evenly'
    }}>
{/* {selectedItem?.id} */}
<List items={items} setSelectItem={setSelectItem}  />
<EditForm selectedItem={selectedItem} setTrigger={setTrigger}  items={items} setSelectItem={setSelectItem}/>





    </div>
  )
}
