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
export {addProdctsToLocalStorage,getProductsFromLocalStorage};