import 'dotenv/config'
import express from 'express'
import * as exercises from './exercise-model.mjs'
import moment from 'moment' //use this to test if date valid per test request-complex request 15

const PORT = process.env.PORT
const app = express()
app.use(express.json())

// CREATE Exercise Controller
app.post ('/exercises', async (req,res) => {         
    try {
        const {name, reps, weight, unit, date} = req.body 

        if ( !moment(date).isValid() ){
            return res.status(400).json({ error: 'Error!  Invalid Date!' }).send //return 400 bad request
        }

        if (!name || !reps || !weight || !unit || !date){
            return res.status(400).json({ error: 'Error!  Please provide all values when creating a new exercise.' }).send //return 400 bad request
        }   
        if (reps <= 0 || weight <=0 ){
            return res.status(400).json({ error: 'Error!  Please ensure reps and weight are numbers above or equal to zero' }).send //return 400 bad request
        }
        else{
            try {
                const createdExercise = await exercises.createExercise(
                    name, 
                    reps, 
                    weight,
                    unit,
                    date,
                    )   
                res.contentType('application/json')
                res.status(201).json(createdExercise).send  //return status code 201 for created and JSON object of exercise
            } catch (error) {
                    console.log(error);
                    return res.status(400).json({ error: 'Failed to create the exercise.' }).send //return 400 bad request
            }
        }
    } catch (error) {
        return res.status(400).json({ error: 'Error!  Please provide all values when creating a new exercise.'  }).send //return 400 bad request
    }     

})



// RETRIEVE ALL Exercises Controller
app.get ('/exercises', async (req,res) => {         
    try {
        const result = await exercises.findExercises()
        return res.status(200).send(result)
    } catch (error) {
        console.log(error);
        res.contentType('application/json')
        return res.status(404).json({ error: 'Failed to retrieve the exercises.' }) //return 404 not found
    }

})


// RETRIEVE by ID Exercises Controller
app.get('/exercises/:_id', async (req, res) => {
    const exerciseID = req.params._id  //PATH PARAMETER; no req body
    try {
        const exercise = await exercises.findExerciseById(exerciseID)    
        if (exercise !== null) {
            res.contentType('application/json')
            return res.status(200).json(exercise)
        } else {
            res.contentType('application/json')
            return res.status(404).json({ Error: 'No exercise matching this ID was found.'})
        }         
     } catch (error){
        console.error(error);
        return res.send({ error: 'Request to delete a document failed' })
     }    
})


// UPDATE controller ************************************
app.put('/exercises/:_id', async (req, res) => {
    
    try {
        const {name, reps, weight, unit, date} = req.body 

        if ( !moment(date).isValid() ){
            return res.status(400).json({ error: 'Error!  Invalid Date!' }).send //return 400 bad request
        }

        if (!name || !reps || !weight || !unit || !date){
            return res.status(400).json({ error: 'Error!  Please provide all values when creating a new exercise.' }).send //return 400 bad request
        }
        if (reps <= 0 || weight <=0 ){
            return res.status(400).json({ error: 'Error!  Please ensure reps and weight are numbers above or equal to zero' }).send //return 400 bad request
        }
        if (typeof reps === "string" || typeof weight === "string" ){
            return res.status(400).json({ error: 'Error!  Please ensure reps and weight are numbers above or equal to zero' }).send //return 400 bad request
        }



        else{
            const numExercisesUpdated = await exercises.replaceExerciseByID(
                req.params._id,                                             //PATH PARAMETER
                name,                                                       //Request Body properties 
                reps, 
                weight,
                unit,
                date
            )
            if (numExercisesUpdated === 1) {                                // should always be one as unique ID
                res.status(200).json({ 
                    _id: req.params._id, 
                    name,                                                   //Request Body properties 
                    reps, 
                    weight,
                    unit,
                    date,
                }).send
            } else {
                return res.status(404).json({ Error: 'Exercise not found by provided ID!' }).send
        }    
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ Error: 'Request to update an exercise failed!' }).send
    }
})



// DELETE Controller ******************************
app.delete('/exercises/:_id', async (req, res) => {
   try {
        const deletedCount = await exercises.deleteExerciseById(req.params._id)        //PATH PARAMETER; no req body       
        if (deletedCount === 1) {
            return res.status(204).send()
        } else {
            return res.status(404).json({ Error: 'Exercise not found by provided ID!' })
        }   
   } catch (error) {
        console.error(error)
        return res.send({ error: 'Request to delete an exercise failed!' })
   }
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})