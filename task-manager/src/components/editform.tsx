import React from 'react'
interface itemStructure{
    id:number,
      name:string,
      priority:string,
      status:string,
      start:string,
      end:string
    
    
    }
    
    interface props{
      items:itemStructure[],
      selectedItem:itemStructure|undefined
    
    }
export const EditForm:React.FC <props>= ({items,selectedItem}) => {

  
  return (
    <div  style={{width:'30%',height:'100%',background:'red'}}>E</div>
  )
}
