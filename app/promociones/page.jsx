"use client"

import products from '@/src/products.json'
import Banner from '@/src/components/Banner'
import Productos from '@/src/components/Productos'
import { useState } from 'react'

const dataProducts = products.map(prod => {
  return {
    id: prod.id,
    name: prod.name,
    oldPrice: prod.oldPrice,
    newPrice: prod.newPrice,
    pieces: prod.pieces,
    weight: prod.weight,
    likes: prod.likes,
    image: prod.image,
    descuento: prod.descuento
  }
})

export default function PromoPage() {
  const [carrito, setCarrito] = useState([])
  return (
    <>
      <Banner />
      <Productos products={dataProducts} estado={{setCarrito}} />
    </>
  );
}

