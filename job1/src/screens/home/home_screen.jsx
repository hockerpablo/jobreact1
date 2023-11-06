import React from 'react'
import { Header } from '../../components/header/header'
import { CategoryWidget } from '../../components/categories/category_card/category_widget/categori_widget'

import { ProductWidget } from '../../components/products/product_wiedgets.jsx/product_widgets'
import { Footer } from '../../components/footer/footer'
import { Navbar } from '../../components/navbar/navbar'
import { HomeLayout } from '../../layout/home/home_layout'
import { PremiunWidget } from '../../components/premiun/premiun_widget/premiun_widget'




export const HomeScreen = () => {
  return (
    <div>
      <Navbar/>
      <HomeLayout>
      <Header/>
      <CategoryWidget/>
      <PremiunWidget/>
      <ProductWidget/>
      </HomeLayout>
      <Footer/>
    </div>
  )
}