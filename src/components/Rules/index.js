import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  RulesButton,
  RulesPopupContainer,
  RulesImg,
  CloseBtn,
} from './rulesStyling'

const Rules = () => (
  <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
    {close => (
      <RulesPopupContainer className="popup-container">
        <CloseBtn type="button" onClick={() => close()}>
          <RiCloseLine />
        </CloseBtn>
        <RulesImg
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </RulesPopupContainer>
    )}
  </Popup>
)

export default Rules
