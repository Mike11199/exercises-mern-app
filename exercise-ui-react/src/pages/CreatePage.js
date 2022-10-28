import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



const CreatePage = () => {

  // INITIALIZE STATE VARIABLES TO EMPTY STRING
  const [name, setName]     = useState('')     
  const [reps, setReps]     = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit]     = useState('')
  const [date, setDate]     = useState('')
 
  const history = useHistory()

  const addExercise = async () => {
    history.push("/")
}

  return (
    <>
    <h2>Edit an exercise by updating the fields below:</h2>
    <form onSubmit={(e) => { e.preventDefault();}}>
    <table>
    <thead>
    <tr>
        <th className="table_header" scope="col">Name</th>
        <th className="table_header" scope="col">Reps</th>
        <th className="table_header" scope="col">Weight</th>
        <th className="table_header" scope="col">Units</th>
        <th className="table_header" scope="col">Date</th>        
    </tr>
    </thead>
    <tr>               
        <td>                  
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} 
                id="title" 
              />
        </td>    
        <td>                  
              <input
                type="text"
                value={reps}
                onChange={e => setReps(e.target.value)} 
                id="title" 
              />
        </td>      
        <td>                  
              <input
                type="text"
                value={weight}
                onChange={e => setWeight(e.target.value)} 
                id="title" 
              />
        </td>      
        <td>                  
              <input
                type="text"
                value={unit}
                onChange={e => setUnit(e.target.value)} 
                id="title" 
              />
        </td>      
        <td>                  
              <input
                type="text"
                value={date.substring(0,10)}
                onChange={e => setDate(e.target.value)} 
                id="title" 
              />
        </td>         
    </tr>
    </table>   
            <button onClick={addExercise} id="submit">
              Save
            </button>         
        </form>
</>
  )
}

export default CreatePage