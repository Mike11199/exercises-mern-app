import React from 'react'
import Table from '../components/Table'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {

  const history = useHistory()

  const [exercises, setExercises] = useState([])
  
  
  const sampleExercise = {
    "name": "Squat",
    "reps": 10,
    "weight": 30,
    "unit": "lbs",
    "date": "01-18-22"
}

  return (
    <>
    <p>Home Page</p>   
    <Table exercise={sampleExercise} />
    </>
  )
}

export default HomePage