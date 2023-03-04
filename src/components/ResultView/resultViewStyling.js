import styled from 'styled-components'

export const ResultViewContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Result = styled.p`
  font-size: 30px;
  font-weight: 700;
`
export const YouAndOpponent = styled.div`
  display: flex;
  flex-direction: row;
`
export const ResultImage = styled.img`
  width: 150px;
  @media (max-width: 768px) {
    width: 100px;
  }
`
export const ResultCard = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 200px;
  }
`
export const YouText = styled.p`
  font-size: 28px;
  font-style: normal;
`
export const PlayAgainBtn = styled.button`
  background-color: #fff;
  color: #223a5f;
  width: 120px;
  height: 36px;
  font-size: 13px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  font-weight: 700;
`
