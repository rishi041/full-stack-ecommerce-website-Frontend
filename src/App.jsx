import { useEffect, useState } from "react";
import { getProducts } from "./services/productService";
import "./App.css";

function App() {
  const [productList, setProductList] = useState();

  useEffect(() => {
    async function data() {
      await getProducts().then((res) => {
        if (res?.data?.length > 0) {
          setProductList(res.data);
        }
      });
    }

    data();
  }, []);

  return (
    <>
      <div>
        {productList &&
          productList.map((product) => (
            <div key={product.product_id} className="product-card">
              <img
                src={product.image_url}
                alt={product.name}
                style={{ width: "300px", height: "300px" }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
