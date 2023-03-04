import RpsContext from '../../context/RpsContext'
import {
  ResultViewContainer,
  Result,
  YouAndOpponent,
  ResultImage,
  ResultCard,
  YouText,
  PlayAgainBtn,
} from './resultViewStyling'

const ResultView = () => (
  <RpsContext.Consumer>
    {value => {
      const {
        userSelectedChoice,
        robotSelectedChoice,
        result,
        onRestartGame,
      } = value
      const yourImageUrl = userSelectedChoice[0].imageUrl
      const opponentImageUrl = robotSelectedChoice.imageUrl

      return (
        <ResultViewContainer>
          <YouAndOpponent>
            <ResultCard className="your-choice">
              <YouText>YOU</YouText>
              <ResultImage src={yourImageUrl} alt="your choice" />
            </ResultCard>
            <ResultCard className="opponent-choice">
              <YouText>OPPONENT</YouText>
              <ResultImage src={opponentImageUrl} alt="opponent choice" />
            </ResultCard>
          </YouAndOpponent>
          <Result>{result}</Result>
          <PlayAgainBtn type="button" onClick={onRestartGame}>
            PLAY AGAIN
          </PlayAgainBtn>
        </ResultViewContainer>
      )
    }}
  </RpsContext.Consumer>
)
export default ResultView
