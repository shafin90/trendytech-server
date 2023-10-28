const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://shafin:shafin@cluster0.yfo5lts.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {

    const blogCollection = client.db("Trendytech").collection('blogInfo');

    app.get('/blogInfo', async (req, res) => {
      const cursor = blogCollection.find()
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/blogInfo/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const blog = await blogCollection.findOne(query);
      res.send(blog);
    })

    app.post('/blog', async (req, res) => {
      const blog = req.body;
      const result = await userCollection.insertOne(user);
      array.push(blog);
      res.send(result);
    });

    // app.put('/blog/:id', async (req, res) => {
    //   const id = req.params.id;
    //   const blog = req.body;
    // //   console.log(id, user);

    //   const filter = { _id: new ObjectId(id) }
    //   const options = { upsert: true }
    //   const updatedUser = {
    //     $set: {
    //       price: user.price,
    //       available_quantity: user.available_quantity,
    //       detail_description: user.detail_description
    //     }
    //   }

    //   const result = await userCollection.updateOne(filter, updatedUser, options);
    //   res.send(result);

    // })



    app.delete('/blog/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      array = array.filter(item => item._id.toString() !== new ObjectId(id).toString());
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })


    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`${port}`)
})


