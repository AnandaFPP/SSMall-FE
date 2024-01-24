import React from 'react'
import Navbar from '../components/navbar/Navbar'
import NewCards from '../components/newCards/NewCards'
import ProductCard from '../components/productCard/ProductCard'

const Home = () => {
  return (
    <>
        <Navbar />
        <NewCards />
        <ProductCard />
    </>
  )
}

export default Home