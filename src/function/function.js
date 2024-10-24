// Add Products to Local Storage
const addProdctsToLocalStorage = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
}
// Get Products from Local Storage
const getProductsFromLocalStorage = () => {
    return ("products" in localStorage) 
    ? JSON.parse(localStorage.getItem("products")) 
    : [];
    
}


const removeProductFromLocalStorage = (id) => {
    console.log(id);
    const products = getProductsFromLocalStorage();
    const updatedProducts = products.filter((product) => product.id!== id);
    addProdctsToLocalStorage(updatedProducts);
    return updatedProducts;
}
const manageCountOfProduct = (id,action) => {
    const products = getProductsFromLocalStorage();
    console.log("mohda");
    
    const updatedProducts = products.map((product) => {
        if(product.id === id){
            if(action === "increment"){
                product.count++;
            }else if(action === "decrement" && product.count > 1){
                product.count--;
            }
            console.log(product.count);
        }
        return product;
    });
    addProdctsToLocalStorage(updatedProducts);
    return updatedProducts;
}

export {addProdctsToLocalStorage,getProductsFromLocalStorage , removeProductFromLocalStorage,manageCountOfProduct};