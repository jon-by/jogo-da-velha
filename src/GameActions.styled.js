import styled from 'styled-components'



export const Button = styled.button`
min-width: 100px;
  padding: 10px;
  border: none;
  color: ${(props) => props.color};
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  background: ${(props) => props.bgColor};
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`

export const ButtonsWrapper = styled.div`
display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`