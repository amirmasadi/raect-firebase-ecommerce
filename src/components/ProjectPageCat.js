import React, { useState, useEffect } from "react";
import ProjectItems from "./ProjectItems";
import { db } from "../Firebase/FirebaseConfig";
import { useParams } from "react-router";
import SecHeading from "./SecHeading";

export default function ProjectPageCat() {
  const { catParam } = useParams();
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
    <section className="container" style={{ paddingTop: "100px" }}>
      <SecHeading
        h3Text={catParam}
        subText="محصولات در دسته بندی"
        headingPos="text-center"
      />
      {loading && <h3>لطفا صبر کنید...</h3>}
      <div className="d-flex flex-wrap gap-5 ">
        {product.map((item, index) => {
          return (
            item.data.cat === catParam && (
              <ProjectItems
                key={index}
                proImg={item.data.imageUrl}
                proTitle={item.data.title}
                proText={item.data.desc}
                proPrice={item.data.price}
                id={item.id}
              />
            )
          );
        })}
      </div>
    </section>
  );
}
