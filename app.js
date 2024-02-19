import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

app.use(cors());//allow fetch/ axios request from any domin
app.use(express.json()) 

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
    color: [String],
    img_src:String,
})

const userSchema = new Schema({
    name: String,
    last_name: String,
    email: String,
    registeredAt: Date,
    password:String,
});

const User = mongoose.model('users', userSchema);
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

app.get('/cameras', (req, res) => {
    const query = req.query.query || '';
    let searchCondition = {};

    if (query) {
        searchCondition = {
            $or: [
                { model: { $regex: query, $options: 'i' } }, // Fuzzy matching `model`
                { brand: { $regex: query, $options: 'i' } },  // Fuzzy matching `brand`
                { color : { $regex: query, $options: 'i' } }, 
            ]
        };
    }
    Camera.find(searchCondition).then(data => {
        res.json(data); 
    }).catch(error => {
        console.log(error);
        res.status(500).send({ message: "Server Error - Please come back soon" });
    });
});


app.get('/users', (req, res) => {
    User.find().then(users => res.json(users))
    .catch(error => {
        console.log(error);
        res.status(500).send({ message: "Server Error - Please come back soon" });
    });
});


app.get('/users/:id', (req,res) => {
    User.findById(req.params.id)
        .then(user => {
            if(!user) {
                return res.status(404).send()
            }

            console.log(`email: ${user.email}`);
            res.json(user)  
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

app.post('/cameras', async (req,res) => {
    console.log(req.body);

    const newCamera = new Camera(req.body)

    const saved = await newCamera.save()
    
    res.send(saved)
})

app.post('/users', async (req,res) => {
    console.log(req.body);

    const { email } = req.body;
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(400).send('You already have an Account.');    
    } else {
        const newUser = new User(req.body)

        const saved = await newUser.save()
    
         res.send(saved)
    }

    
})

//delete camera by id
app.delete('/cameras/:id', async (req,res) => {
    try {
        const deletedCamera = await Camera.findByIdAndDelete(req.params.id);
        console.log(deletedCamera);

    if(!deletedCamera){
        return res.status(404).send() //no message...the client shoulf knoe that it was not found
    }
    return res.status(204).send() //success no content
    } catch(err) {
        return res.status(500).json({message:"A server error occured. Try again or comeback later"})
    }
    
})


const server = app.listen(process.env.PORT || 8000, (result) => console.log(`listening on port${server.address().port}`))
