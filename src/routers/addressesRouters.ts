import {Router,Request,Response} from "express";
import {addressesRepository} from "../repositories/addreses-repository";



export const addressesRouters = Router()

addressesRouters.get("/",(req: Request,res: Response)=>{
    const foundAddresses = addressesRepository.findAddresses(
        req.query.title ?.toString());
    res.send(foundAddresses);
})
addressesRouters.get("/:id",(req: Request,res: Response)=>{
    let foundAddressesById  =addressesRepository.findAddressesById(+req.params.id)
    if(foundAddressesById){
        res.send(foundAddressesById);
    }else{
        res.send(404);
    }
})
