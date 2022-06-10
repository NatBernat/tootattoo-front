import { ITattoo } from "../../types/types";
import TattooItemStyled from "./TattooItemStyled";

const TattooItem = ({
  tattoo: { _id, image, title, creator },
}: {
  tattoo: ITattoo;
}): JSX.Element => {
  return (
    <>
      <TattooItemStyled>
        <img
          className="tattoo"
          src={`${process.env.REACT_APP_API_URL}uploads/images/${image}`}
          alt={title}
          title={title}
        />
        <p className="tattoo-creator">@{creator}</p>
      </TattooItemStyled>
    </>
  );
};

export default TattooItem;
