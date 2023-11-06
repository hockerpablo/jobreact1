import React from 'react'
import { products } from '../../../data/products'
import { ProductCard } from '../product_card/product_card'
import { ProdWidgCont, WidgetCont } from './styles'

export const ProductWidget = () => {
  return (
    <ProdWidgCont>

        <h2> Productos</h2>
        <WidgetCont>

            {
              products.map((product) => <ProductCard key={product.id} {...product}/>)
            }
        
            </WidgetCont>
    
    </ProdWidgCont>
  )
}
