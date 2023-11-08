// class that manages products.

const fs = require('fs');
class ProductManager {
    constructor(file){
        this.createFile(file);
        this.path = file;
                               
    }
    
          getCatalogue (){
            
            if(fs.existsSync(this.path)){
                let catalogueJSON = fs.readFileSync(this.path, 'utf-8');
                let catalogue = JSON.parse(catalogueJSON);
                return catalogue;
            }else{
                console.log("File not found!");
             }}


       createFile (file) {
            
        
            let catalogue = [];
            const jsonData = JSON.stringify(catalogue, null, 2);
            fs.writeFileSync(file, jsonData);
            }
        

                       
        addProduct (title, description, code, price, stats = true, stock, category, thumbnails) {

        
        try { if(title.length == 0 || description.length == 0 || code.length == 0 || price.length == 0 || stats.length == 0 || stock.length == 0 || category.length == 0){console.log("Surprise MotherFather!");}
            
        }

        catch (e) {
            
            return "Data incomplete!";
                       
        }

        let thumbnailsValue = [];

        if(thumbnails){
            thumbnailsValue.push(thumbnails);

        }else{
            thumbnailsValue.push("No images");
        }

        let flag = true;

        let catalogue = this.getCatalogue(this.path);

        catalogue.map((product)=>{
            if (product.code === code){
                console.log("Duplicated product code!");
                flag = false;
                }
        })

        if (flag){
        
        let id;

        try {id = catalogue.slice(-1)[0].id;}

        catch(error){
            id = 0;
        }finally{id++}
       


        catalogue.push({id, title, description, code, price, stats, stock, category, thumbnailsValue})
        const jsonData = JSON.stringify(catalogue, null, 2);
        fs.writeFileSync(this.path, jsonData);
        return "Product added successfully!";
        }else{
            return "Code already in use!";
        }
                
        }                          
        
        getProducts () {
            let catalogue = this.getCatalogue(this.path);
            return catalogue;
        }

        getProductsById (id) {
            
            let item;

            let catalogue = this.getCatalogue(this.path); 
            
            let flag = false;

            catalogue.map((product)=>{
                                             
                if(product.id === id){
                    flag = true;
                    item = product;
                    }
                
            }
            )

            if(!flag){
                        item = "Product not found!";
            }

            return item;
            
        }

        deleteProduct (id){
            
        
            let catalogue = this.getCatalogue(this.path); 
        
            const index = catalogue.findIndex(product => product.id === id);

            if (index !== -1){
                let newCatalogue = [...catalogue.slice(0, index), ...catalogue.slice(index + 1)];
                const jsonData = JSON.stringify(newCatalogue, null, 2);
                fs.writeFileSync(this.path, jsonData);
                return "Product erased!";
            }else{
                return "Product not found!";
            }
       
        }

        updateProduct(id, field, fieldValue){
            
            let catalogue = this.getCatalogue(this.path);
            const index = catalogue.findIndex(product => product.id === id);
            if(index !== -1){
                                            
                catalogue[index][field] = fieldValue;
                const jsonData = JSON.stringify(catalogue, null, 2);
                fs.writeFileSync(this.path, jsonData);
                return "Product updated!";

            }else{
                return "Product not found!";
            }

        }
    

        }

  module.exports = ProductManager;


        



    





