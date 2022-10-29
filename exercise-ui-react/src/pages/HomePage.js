import React from 'react'
import Table from '../components/Table'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = ({setExercise}) => {

  const history = useHistory()

  const [exercises, setExercises] = useState([])  
    
  // Load all exercises once on initial page rendering - due to empty dependency array
    useEffect(() => {
      loadMovies()
    }, [])


  // RETRIEVE the list of movies
  const loadMovies = async () => {
    const response = await fetch('/exercises')
    const exercises = await response.json()
    setExercises(exercises)                     //set exercises array from server to state array
  } 
  
  // UPDATE an exercise --> to be passed down component tree to row component
  const onEditExercise = async (exercise) => {
    setExercise(exercise)        // set state variable (this will be called from the row component)
    history.push("/edit")        // navigate user to edit page
}

  // DELETE an exercise  --> to be passed down component tree to row component
  const onDeleteExercise= async _id => {
    
    //send request to delete movie (this will be called when clicking on icon)
    const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' })
    
    //if deleted, send a GET request to retrieve all exercises again and reset the state to trigger another render of the table
    if (response.status === 204) {      
        const getResponse = await fetch('/exercises')
        const exercises = await getResponse.json()
        setExercises(exercises)    
    } 
    
    else {
        console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
    }
  }



  return (
    <>
    <h1>Exercises Table</h1>
    <p>View your saved exercise history below.  Click the trash icon to delete an exercise, or pencil icon to edit an exercise.</p>
    <Table 
      exercise={exercises}
      onEdit={onEditExercise} 
      onDelete={onDeleteExercise}  
    />
    </>
  )
}

export default HomePage