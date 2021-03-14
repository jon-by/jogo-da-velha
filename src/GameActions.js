import React from 'react'

import {Button, ButtonsWrapper} from './GameActions.styled'

const GameActions = ({dispatch}) =>{

    const buttonStyles = {
        newGame: {
          color: "#fff",
          bgColor: "#099a2e",
        },
        endGame: {
          color: "#fff",
          bgColor: "#ad3042",
        },
      };

   return( <ButtonsWrapper>
          <Button
            color={buttonStyles.newGame.color}
            bgColor={buttonStyles.newGame.bgColor}
            onClick={() => dispatch({ type: "newRound" })}
          >
            Nova Rodada
          </Button>
          <Button
            color={buttonStyles.endGame.color}
            bgColor={buttonStyles.endGame.bgColor}
            onClick={()=>dispatch({type:"newGame"})}
          >
            Finalizar
          </Button>
        </ButtonsWrapper>
   )

}

export default GameActions