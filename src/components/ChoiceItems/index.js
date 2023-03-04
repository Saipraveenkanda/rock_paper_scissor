import RpsContext from '../../context/RpsContext'
import {ChoiceItemsList, Image, ChoiceButton} from './choiceItemsStyling'

const ChoiceItems = () => (
  <RpsContext.Consumer>
    {value => {
      const {choicesList, onSelectingChoice} = value
      const rock = choicesList[0]
      const scissors = choicesList[1]
      const paper = choicesList[2]
      return (
        <ChoiceItemsList>
          <ChoiceButton
            type="button"
            data-testid="rockButton"
            onClick={() => onSelectingChoice(rock.id)}
          >
            <Image src={rock.imageUrl} alt={rock.id} />
          </ChoiceButton>
          <ChoiceButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => onSelectingChoice(scissors.id)}
          >
            <Image src={scissors.imageUrl} alt={scissors.id} />
          </ChoiceButton>
          <ChoiceButton
            type="button"
            data-testid="paperButton"
            onClick={() => onSelectingChoice(paper.id)}
          >
            <Image src={paper.imageUrl} alt={paper.id} />
          </ChoiceButton>
        </ChoiceItemsList>
      )
    }}
  </RpsContext.Consumer>
)
export default ChoiceItems
