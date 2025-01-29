import {Router} from "express";

const adresses= [{id:1, title:"Nezalejnasti 12"},{id:2, title:"Selickogo 11"}];

export const addressesRouters = Router()

addressesRouters.get("/",(req, res)=>{
    res.send(adresses);
})
addressesRouters.get("/:id",(req, res)=>{
    let address =adresses.find(p => p.id === +req.params.id)
    if(address){
        res.send(address);
    }else{
        res.send(404);
    }
})
