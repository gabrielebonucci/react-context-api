import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "../DettaglioProdotto.css";

function DettaglioProdotto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Errore caricamento:", error);
      });
  }, [id]);

  if (!product) {
    return <p>Prodotto in caricamento...</p>;
  }
  return (
    <div className="ContainerProdDesc">
      <div className="ContainerCardProdDesc">
        <div>
          <img
            className="Dettagli-image"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="ContainerDettagli">
          <h2>{product.title}</h2>
          <p className="Descrizione">{product.description}</p>
          <p className="CategoryText">Categoria: {product.category}</p>
          <p className="PriceText">Prezzo: ${product.price}</p>
          <button className="back-btn" onClick={() => navigate(-1)}>
            Torna indietro
          </button>
        </div>
      </div>
    </div>
  );
}

export default DettaglioProdotto;
