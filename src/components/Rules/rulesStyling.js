import styled from 'styled-components'

export const RulesButton = styled.button`
  background-color: #fff;
  color: #223a5f;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  width: 120px;
  height: 36px;
  border-radius: 10px;
  align-self: flex-end;
  margin-right: 30px;
`
export const RulesPopupContainer = styled.div`
  width: 800px;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #fff;
  justify-self: center;
  @media (max-width: 768px) {
    padding: 10px;
    width: 350px;
    align-self: center;
  }
`
export const RulesImg = styled.img`
  width: 100%;
`
export const CloseBtn = styled.button`
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 20px;
  margin-top: 0;
`
