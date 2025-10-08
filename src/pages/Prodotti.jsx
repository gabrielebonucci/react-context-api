import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Prodotti = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Errore nel caricamento dei prodotti", error);
      });
  }, []); // [] assicura che l'effetto venga eseguito solo una volta

  return (
    <div>
      <h1>I Nostri Prodotti</h1>
      <div className="products-list">
        {products.map((product) => (
          <Link
            to={`/prodotti/${product.id}`}
            key={product.id}
            className="product-card-link"
          >
            <div className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.title} />
              </div>
              <h2>{product.title}</h2>
              <p>Prezzo: ${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Prodotti;
