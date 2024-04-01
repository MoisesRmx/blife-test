import './Card.css'

const handleClick = (prop) => () => {
  const { product, setCarrito } = prop
  setCarrito(prevState => {
      return [...prevState, {
        name: product.name,
        weight: product.weight,
        price: product.newPrice,
      }]
  })
}

export default function Card({ product, carro }) {
  const { setCarrito } = carro
  const { 

    id,
    name,
    oldPrice,
    newPrice,
    pieces,
    weight,
    likes,
    image,
    descuento
  } = product

  return (
    <li className="card-products">
      <header className="card-header">
        <div className="card-image">
          <img src={image} />
          <button className="producto-likes-button">
            <img src="/heart-icon.png" /> {likes}
          </button>
          <span className="producto-descuento">
            {descuento}
          </span>
          <div className="card-image-buttons">
            <button className="retroseder">{"<"}</button>
            <button className="siguiente">{">"}</button>
          </div>
        </div>

        <div className="card-info">
          <div className="container-info">
            <div className="contenido">
              <h2>{name}</h2>
              <h3>{`${pieces} Cápsulas | ${weight} Mg`}</h3>
            </div>
            <div className="precios">
              <h2>{`$${newPrice}`}</h2>
              <h3>{`$${oldPrice}`}</h3>
            </div>
          </div>
          <div className="product-rate">
            <img src="/stars-fill.png" />
          </div>
        </div>
      </header>

      <footer className="card-footer">
        <ul>
          <li>
            COMPARTE
          </li>
          <li className="social-icons">
            <a href="#"><img src="/facebook-icon.png" /></a>
          </li>
          <li className="social-icons">
            <a href="#"><img src="/twitter-icon.png" /></a>
          </li>
          <li className="social-icons">
            <a href="#"><img src="/instagram-icon.png" /></a>
          </li>
        </ul>
        <button type="button" onClick={handleClick({ product, setCarrito })}>
          Agregar
        </button>
      </footer>
    </li>
  )

}
