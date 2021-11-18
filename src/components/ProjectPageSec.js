import React, { useState, useEffect } from "react";
import ProjectItems from "./ProjectItems";
import { db } from "../Firebase/FirebaseConfig";


export default function ProjectPageSec() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  //it gets products from firestore
  useEffect(() => {
    db.collection("Products")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setProduct(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
        setLoading(false);
      });
  }, [setProduct]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      {loading && <h3>لطفا صبر کنید...</h3>}
      <div className="d-flex flex-wrap gap-5 ">
        {product.map((item, index) => {
          return (
            <ProjectItems
              key={index}
              proImg={item.data.imageUrl}
              proTitle={item.data.title}
              proText={item.data.desc}
              proPrice={item.data.price}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
