const express = require("express")
const mongoose = require("mongoose")
const db = require("./dataBaseConfig.js")

const cors = require("cors")
const dotenv = require("dotenv")


dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "100kb"}))
app.use(express.static('uploads'))
app.use(cors())

db().then(async () => {

   
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })


    const productRoute = require('./routes/productRoute.js')

    const categoryRoute = require('./routes/categoryRoute.js')

    const employeeRoute = require('./routes/addEmployeeRoute.js')

    const addressRoute = require('./routes/addAddressRoute.js')

    const administratorRoute = require('./routes/administratorRoute.js')

    const addressCategoryRoute = require('./routes/employeeAddressCategoryRoute.js')


    const administratorAddressRoute = require('./routes/administratorAddressRoute.js')

    app.use('/api', productRoute)


    app.use('/api', categoryRoute)


    app.use('/api', employeeRoute)


    app.use('/api', administratorRoute)


    app.use('/api', addressRoute)


    app.use('/api', addressCategoryRoute)

    app.use('/api', administratorAddressRoute)
})
.catch(err => console.log(err))