import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { storage, db } from "../Firebase/FirebaseConfig";
import SecHeading from "./SecHeading";
import firebase from "firebase";

function AddProduct() {
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState();
  const [cat, setCat] = useState("دسته 1");
  const [, setProgress] = useState(1);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); //proogress details
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      //final upload
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post image inside data
            db.collection("Products").add({
              title,
              price,
              imageUrl: url,
              desc,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              cat,
            });
            setProgress(0);
            setTitle("");
            setPrice();
            setImage(null);
            setDesc("");
            setCat("دسته 1");
            history.push("/Projects");
          });
      }
    );
  };

  return (
    <APStyle>
      <SecHeading
        subText="اضافه کردن"
        h3Text="محصول جدید"
        headingPos="text-center"
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <label>نام محصول</label>
        <input
          placeholder="نام محصول"
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>قیمت محصول</label>
        <input
          placeholder="قیمت محصول"
          type="number"
          onChange={(event) => setPrice(event.target.value)}
        />
        <textarea
          name="message"
          id="message"
          rows="6"
          placeholder="توضیحات محصول"
          onChange={(event) => setDesc(event.target.value)}
        />

        <label htmlFor="cat">دسته بندی: </label>
        <select
          id="cat"
          onChange={(event) => {
            setCat(event.target.value);
            console.log(cat);
          }}
          value={cat}
        >
          <option value="دسته 1">دسته 1</option>
          <option value="دسته 2">دسته 2</option>
          <option value="دسته 3">دسته 3</option>
        </select>
        <input placeholder="file" type="file" onChange={handleChange} />
        <button type="submit" onClick={() => handleUpload()}>
          اضافه کردن
        </button>
      </form>
    </APStyle>
  );
}

export default AddProduct;

const APStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: var(--white);
  }
  form {
    width: 60%;
  }
  label {
    color: var(--gray-1);
    font-size: 1.3rem;
    margin: 30px 0px;
  }
  input,
  textarea {
    width: 100%;
    background-color: var(--deep-dark);
    padding: 10px 10px 10px 30px;
    border-radius: 12px;
    outline: none;
    border: none;
    color: var(--gray-1);
    font-size: 21px;
  }
  textarea {
    margin-top: 50px;
  }
  input[type="file"] {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: transparent;
  }
  button {
    font-size: 1.3rem;
    background-color: var(--gray-1);
    padding: 0.5em 1.7em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: var(--deep-dark);
    transition: all 0.3s ease;
    margin-top: 50px;
    &:hover {
      opacity: 0.9;
      transition: all 0.3s ease;
    }
  }
  @media only screen and (max-width: 768px) {
    .button,
    a {
      font-size: 1rem;
    }
    form {
      width: 90%;
    }
  }
`;
