import express, {NextFunction} from "express"
import {Request,Response} from "express";
import bodyParser from "body-parser"
import {productsRouters} from "./routers/productsRouters";
import {addressesRouters} from "./routers/addressesRouters";

export const app = express()
const port = process.env.PORT || 3000

const parserMiddleWear = bodyParser({});
app.use(parserMiddleWear)



app.get("/", (req: Request, res: Response) => {

    res.send("It-incubator! I could make it");
})

app.use("/products",productsRouters);
app.use("/addresses",addressesRouters);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})