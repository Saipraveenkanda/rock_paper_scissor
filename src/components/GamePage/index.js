import {Component} from 'react'
import {GameContainer} from './styledComponent'
import ScoreCard from '../ScoreCard'
import ChoiceItems from '../ChoiceItems'
import Rules from '../Rules'
import RpsContext from '../../context/RpsContext'
import ResultView from '../ResultView'

class GamePage extends Component {
  state = {
    choicesList: [
      {
        id: 'ROCK',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
      },
      {
        id: 'SCISSORS',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
      },
      {
        id: 'PAPER',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
      },
    ],
    userSelectedChoice: {},
    robotSelectedChoice: {},
    score: 0,
    showResultView: false,
    result: '',
  }

  onRestartGame = () => {
    this.setState({showResultView: false})
  }

  onSelectingChoice = id => {
    const {choicesList} = this.state
    const randomNumber = Math.ceil(Math.random() * 3) - 1
    const randomChoice = choicesList[randomNumber]
    const userChoiceObject = choicesList.filter(
      eachObject => eachObject.id === id,
    )
    const yourResult = userChoiceObject[0].id
    const opponentResult = randomChoice.id
    let result

    if (yourResult === 'PAPER' && opponentResult === 'ROCK') {
      result = 'YOU WON'
    } else if (yourResult === 'SCISSORS' && opponentResult === 'ROCK') {
      result = 'YOU LOSE'
    } else if (yourResult === 'ROCK' && opponentResult === 'PAPER') {
      result = 'YOU LOSE'
    } else if (yourResult === 'SCISSORS' && opponentResult === 'PAPER') {
      result = 'YOU WON'
    } else if (yourResult === 'ROCK' && opponentResult === 'SCISSORS') {
      result = 'YOU WON'
    } else if (yourResult === 'PAPER' && opponentResult === 'SCISSORS') {
      result = 'YOU LOSE'
    } else if (yourResult === opponentResult) {
      result = 'IT IS DRAW'
    }

    if (result === 'YOU WON') {
      this.setState({
        showResultView: true,
        userSelectedChoice: userChoiceObject,
        robotSelectedChoice: randomChoice,
        result,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (result === 'YOU LOSE') {
      this.setState({
        showResultView: true,
        userSelectedChoice: userChoiceObject,
        robotSelectedChoice: randomChoice,
        result,
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (result === 'IT IS DRAW') {
      this.setState({
        showResultView: true,
        userSelectedChoice: userChoiceObject,
        robotSelectedChoice: randomChoice,
        result,
      })
      this.setState(prevState => ({score: prevState.score}))
    }
  }

  render() {
    const {
      userSelectedChoice,
      robotSelectedChoice,
      score,
      choicesList,
      showResultView,
      result,
    } = this.state
    return (
      <RpsContext.Provider
        value={{
          choicesList,
          userSelectedChoice,
          robotSelectedChoice,
          score,
          result,
          onRestartGame: this.onRestartGame,
          onSelectingChoice: this.onSelectingChoice,
        }}
      >
        <GameContainer className="game-container">
          <ScoreCard />
          {showResultView ? <ResultView /> : <ChoiceItems />}
          <Rules />
        </GameContainer>
      </RpsContext.Provider>
    )
  }
}
export default GamePage
