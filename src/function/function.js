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
export {addProdctsToLocalStorage,getProductsFromLocalStorage , removeProductFromLocalStorage};