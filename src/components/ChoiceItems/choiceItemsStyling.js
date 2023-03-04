import styled from 'styled-components'

export const ChoiceItemsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 25%;
  flex-wrap: wrap;
  align-self: center;
  margin-top: 24px;
  @media (max-width: 768px) {
    max-width: 60%;
  }
`
/* export const ChoiceItem = styled.li`
  list-style-type: none;
  margin-right: 50px;
  @media (max-width: 768px) {
  }
` */
export const ChoiceButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const Image = styled.img`
  width: 200px;
  @media (max-width: 768px) {
    width: 150px;
  }
`
