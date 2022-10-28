import React from 'react'
import Row from './Row'

const Table = ({exercise, onDelete, onEdit }) => {
  return (
    <table>
        <thead>
        <tr>
            <th className="table_header" scope="col">Name</th>
            <th className="table_header" scope="col">Reps</th>
            <th className="table_header" scope="col">Weight</th>
            <th className="table_header" scope="col">Units</th>
            <th className="table_header" scope="col">Date</th>
            <th className="table_header" scope="col">Edit</th>
            <th className="table_header" scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
          {exercise.map((exercise, i) => 
                    <Row 
                        exercise={exercise} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}  
        </tbody>
    </table>
  )
}

export default Table