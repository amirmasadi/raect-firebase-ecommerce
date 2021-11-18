import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MyH2 from "./MyH2";
import { motion } from "framer-motion";
import { db } from "../Firebase/FirebaseConfig";
import { useStateValue } from "../StateProvider/StateProvider";
import styled from "styled-components";

const parentMotion = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const childMotion = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function ProjectDetails() {
  const [projDetail, setProjDetail] = useState("");
  const [loading, setLoading] = useState(true);
  const { projId } = useParams();
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (projId) {
      db.collection("Products")
        .doc(projId)
        .get()
        .then((docRef) => {
          setProjDetail({ data: docRef.data() });
          console.log(projDetail);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projId]);

  function delhandlre() {
    db.collection("Products")
      .doc(projId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  const [, dispatch] = useStateValue();

  const addTobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        projId,
        proTitle: projDetail.data.title,
        proPrice: projDetail.data.price,
        proImg: projDetail.data.imageUrl,
        proText: projDetail.data.desc,
      },
    });
  };

  return (
    <motion.div
      className="container"
      style={{ paddingTop: "150px" }}
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-top">
        <Link
          to="/projects"
          className="text-white"
          style={{ fontSize: "4rem" }}
        >
          &#215;
        </Link>
        {loading ? (
          <h2 style={{ color: "var(--white)" }}>Loading...</h2>
        ) : (
          <DetailStyles>
            <motion.div
              className="p-1 p-md-5"
              variants={parentMotion}
              initial={"initial"}
              animate={"animate"}
            >
              <motion.div className="mb-3" variants={childMotion}>
                <MyH2>{projDetail.data.title}</MyH2>
              </motion.div>
              <motion.div variants={childMotion}>
                <h4>{projDetail.data.price}ریال</h4>
              </motion.div>
              <motion.small className="timestamp" variants={childMotion}>
                {`${new Date(
                  projDetail.data.timestamp?.toDate()
                ).getFullYear()}/
                  ${
                    new Date(projDetail.data.timestamp?.toDate()).getMonth() + 1
                  } /
                  ${new Date(projDetail.data.timestamp?.toDate()).getDate()} 
            `}
              </motion.small>
              <motion.small className="category" variants={childMotion}>
                {projDetail.data.cat}
              </motion.small>
              <motion.p className="text-muted mt-5 fs-5" variants={childMotion}>
                {projDetail.data.desc}
              </motion.p>
              <div style={{ display: "flex", gap: "10px" }}>
                <motion.div
                  onClick={addTobasket}
                  className="add-to-cart-btn"
                  variants={childMotion}
                >
                  اضافه کردن به سبد خرید
                </motion.div>
                {user && (
                  <motion.div
                    onClick={() => delhandlre()}
                    className="add-to-cart-btn"
                    variants={childMotion}
                  >
                    حذف محصول
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.img
              className="image-fluid rounded border border-2 border-secondary"
              style={{ maxWidth: "400px", objectFit: "cover" }}
              src={projDetail.data.imageUrl}
              alt="product_img"
              initial={{ scale: 0.7, y: "100px" }}
              animate={{
                y: 0,
                scale: 1,
                transition: {
                  type: "tween",
                  duration: 0.8,
                },
              }}
            />
          </DetailStyles>
        )}
      </div>
    </motion.div>
  );
}

const DetailStyles = styled.div`
  display: flex;

  small {
    color: var(--white);
  }
  .category {
    margin-top: 30px;
    background-color: var(--blue);
    padding: 3px;
    border-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  .add-to-cart-btn {
    width: fit-content;
    border: 1px solid var(--white);
    padding: 10px;
    border-radius: 15px;
    margin-top: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    color: var(--white);
    &:hover {
      border-color: var(--blue2);
      color: var(--blue2) !important;
    }
  }
`;
