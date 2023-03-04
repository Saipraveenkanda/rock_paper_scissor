import RpsContext from '../../context/RpsContext'
import {
  ScoreCardContainer,
  GameHeading,
  ScoreCardCont,
  Score,
  ScoreText,
} from './scoreCardStyling'

const ScoreCard = () => (
  <RpsContext.Consumer>
    {value => {
      const {score} = value

      return (
        <ScoreCardContainer className="score-card-container">
          <GameHeading>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </GameHeading>
          <ScoreCardCont className="score-cont">
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreCardCont>
        </ScoreCardContainer>
      )
    }}
  </RpsContext.Consumer>
)
export default ScoreCard
