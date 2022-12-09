<h2>MERN Exercise App Portfolio Project - CS290 Web Development</h2>

Full stack MERN project, exercise tracker developed for CS290 as a portfolio project.  Per the class, this project is allowed to be posted to a public GitHub repo after the quarter ends.  Project demonstrates a view layer by react, model layer handled by Mongoose on the server side, and controller layer using Node/Express to handle requests by the front end.

This project must be downloaded and run with "npm start" on one terminal, to run the front-end on localhost:8000, and another terminal with "npm start" to run the server on localhost:3000. 


<br/>

<h2>Concepts Used</h2>

-REST APIs via Express.js in the controller layer, which communicates with the model layer to update the MongoDB database
-Manual testing via an HTTP file as opposed to Postman to verify functionality
-React hooks such as useState, useEffect, and useHistory to navigate and pass props to React components
-Fetch API used on the front-end as opposed to Axios to send various HTTP requests to the server via promises
-React router to ensure a single-page application (SPA) is used to minimize server requests, and give the illusion of navigating to new pages
-React Components for table, rows, navigation that are dynamically rendered and re-rendered as necessary

<br/>

<h2>GIFs</h2>



Front end sends requests to the Express server via Fetch API.  REST APIs on the Express server implemented by controllers connect with the Model layer to update the MongoDB collection/database for the exercises.

<br/>

![MERN_Exercise_Tracker_2](https://user-images.githubusercontent.com/91037796/198755149-ef6cd095-9a8e-41ee-82b9-bea32f456076.gif)

<br/>
Delete and Edit functionality via react-icons.  Sends PUT and DELETE requests via REST APIs to the Express server.
<br/>
<br/>

![MERN_Exercise_Tracker](https://user-images.githubusercontent.com/91037796/198755045-1404cd71-40a5-45d1-911f-f548adf04cef.gif)



<br/>

<h2>REST APIs</h2>


-GET request for all exercises
```js
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
```


-GET request for a specific exercise
```js
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
```

PUT request to create a new exericse
```js
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
```



<h2>Screenshots</h2>

<br/>

Home Page

![image](https://user-images.githubusercontent.com/91037796/198750798-c9fe7ffd-fe7a-4e05-93da-811ff8dbbaea.png)

Edit Page
<br/>

![image](https://user-images.githubusercontent.com/91037796/198751123-ac14c1f4-f129-41c6-b152-17040085d083.png)

Add Page
<br/>

![image](https://user-images.githubusercontent.com/91037796/198751194-20d70270-1256-49c6-a4f3-ff2cbfbb72c1.png)


MongoDB Collection of Exercises
<br/>

![image](https://user-images.githubusercontent.com/91037796/198755567-95cdea63-2f4f-436f-8a60-10903c5c471e.png)
