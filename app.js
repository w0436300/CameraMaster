import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

app.use(cors());//allow fetch/ axios request from any domin

dotenv.config();

// mongoose.connect('mongodb+srv://w0436300:1231521nscc@cluster0.3rv3jod.mongodb.net/Camera?retryWrites=true&w=majority')
mongoose.connect(process.env.MONGO_DB)
        .then(() => console.log('Connected')) 
        .catch(error => console.log(`Unable to connect: ${error}`)) 

        console.log(process.env.MONGO_DB);


const { Schema } = mongoose;

const cameraSchema = new Schema({
    model: String,
    brand: String,
    film_types: [String], 
    film_size: String,
    release_year: Number,
    features: [String], 
    price: String,
    color: String
})

const Camera = mongoose.model('cameras', cameraSchema); 

app.get('/',(req,res) => {
    res.send('Hello from the Camera app')
})


app.get('/cameras',(req, res) => {
    Camera.find().then(data => res.json(data))
    .catch(error =>{
        console.log(error);
    })
})

app.get('/cameras/:id', (req,res) => {
    Camera.findById(req.params.id)
        .then(camera => {
            if(!camera) {
                return res.status(404).send()
            }

            console.log(`Model: ${camera.model}, Brand: ${camera.brand}`);
            res.json(camera)  
        }) 
        .catch(error => {
            console.log(error);
            if(error.kind == 'ObjectId'){
                res.status(400).send({message: "Inval Id"})
            } else {
                res.status(500).send({message: "Server Error - come back soon"})
            }
           
        })
})


const server = app.listen(process.env.PORT || 3000, (result) => console.log(`listening on port${server.address().port}`))
