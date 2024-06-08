const express = require('express')  // requiere the express library installed
const app = express() // call express as a function to set up the server

// name of the setting view engine, view engine: ejs
app.set("view engine", "ejs")
// express for static files 
app.use(express.static("public"))

// Middleware to access the data submited in a form
app.use(express.urlencoded({extended: true}))

// access json data and allow you to parse it from the body
app.use(express.json())


// app.use(logger)

// // create routes - Multiples functions can be passed on the app.method
// app.get("/", (req, res) => {  // these are names conventions to request and response, but you can change them
//     console.log('Here')
//     // res.send('Hi') // send is used mostly for testing
//     // res.sendStatus(400) // this is displayed directly to the user with Internal Server Error (500)
//     // res.status(500).send('Hi') // this send a console error 500 and display Hi to the user
//     // res.status(500).json({message :" Error"}) // Console error and a json back to the user - Useful for API's
//     // res.download("server.js") // download a file!
    
//     res.render("index", { text: "pulling text from server.js to index.html" })

// })



const userRouter = require('./routes/users')

// link the app with the router
app.use("/users",userRouter) // pass path, router



app.listen(3000) // add a port to the server for listening
