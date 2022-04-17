import styled from "styled-components";

export const ImageStyle = styled.img`
  width: 234px;
  height: 170px;
  border-radius: 65px;
  content: url(${(props) => props.photoUrl});
`;

export const DisabledSendButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const DescriptionStyle = styled.div`
  display: grid;
  width: 200px;
  grid-auto-flow: row;
  grid-column-gap: 4vw;
`;

export const ActionButtonsStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 15vw;
`;

export const RateLabel = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 5em;
  min-width: 30vw;
  font-size: 40px;
  line-height: 47px;
`;

export const MainDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10vw;
`;

export const TableBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BorderText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  color: white;
  line-height: 70px;
  font-weight: 400;
  text-align: center;
  background: rgba(250, 16, 52, 0.82);
  border-radius: 63px;
`;
