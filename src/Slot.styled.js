import styled from "styled-components";

export const StyledSlot = styled.div`
  width: 150px;
  height: 150px;  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  color: #525252dd;
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 50px;
  font-family: sans-serif;
  font-family: 'Press Start 2P', cursive;

  &:hover {
    color:#5252522e;
  }
  &:nth-child(1){
    border-left:none;
    border-top:none;

}
&:nth-child(2){
  border-top:none;
    
}
&:nth-child(3){
  border-top:none;
  border-right:none;
    
}
&:nth-child(4){
 border-left:none;
    
}
&:nth-child(6){
 
  border-right:none;
    
}
&:nth-child(7){
 
  border-left:none;
  border-bottom:none;
   
}
&:nth-child(8){
 
 border-bottom:none;
   
}
&:nth-child(9){
 
 border-right:none;
 border-bottom:none;
   
}
`;
