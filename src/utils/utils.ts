import toast from "react-hot-toast";

export const apiPaths = { baseUrl: 'https://fakestoreapi.com', products: 'products', categories: 'products/categories' }


export const notify = () => toast.success("Product has been added to your cart.");