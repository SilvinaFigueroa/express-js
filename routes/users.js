
const express = require('express') // importing express
const router = express.Router() // creating a router app 

// routers for users 

router.get('/', (req,res) => {
    res.send('User List')

})

router.get('/new', (req,res) => {
    res.send("User New Form")
    
})

module.exports = router