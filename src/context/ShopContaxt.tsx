import { createContext, useContext, useState } from "react";
import { IContextChildren } from "../types";

export type ICartProduct = {
  id: number
  quantity: number
}

export type ICartActions={
  add : (id: number) =>void
  remove: (id: number) => void
  dropFromBasket: (id: number) => void
  getQuantity: (id: number)=> number
  basket: ICartProduct[]
}


const ShopContext = createContext({} as ICartActions)

export const useShop = () => {
    return useContext(ShopContext)
}


export const ShopProvider = ({children}: IContextChildren) => {
  const [cartProducts, setCartProducts]= useState<ICartProduct[]>([])

  const add = (id: number) => {
    setCartProducts(
     prevCart => {
      const isProductInCart = prevCart.findIndex(product => product.id === id)
      if(isProductInCart) {
        return prevCart.map(product => {
          return { ...product, quantity: product.quantity + 1}
        })
      }

      return [...prevCart, {id, quantity: 1}]
     })
  }

  const remove = () => {
    
  }

  const dropFromBasket = (id: number) => {
      setCartProducts(
        prevCart => {
          return prevCart.filter(product => product.id !== id)
        }
      )
  }

  const getQuantity = () => {
    
  }

  return (
    <ShopContext.Provider value={{}}>
      {children}
    </ShopContext.Provider>
  )
}