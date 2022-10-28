// Import dependencies.
import mongoose from 'mongoose'
import 'dotenv/config'

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
)

const db = mongoose.connection

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' })
    } else  {
        console.log('Successfully connected to MongoDB Exercises database collection using Mongoose!')
    }
})

// SCHEMA: Define the collection's schema.
// const movieSchema = mongoose.Schema({
// 	title: { type: String, required: true },
// 	year: { type: Number, required: true },
// 	language: { type: String, required: true }
// });

// Compile the model from the schema.
// const Movie = mongoose.model("Movie", movieSchema);
