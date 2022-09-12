const express = require('express')
require('dotenv').config()
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000
const router = require('./routes/router')

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const errorMiddleware = require('./middlewares/errorMiddleware')

const swaggerConfig = {

    definition: {
        openapi: "3.0.0",
        info: {
        title: "Notes",
        version: "1.0.0",
        description: "Тестовое задание Backend",
        },
        servers: [
        {
            url: `${process.env.API_URL}`,
        },
        ],
    },

    apis: ["./docs/*/*.js", "./docs/*.js"],
};

const swaggerSpecs = swaggerJsDoc(swaggerConfig);

const app = express()
app.use(cookieParser());
app.use(cors())
app.use(express.json())

//!  http://localhost:5000/docs

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use('/', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        app.listen(PORT, ()=>console.log(`App has been started on port: ${PORT}`))
    } catch (e) {
        console.log(`Server error: ${e.message}` )
        process.exit(1)
    }
}

start()