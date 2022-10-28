import React from 'react'
import Row from './Row'

const Table = ({exercise}) => {
  return (
    <table>
        <thead>
        <tr>
            <th class="table_header" scope="col">Name</th>
            <th class="table_header" scope="col">Reps</th>
            <th class="table_header" scope="col">Weight</th>
            <th class="table_header" scope="col">Units</th>
            <th class="table_header" scope="col">Date</th>
            <th class="table_header" scope="col">Edit</th>
            <th class="table_header" scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
          {exercise.map((exercise, i) => 
                    <Row 
                        exercise={exercise} 
                        key={i}
                    />)}  
        </tbody>
    </table>
  )
}

export default Table