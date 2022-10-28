import React from 'react'

const Row = ({exercise}) => {
  return (
    <>        
    
        <tr>               
            <td>{exercise.name}</td>       
            <td>{exercise.reps}</td>    
            <td>{exercise.weight}</td>    
            <td>{exercise.unit}</td>    
            <td>{exercise.date}</td>       
            <td>Edit</td>       
            <td>Delete</td>                
        </tr>
    </>
  )
}

export default Row