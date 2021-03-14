import React from 'react'
import {REF} from './constants'

import {Button, ButtonsWrapper} from './GameActions.styled'

const GameActions = ({dispatch, ref}) =>{

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
            onClick={() => {
              let updates ={}
              updates['/board'] = ["", "", "", "", "", "", "", "", ""]
              updates['/isGameOver'] = false
              updates['/drawGame'] = false

              REF.update(updates)       
            }}
          >
            Nova Rodada
          </Button>
          <Button
            color={buttonStyles.endGame.color}
            bgColor={buttonStyles.endGame.bgColor}
            onClick={()=>{


              let updates = {}

              updates['/board'] = ["", "", "", "", "", "", "", "", ""] 
              updates['/isGameOver'] = false
              updates['/drawGame'] = false
              updates['/players'] =  {
                1: {
                  name: "",
                  simbol: "X",
                  score: 0,
                },
                2: {
                  name: "",
                  simbol: "O",
                  score: 0,
                },
              }
              updates["/lastMove"] = 0
              updates["/playerTime"] = 2
              updates["/lastWinner"] = 0
              updates["/winnerSequence"] =  ["", "", ""]  
              REF.update(updates)       

            }}
          >
            Finalizar
          </Button>
        </ButtonsWrapper>
   )

}

export default GameActions