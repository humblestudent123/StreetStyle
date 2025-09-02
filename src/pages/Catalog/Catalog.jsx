import React from "react";
import tshirtImg from "../../assets/shirt.jpg";

const Catalog = () => {
  const products = [
    { id: 1, name: "Футболка StreetStyle", price: "1990₽", image: tshirtImg },
    { id: 2, name: "Худи StreetStyle", price: "2990₽", image: tshirtImg }, // тест — тоже та же картинка
  ];

  return (
    <section>
      <h1>Каталог</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "200px", height: "auto" }}
            />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>В корзину</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
