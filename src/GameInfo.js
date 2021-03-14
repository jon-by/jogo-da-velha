import React from 'react'

import {GameInfoWrapper, NowPlaing, Score} from './GameInfo.styled'


const GameInfo = ({player, players}) =>{

    
    return(
        <GameInfoWrapper>
        <NowPlaing player={player}>Jogando agora: &nbsp;<strong>{ players[player].name} "{players[player].simbol}"</strong></NowPlaing>
        <Score>
            <div>{players['1'].name} "{players['1'].simbol}" : {players['1'].score} </div>
            <div>{players['2'].name} "{players['2'].simbol}" : {players['2'].score} </div>

        </Score>
        </GameInfoWrapper>
    )
}



export default GameInfo

