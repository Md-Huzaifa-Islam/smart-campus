const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

//middleware

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nj1gb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const usersCollection = client.db("campusDB").collection("users");
    const menuCollection = client.db("campusDB").collection("menu");
    const orderCollection = client.db("campusDB").collection("orders");

    //Auth related api
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    app.get("/logout", async (req, res) => {
      try {
        res
          .clearCookie("token", {
            maxAge: 0,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          })
          .send({ success: true });
      } catch (err) {
        res.status(500).send(err);
      }
    });

    // here make all the api routes
    // Get all users with role == "vendor"
    app.get("/users", async (req, res) => {
      try {
        const users = await usersCollection.find({ role: "vendor" }).toArray();
        res.send(users);
      } catch (err) {
        res.status(500).send({ message: "Failed to fetch users", error: err });
      }
    });
    // Add a new user
    app.post("/users", async (req, res) => {
      try {
        const user = req.body;
        const result = await usersCollection.insertOne(user);
        res.send(result);
      } catch (err) {
        res.status(500).send({ message: "Failed to add user", error: err });
      }
    });
    // Get a single user by _id
    app.get("/users/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const user = await usersCollection.findOne({ _id: new ObjectId(id) });
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }
        res.send(user);
      } catch (err) {
        res.status(500).send({ message: "Failed to fetch user", error: err });
      }
    });
    // Get a single user by email
    app.get("/users/email/:email", async (req, res) => {
      try {
        const email = req.params.email;
        if (!email) {
          return res
            .status(400)
            .send({ message: "Email query parameter is required" });
        }
        const user = await usersCollection.findOne({ email: email });
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }
        res.send(user);
      } catch (err) {
        res.status(500).send({ message: "Failed to fetch user", error: err });
      }
    });

    // all the order related api
    // Add a new order
    app.put("/orders", async (req, res) => {
      try {
        const order = req.body;
        const result = await orderCollection.insertOne(order);
        res.send(result);
      } catch (err) {
        res.status(500).send({ message: "Failed to add order", error: err });
      }
    });

    app.patch("/orders/:id/status", async (req, res) => {
      try {
        const id = req.params.id;
        const { status } = req.body;
        if (!status) {
          return res
            .status(400)
            .send({ message: "Status is required in payload" });
        }
        const result = await orderCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { status: status } }
        );
        res.send(result);
      } catch (err) {
        res
          .status(500)
          .send({ message: "Failed to update order status", error: err });
      }
    });
    // Get all orders by buyer_id
    app.get("/orders/buyer/:id", async (req, res) => {
      try {
        const buyerId = req.params.id;
        const orders = await orderCollection
          .find({ buyer_id: buyerId })
          .toArray();
        res.send(orders);
      } catch (err) {
        res
          .status(500)
          .send({ message: "Failed to fetch orders by buyer_id", error: err });
      }
    });

    // Get all orders by vendor_id
    app.get("/orders/vendor/:id", async (req, res) => {
      try {
        const vendorId = req.params.id;
        const orders = await orderCollection
          .find({ vendor_id: vendorId })
          .toArray();
        res.send(orders);
      } catch (err) {
        res
          .status(500)
          .send({ message: "Failed to fetch orders by vendor_id", error: err });
      }
    });

    // Get all orders by menu_id
    app.get("/orders/menu/:id", async (req, res) => {
      try {
        const menuId = req.params.id;
        const orders = await orderCollection
          .find({ menu_id: menuId })
          .toArray();
        res.send(orders);
      } catch (err) {
        res
          .status(500)
          .send({ message: "Failed to fetch orders by menu_id", error: err });
      }
    });

    // all menu related api are here
    // Get all menu items by vendor_id
    app.get("/menus/:id", async (req, res) => {
      try {
        const vendorId = req.params.id;
        const menus = await menuCollection
          .find({ vendor_id: vendorId })
          .toArray();
        res.send(menus);
      } catch (err) {
        res
          .status(500)
          .send({ message: "Failed to fetch menus by vendor_id", error: err });
      }
    });

    // Add a new menu item
    app.post("/menus", async (req, res) => {
      try {
        const menu = req.body;
        const result = await menuCollection.insertOne(menu);
        res.send(result);
      } catch (err) {
        res.status(500).send({ message: "Failed to add menu", error: err });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("This is the coffee server page");
});

app.listen(port, () => {
  console.log(`running port is ${port}`);
});
