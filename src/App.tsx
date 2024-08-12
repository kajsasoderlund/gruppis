import { CartContext } from './contexts/CartContext'
import './App.css'
import { Product } from './models/Product'
import { useState } from 'react'

function App() {
 
  const [products,setProducts] = useState<Product[]>([{id: 1, name: "sko", price: 199, amount: 1}]);
  

  return (
    
     <CartContext.Provider value={products}>
     </CartContext.Provider>
    
 
  )
}

export default App
