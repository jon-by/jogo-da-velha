import React, { useEffect, useState } from "react";

import { StyledSlot } from "./Slot.styled";

const Slot = ({ value, index, onClick, playerTime }) => {
  const [color, setColor] = useState(null);

  const handleClick = (index, playerTime) => {
    onClick(index);
    setColor(() => {
      if (color !== null){
          return color
      }else{
        return playerTime === 1 ? "#ff00005c" : "#0000ffa6";
      }

      
    });
  };

  return (
    <StyledSlot
      color={color}
      playerTime={playerTime}
      onClick={() => handleClick(index, playerTime)}
    >
      {value}
    </StyledSlot>
  );
};

export default Slot;
