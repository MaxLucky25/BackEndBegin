import {Router} from "express";


const products =[{id:1, title:"tomato"},{id:2, title:"orange"}];

export const productsRouters = Router()

productsRouters.get("/",(req,res)=>{
    if(req.query.title){
        let searchString = req.query.title.toString();
        res.send(products.filter(c => c.title.indexOf(searchString) > -1));
    }else {
        res.send(products);
    }
})
productsRouters.post("/",(req,res)=>{
    const newProduct ={
        id: +(new Date()),
        title: req.body.title
    }
    products.push(newProduct)

    res.status(201).send(newProduct)

})
productsRouters.get("/:id",(req, res)=>{
    let product = products.find(p=>p.id === +req.params.id)
    if(product){
        res.send(product);
    }else{
        res.send(404);
    }
})
productsRouters.put("/:id",(req, res)=>{
    let product = products.find(p=>p.id === +req.params.id)
    if(product){
        product.title = req.body.title
        res.send(product);
    }else{
        res.send(404);
    }
})
productsRouters.delete("/:id",(req, res)=>{
    for(let i =0; i<products.length; i++){
        if(products[i].id === +req.params.id){
            products.splice(i,1);
            res.send(204);
            return;
        }
    }
    res.send(404);
})