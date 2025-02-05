const products =[{id:1, title:"tomato"},{id:2, title:"orange"}];

export const productsRepository = {

    findProducts(title: string | undefined | null) {
        if (title) {
            let filterProducts = products.filter(c => c.title.indexOf(title) > -1)
        return filterProducts;
        } else {
            return products;
        }
    },

    createProduct(title:string){
        const newProduct ={
            id: +(new Date()),
            title:title
        }
        products.push(newProduct);
        return newProduct;
    },

    findProductById(id:number){
        return products.find(p=>p.id === id);
    },

    updateProduct(id:number,title:string){
        let product = products.find(p=>p.id === id)
        if(product){
            product.title = title
            return true;
        }else{
            return false;
        }
    },

    deleteProduct(id:number){
        for(let i =0; i<products.length; i++){
            if(products[i].id === id){
                products.splice(i,1);
                return true;
            }
        }
    }
}