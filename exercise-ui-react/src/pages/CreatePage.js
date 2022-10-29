import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



const CreatePage = () => {

  // INITIALIZE STATE VARIABLES TO EMPTY STRING
  const [name, setName]     = useState('')     
  const [reps, setReps]     = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit]     = useState('kgs')
  const [date, setDate]     = useState('')
 
  const history = useHistory()

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date }

    if (!name || !reps || !weight || !unit || !date){
      alert("Please provide all values!")
      return
    }   
    if (reps <= 0 || weight <=0 ){
      alert("Please ensure weights and reps are numbers above 0.")
      return
    }
    const response = await fetch('/exercises', {
        method: 'post',
        body: JSON.stringify(newExercise),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if(response.status === 201){
        alert("Successfully added the exercise!");
    } else {
        alert(`Failed to add movie, status code = ${response.status}`);
    }
    history.push("/");
}

  return (
    <>
    <h2>Add New Exercise</h2>
    <p>Add a new exercise to the MongoDB database by updating the fields below, then click the "Save" button to send an HTTP request to the server's REST API.</p>
    <form onSubmit={(e) => { e.preventDefault();}} className="edit_add_form">
    <table>
    <thead>
        <th className="table_header" scope="col">Name</th>
        <th className="table_header" scope="col">Reps</th>
        <th className="table_header" scope="col">Weight</th>
        <th className="table_header" scope="col">Units</th>
        <th className="table_header" scope="col">Date</th>        
    </thead>
    <tbody>
    <tr className="edit_add_row">               
        <td>                  
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} 
                id="title" 
                required
              />
        </td>    
        <td>                  
              <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)} 
                id="title" 
                required
              />
        </td>      
        <td>                  
              <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)} 
                id="title" 
                required
              />
        </td>      
        <td>                  
              <select
                type="text"
                value={unit}
                onChange={e => setUnit(e.target.value)} 
                id="title" 
                required
              >              
              <option>kgs</option>
              <option>lbs</option>
              <option>miles</option>

              </select>
        </td>      
        <td>                  
              <input
                type="date"
                value={date.substring(0,10)}
                onChange={e => setDate(e.target.value)} 
                id="title" 
                required
              />
        </td>         
    </tr>
    </tbody>
    </table>   
            <button onClick={addExercise} id="submit">
              Save
            </button>         
    </form>
</>
  )
}

export default CreatePage