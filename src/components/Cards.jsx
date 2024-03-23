import { useEffect, useState } from "react";
import Products from "../connections/Products";
import Loader from "./Loader";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Promise.resolve(Products()).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <Loader color="black" />
      ) : (
        data.map((product) => {
          let clss = "";
          Math.floor(product.id * Math.random()) % 2 === 0
            ? (clss = "spanBlack")
            : (clss = "");
          return (
            <div className="card" key={product.id}>
              <div className="img">
                <span className={clss}>SALE</span>
                <img src={product.image} alt={product.category} />
              </div>
              <div className="description">
                <p className="title">{product.title}</p>
                <p className="category">{product.category}</p>
                <button>${product.price}</button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};
export default Card;
