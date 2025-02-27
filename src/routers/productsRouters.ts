import {Router, Request, Response} from "express";
import {productsRepository, ProductType} from "../repositories/products-db-repository";
import {imputValidationMiddleware, validateTitleMiddleware} from "../middleware/imput-validation-middleware";




export const productsRouters = Router()

productsRouters.get("/", async (req: Request,res: Response)=>{
    const foundProducts:ProductType[] =
        await productsRepository.findProducts(req.query.title ?.toString())

    res.send(foundProducts);
    })

productsRouters.post("/",
    validateTitleMiddleware,
    imputValidationMiddleware,
    async (req: Request, res: Response) => {
    const newProduct: ProductType = await productsRepository.createProduct(req.body.title);
    res.status(201).send(newProduct);
});

productsRouters.get("/:id",async (req: Request,res: Response)=>{
    let product = await productsRepository.findProductById(+req.params.id)
    if(product){
        res.send(product);
    }else{
        res.send(404);
    }
})

productsRouters.put("/:id",
    validateTitleMiddleware,
    imputValidationMiddleware,
    async (req: Request,res: Response) =>{
    const isUpdated = await productsRepository.updateProduct(+req.params.id, req.body.title)
    if(isUpdated){
       const product = await productsRepository.findProductById(+req.params.id)
        res.send(product);
    }else{
        res.send(404);
    }
})

productsRouters.delete("/:id",async (req: Request,res: Response)=> {
    const isDeleted = await productsRepository.deleteProduct(+req.params.id)
    if (isDeleted) {
        res.send(201);
    } else {
        res.send(404);
    }
})