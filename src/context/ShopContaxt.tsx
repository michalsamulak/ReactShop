import { createContext, useContext, useState } from "react";
import { IContextChildren } from "../types";

export type ICartProduct = {
    id: number;
    quantity: number;
};

export type ICartActions = {
    add: (id: number) => void;
    decrice: (id: number) => void;
    remove: (id: number) => void;
    getQuantity: (id: number) => number;
    cartProducts: ICartProduct[];
};

const ShopContext = createContext({} as ICartActions);

export const useShop = () => {
    return useContext(ShopContext);
};

export const ShopProvider = ({ children }: IContextChildren) => {
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);

    // id, quantity
    // id - quantity

    const add = (id: number) => {
        // itemToAdd / image, price, title, id
        setCartProducts((prevCart) => {
            const productFromCart = prevCart.find(
                (product) => product.id === id
            );

            if (productFromCart) {
                return prevCart.map((product) =>
                    product.id === id // itemToAdd.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            }

            return [...prevCart, { id, quantity: 1 }]; // ...itemToAdd
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

    const providerValues = {
        add,
        decrice,
        remove,
        getQuantity,
        cartProducts,
    };

    return (
        <ShopContext.Provider value={providerValues}>
            {children}
        </ShopContext.Provider>
    );
};
