import React from 'react'
import Row from './Row'

const Table = ({exercise}) => {
  return (
    <table>
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Reps</th>
            <th scope="col">Weight</th>
            <th scope="col">Units</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
          <Row exercise={exercise} />             
        </tbody>
    </table>
  )
}

export default Table