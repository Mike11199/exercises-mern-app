import React from 'react'
import { useHistory } from "react-router-dom"
import { useState } from 'react'


const EditPage = ({exercise}) => {

  // SET STATE VARIABLES FROM MOVIE OBJECT PASSED INTO THE FUNCTION
  const [name, setName]     = useState(exercise.name)     
  const [reps, setReps]     = useState(exercise.reps)
  const [weight, setWeight] = useState(exercise.weight)
  const [unit, setUnit]     = useState(exercise.unit)
  const [date, setDate]     = useState(exercise.date)
 
  const history = useHistory()


  const editExercise = async () => {

    if (!name || !reps || !weight || !unit || !date){
      alert("Please provide all values!")
      return
    }   
    if (reps <= 0 || weight <=0 ){
      alert("Please ensure weights and reps are numbers above 0.")
      return
    }

    const response = await fetch(`/exercises/${exercise._id}`, 
    {
      method: 'PUT',

      body: JSON.stringify({ 
          name,
          reps,
          weight,
          unit,
          date,
      }),


      headers: {'Content-Type': 'application/json',},
    });

    if (response.status === 200) {
        alert("Successfully edited the exercise!");
    } else {
    const errMessage = await response.json();
        alert(`Failed to update the exercise. Status ${response.status}. ${errMessage.Error}`);
    }


    history.push("/")
}

  return (
    <>
        <h2>Edit an Exercise</h2>
        <p>Use this page to update an individual exercise and save the change to the MongoDB database.</p>
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
                  />
            </td>    
            <td>                  
                  <input
                    type="number"
                    value={reps}
                    onChange={e => setReps(e.target.value)} 
                    id="title" 
                  />
            </td>      
            <td>                  
                  <input
                    type="number"
                    value={weight}
                    onChange={e => setWeight(e.target.value)} 
                    id="title" 
                  />
            </td>      
            <td>                  
            <select
                type="text"
                value={unit}
                onChange={e => setUnit(e.target.value)} 
                id="title" 
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
                  />
            </td>         
        </tr>
        </tbody>
        </table>   
                <button onClick={editExercise} id="submit">
                  Save
                </button>         
            </form>
    </>
  )
}

export default EditPage