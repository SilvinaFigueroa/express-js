
const express = require('express') // importing express
const router = express.Router() // creating a router app 

// every single router will use the logger function
router.use(logger)
let users = [{firstName : "Silvina"}, {firstName: "Alejandra"}]

// routers for users 

router.get('/', (req, res) => {
    const name = req.query.name
    res.send(`User in query param ${name}`)
})

// render the view users/new
router.get("/new",(req,res)=> {
    res.render("users/new")
})


router.post('/', (req, res) => {
    const isValid = true
    if(isValid){
        users.push({firstName : req.body.firstName})
        res.redirect(`users/${users.length - 1}`)
    }
    else {
    console.log("Error")
    res.render("users/new", {firstName : req.body.firstName})
    }
})

// router.post("/",(req,res)=> {
//     res.send("Create User")
// })

// use the colon to indicate dynamic parameter
// anything that comes after the colon will become the parameter
// router.get('/:id', (req, res) => {
//     res.send(`User Get id ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`User Get id ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`User Get id ${req.params.id}`)

// })


// This version nest all the methods for the same path, avoiding repetition

router.route('/:id')
    .get((req, res) => {
        const userId = req.params.id
        console.log(userId)
        res.send(`User Created id ${userId}`)
        console.log(req.users)
    }).put((req, res) => {
        res.send(`User Get id ${req.params.id}`)
    }).delete((req, res) => {   
        res.send(`User Get id ${req.params.id}`)
    })



// // this function will run everytime that finds a params that matchs the named passed
// router.param("id", (req, res, next, id) => {
//     req.users = users[id]
//     next() // If we don't add the function Next(), the code will continue running 
//     // we need to tell the programm to run the NEXT code
// })


function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router