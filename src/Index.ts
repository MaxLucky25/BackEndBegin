import express from "express"
import {Request,Response} from "express";
import bodyParser from "body-parser"
import {productsRouters} from "./routers/productsRouters";
import {addressesRouters} from "./routers/addressesRouters";
import { runDb } from "./repositories/db";

export const app = express()
const port = process.env.PORT || 3000

const parserMiddleWear = bodyParser.json({});
app.use(parserMiddleWear)



app.get("/", (req: Request, res: Response) => {

    res.send("It-incubator! I could make it");
})

app.use("/products",productsRouters);
app.use("/addresses",addressesRouters);

const startApp = async () => {
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

startApp()