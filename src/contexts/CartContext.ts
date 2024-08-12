import { Product } from "../models/Product";
import { createContext } from "react"; 

export const CartContext = createContext<Product[]>([]);