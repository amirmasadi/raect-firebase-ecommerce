import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../StateProvider/StateProvider";

const ProjectItemsStyled = styled.div`
  width: 400px;

  img {
    width: 380px;
    height: 400px;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .description {
    background-color: var(--deep-dark);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  svg {
    width: 40px !important;
    color: var(--white);
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: var(--blue);
    }
  }
`;

export default function ProjectItems({
  proImg,
  proTitle = "تست",
  id,
  proPrice,
  proText,
}) {
  const [, dispatch] = useStateValue();

  const addTobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        proTitle,
        proPrice,
        proImg,
        proText,
      },
    });
  };
  return (
    <ProjectItemsStyled className="d-flex flex-column align-items-center">
      <Link to={`/Projects/${id}`} style={{ width: "100%" }}>
        <img
          src={proImg}
          className="img-fluid w-100 border border-3 border-secondary"
          alt=""
        />
      </Link>
      <div className="description">
        <Link to={`/Projects/${id}`} className="my-3 p-3">
          <h3>{proTitle}</h3>
          <span>{proPrice}ریال</span>
        </Link>
        <svg
          onClick={addTobasket}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
    </ProjectItemsStyled>
  );
}
