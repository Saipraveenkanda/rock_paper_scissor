import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 12px;
  font-family: 'Bree Serif';
  width: 90%;
  padding: 0px 24px 0px 24px;
  align-self: center;
  @media (max-width: 768px) {
    width: 95%;
  }
`
export const GameHeading = styled.h1`
  font-size: 32px;
  color: #fff;
`
export const ScoreCardCont = styled.div`
  background-color: #fff;
  color: #223a5f;
  height: 90%;
  width: 120px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Score = styled.p`
  font-size: 50px;
  font-family: 'Roboto';
  margin: 0;
`
export const ScoreText = styled.p`
  margin: 0;
`
