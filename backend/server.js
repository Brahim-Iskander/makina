import express from 'express';
import bodyParser from 'body-parser';
import Machine from './models/machine.model.js'; // Adjust the path as necessary
import cors from 'cors';
import connectToMongo from './config/monogoConnection.js'; // Adjust the path as necessary
import admin from './models/admin.model.js'; // Adjust the path as necessary
const port = 3000;
const app= express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
connectToMongo()





app.post('/inputs', (req, res) => {
  const { title, description, img } = req.body;
  console.log('Received data: ');
  const machine = new Machine({
    title,
    description,
    img
  });
  machine.save()
    .then(() => {
      console.log('Data saved successfully');
    })
    .catch((error) => {
      console.log('Error saving data:');
      
    });

}
);

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }
  try{
    const user = await admin.findOne({ email});
    if (!user) {
      console.log('Invalid email');
      return res.status(401).send('Invalid email ');
    }
    if (!user || user.password !== password) {
      console.log('Invalid password');
      return res.status(401).send('Invalid email or password');
    }
    else {
      console.log('Login successful');
      res.status(200).send('Login successful');
    }
  
  }
  catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal server error');
  }}


)

app.get('/inputs', (req, res) => {
  const machines = Machine.find({})
    .then((machines) => {
        console.log('Data fetched successfully');
        res.status(200).json(machines);
    })
    .catch((error) => {
      console.log('Error fetching data:');
      res.status(500).send('Error fetching data');
    });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}
);