import api from "./ApiClient";

export const getProductsCategories = async () => {
    try {
        const categories = await api.get('/products/categories');
        return {status: true, categories};
    } catch (error) {
        return {status: false, error: (error as Error).message}
    }
}

export const getProductsOfCategory = async (category: string) => {
    try {
        const products = await api.get(`/products/category/${category}`);
        return products
    } catch (error) {
        return {status: false, error: (error as Error).message}
    }
}

export const getProductDetail = async (productId: number) => {
    try {
        const product = await api.get(`/products/${productId}`);
        return product
    } catch (error) {
        return {status: false, error: (error as Error).message}
    }
}

export const getProducts = async (limit:number, skip: number) => {
    try {
        const products = await api.get(`/products?limit=${limit}&skip=${skip}`);
        return products
    } catch (error) {
        return {status: false, error: (error as Error).message}
    }
}

export const getSearchedProducts = async (search: string) => {
    try {
        const products = await api.get(`/products/search?q=${search}`);
        return products
    } catch (error) {
        return {status: false, error: (error as Error).message}
    }
}