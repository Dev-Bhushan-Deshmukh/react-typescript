import React, { useState } from 'react'
import { List } from '../components/list'
import { Searchbar } from '../components/searchbar'
import { EditForm } from '../components/editform'
export const Home:React.FC = () => {


interface itemStructure{
id:number,
  name:string,
  priority:string,
  status:string,
  start:string,
  end:string


}
let itemList=[{
  name:'ddd',
  priority:'high',
  status:'complete',
  start:'sd',
  end:"sd"
  
  
  
  },
  {
    name:'ss',
    priority:'high',
    status:'complete',
    start:'sd',
    end:"sd"
    
    
    
    },
    {
      name:'qq',
      priority:'high',
      status:'complete',
      start:'sd',
      end:"sd"
      
      
      
      },
      {
        name:'ddwqqq',
        priority:'high',
        status:'complete',
        start:'sds',
        end:"skmk"
        
        
        
        }]

const[items,setItems]=useState<itemStructure[]>([{
  id:1,
  name:'ddd',
  priority:'high',
  status:'complete',
  start:'sd',
  end:"sd"
  
  
  
  },
  {
    id:2,
    name:'ss',
    priority:'high',
    status:'complete',
    start:'sd',
    end:"sd"
    
    
    
    },
    {id:3,
      name:'qq',
      priority:'high',
      status:'complete',
      start:'sd',
      end:"sd"
      
      
      
      },
      {
        id:4,
        name:'ddwqqq',
        priority:'high',
        status:'complete',
        start:'sds',
        end:"skmk"
        
        
        
        }])

const[selectedItem,setSelectItem]=useState<itemStructure|undefined>()



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
{selectedItem?.id}
<List items={items} setSelectItem={setSelectItem}  />
<EditForm selectedItem={selectedItem}  items={items} />





    </div>
  )
}
