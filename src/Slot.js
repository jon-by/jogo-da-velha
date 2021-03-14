import React, { useState } from "react";

import { StyledSlot } from "./Slot.styled";

const Slot = ({ value, index, onClick, player }) => {
  const [slotValue, setSlotValue] = useState("");

  const handleClick = (index) => onClick(index);
  return (
    <StyledSlot
      onClick={() => handleClick(index)}
      onMouseOver={() => {
        if(value !== '') return
        setSlotValue(player.simbol);
      }}
      onMouseLeave={()=>{        
        setSlotValue('')
      }}
    >
      {value === ''? slotValue: value}
    </StyledSlot>
  );
};

export default Slot;
