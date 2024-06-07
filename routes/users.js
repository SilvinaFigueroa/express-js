
const express = require('express') // importing express
const router = express.Router() // creating a router app 

// every single router will use the logger function
router.use(logger)

// routers for users 

router.get('/', (req, res) => {
    res.send('User List')

})

router.get('/new', (req, res) => {
    res.send("User New Form")

})

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
        res.send(`User Get id ${req.params.id}`)
        console.log(req.users)
    }).put((req, res) => {
        res.send(`User Get id ${req.params.id}`)
    }).delete((req, res) => {
        res.send(`User Get id ${req.params.id}`)
    })


const users = [{name : "Silvina"}, {name: "Alejandra"}]

// this function will run everytime that finds a params that matchs the named passed
router.param("id", (req, res, next, id) => {
    req.users = users[id]
    next() // If we don't add the function Next(), the code will continue running 
    // we need to tell the programm to run the NEXT code
})


function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router