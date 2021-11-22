import { createContext } from 'react'

const ProductContext = createContext({
    products: null,
    setProducts: () => {}
})

ProductContext.displayName = 'ProductContext'

export default ProductContext
