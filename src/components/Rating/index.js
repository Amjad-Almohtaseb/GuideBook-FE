import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { updateGuide } from "../../store/actions/guideActions";
import { useHistory, useParams } from "react-router";
import rating from "../../pics/rating.png"

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
function Rating() {
  const history = useHistory();
  const guideId = useParams().guideId;

  const dispatch = useDispatch();

  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    dispatch(updateGuide({ rating: value }, guideId));
    history.push("/");
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = (value) => {
    setHoverValue(value);
  };

  return (
    <div >
      <span className="feedback">

      <p >CUSTOMER FEEDBACK</p>
      </span>
    <div style={styles.container}>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
            key={index}
            size={40}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={() => handleMouseLeave(index + 1)}
            color={hoverValue > index ? colors.orange : colors.grey}
            style={{
              marginRight: 10,
              cursor: "pointer",
            }}
            />
            );
          })}
      </div>
    </div>
    
    <img src={rating} alt="rating-image"/>
          </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position:"absolute",
    top:"50%",
    left:"65%",
    
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    
    
  },

};

export default Rating;
