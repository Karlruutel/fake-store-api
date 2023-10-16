import { fakeStoreAPI } from "./FakeStoreService";

export const getProducts = async () => {
    try {
        const respond = await fakeStoreAPI.get("/products")
        return respond.data;
    } catch (error) {
        console.log(error.response.data.message);
    }
};

export const getProductsByID = async (product_id) => {
    try {
        const respond = await fakeStoreAPI.get("/products/$(product_id")
        return respond.data;
    } catch (error) {
        console.log(error.response.data.message);
    }
};

export const createProduct = async (data) => {
    try {
        const respond = await fakeStoreAPI.post("/products", data)
        return respond.data;
    } catch (error) {
        console.log(error.response.data.message);
    }
};

export const deleteProduct = async (id) => {
    try {
        const respond = await fakeStoreAPI.delete("/products/${id}");
        return respond.data;
    } catch (error) {
        console.log(error.response.data.message);
    }
};

export const putProduct = async (data, id) => {
    try {
        const respond = await fakeStoreAPI.put("/products")
        return respond.data;
    } catch (error) {
        console.log(error.respond.data.message);
    }
};