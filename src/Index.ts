import express from "express"
import bodyParser from "body-parser"
import {productsRouters} from "./routers/productsRouters";
import {addressesRouters} from "./routers/addressesRouters";

export const app = express()
const port = process.env.PORT || 3000


const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

const parserMiddleWear = bodyParser({});
app.use(parserMiddleWear)

app.use("/products",productsRouters);
app.use("/addresses",addressesRouters);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})