import React from 'react'
import { GrEdit } from "react-icons/gr"
import { RiDeleteBin7Fill } from "react-icons/ri"

const Row = ({exercise}) => {
  return (
    <>        
    
        <tr>               
            <td>{exercise.name}</td>       
            <td>{exercise.reps}</td>    
            <td>{exercise.weight}</td>    
            <td>{exercise.unit}</td>    
            <td>{exercise.date}</td>       
            <td className='edit_table_cell'><GrEdit /></td>       
            <td className='delete_table_cell'><RiDeleteBin7Fill style={{color:'black'}}/></td>                
        </tr>
    </>
  )
}

export default Row