import './Productos.css'
import Card from './Card'
import { Kumbh_Sans } from 'next/font/google'

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  style: ['normal'],
})

export default function Productos({ products, estado }) {
  const { setCarrito } = estado

  const productos = products
  return (
      <section className={`section-products ${kumbhSans.className}`}>
      <ul key={crypto.randomUUID()} className="container-products">
        {
          productos.map(product => (
            <Card key={crypto.randomUUID()} product={product} carro={{setCarrito}}/>
          ))
        }
      </ul>
    </section>
  )
}
 
