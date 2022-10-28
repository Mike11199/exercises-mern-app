import React from 'react'
import { GrEdit } from "react-icons/gr"
import { RiDeleteBin7Fill } from "react-icons/ri"

const Row = ({exercise, onEdit, onDelete }) => {
  return (
    <>        
    
        <tr>               
            <td>{exercise.name}</td>       
            <td>{exercise.reps}</td>    
            <td>{exercise.weight}</td>    
            <td>{exercise.unit}</td>    
            {/* per Canvas used substring to truncate date */}
            <td>{exercise.date.substring(0,10)}</td>    
            <td className='edit_table_cell'><GrEdit onClick={() => onEdit(exercise)}/></td>       
            <td className='delete_table_cell'><RiDeleteBin7Fill style={{color:'black'}} onClick={() => onDelete(exercise._id)}/></td>                
        </tr>
    </>
  )
}

export default Row