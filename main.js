import { createProduct, getProducts, getProductsByID, deleteProduct, putProduct } from "./api/FakeStoreQueries";

// await getProducts();
//await getProductsByID(1);

//await createProduct({
//  title: "test product",
//  price: 13.5,
//  description: "lorem impsum set",
//  image: "https://pravatar.cc",
//  category: "electronic",
//}); 

//await deleteProduct(1);

await putProduct(1,{
  title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'ele',
});