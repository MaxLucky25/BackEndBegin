import {Router,Request,Response} from "express";
import {productsRepository} from "../repositories/products-repository";




export const productsRouters = Router()

productsRouters.get("/",(req: Request,res: Response)=>{
    const foundProducts = productsRepository.findProducts(
        req.query.title ?.toString())
    res.send(foundProducts);
    })

productsRouters.post("/",(req: Request,res: Response)=>{
    const newProduct = productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct);
})

productsRouters.get("/:id",(req: Request,res: Response)=>{
    let product = productsRepository.findProductById(+req.params.id)
    if(product){
        res.send(product);
    }else{
        res.send(404);
    }
})

productsRouters.put("/:id",(req: Request,res: Response)=>{
   const isUpdated = productsRepository.updateProduct(+req.params.id, req.body.title)
    if(isUpdated){
       const product = productsRepository.findProductById(+req.params.id)
        res.send(product);
    }else{
        res.send(404);
    }
})

productsRouters.delete("/:id",(req: Request,res: Response)=> {
    const isDeleted = productsRepository.deleteProduct(+req.params.id)
    if (isDeleted) {
        res.send(201);
    } else {
        res.send(404);
    }
})