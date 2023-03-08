import { createContext, useContext, useState } from "react";
import { IContextChildren } from "../types";

export type ICartProduct = {
    id: number;
    quantity: number;
    price: number,
    title: string,
    image: string,
    description: string
};

export type IItemToAdd = {
    id: number;
    price: number,
    title: string,
    image: string,
    description: string
};


export type ICartActions = {
    add: (itemToAdd: IItemToAdd) => void;
    decrice: (id: number) => void;
    remove: (id: number) => void;
    getQuantity: (id: number) => number;
    cartProducts: ICartProduct[];
    getTotalPrice: () => number;

};

const ShopContext = createContext({} as ICartActions);

export const useCart = () => {
    return useContext(ShopContext);
};

export const ShopProvider = ({ children }: IContextChildren) => {
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);

    const add = (itemToAdd: IItemToAdd) => {

        setCartProducts((prevCart) => {
            const productFromCart = prevCart.find(
                (product) => product.id === itemToAdd.id
            );

            if (productFromCart) {
                return prevCart.map((product) =>
                    product.id === itemToAdd.id 
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            }

            return [...prevCart, { ...itemToAdd, quantity: 1 }]; 
        });
    };

    const decrice = (id: number) => {
        setCartProducts((prevCart) => {
            const productFromCart = prevCart.find(
                (product) => product.id === id
            );
            if (productFromCart && productFromCart.quantity === 1)
                return prevCart.filter((product) => product.id !== id);

            return prevCart.map((product) => {
                return product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product;
            });
        });
    };

    const remove = (id: number) => {
        setCartProducts((prevCart) => {
            return prevCart.filter((product) => product.id !== id);
        });
    };

    const getQuantity = (id: number) => {
        const productFromCart = cartProducts.find(
            (product) => product.id === id
        );
        return productFromCart !== undefined ? productFromCart.quantity : 0;
    };

    const getTotalPrice = () => {

        const total = cartProducts.reduce((acc, curr) => {
          return (acc + (curr.quantity * curr.price))


        }, 0)

        return Number(total.toFixed(2))
    }


    const providerValues = {
        add,
        decrice,
        remove,
        getQuantity,
        cartProducts,
        getTotalPrice,

    };

    return (
        <ShopContext.Provider value={providerValues}>
            {children}
        </ShopContext.Provider>
    );
};
