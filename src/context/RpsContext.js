import React from 'react'

const RpsContext = React.createContext({
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
  userSelectedChoice: '',
  robotSelectedChoice: '',
  score: 0,
  showResultView: false,
  onSelectingChoice: () => {},
  onRestartGame: () => {},
})
export default RpsContext
