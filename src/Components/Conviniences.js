import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
`;
const H1 = styled.h1`
  color: #666666;
`;
const H2 = styled.h1`
  color: #999999;
`;
const H3 = styled.h1`
  color: #cccccc;
`;
const Middle = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 250px;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 10px;
  box-shadow:
  0.3px 0.5px 2.4px rgba(0, 0, 0, 0.025),
  2px 4px 19px rgba(0, 0, 0, 0.05)
;
transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Img = styled.img`
  height: 60%;
  width: 60%;
  align-self: center;
  justify-self: center;
  object-fit: contain;
`;
const Text = styled.h3`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  font-weight: 400;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  height: 50px;
`;
const Button = styled.button`
  width: 20%;
  background-color: white;
  cursor: pointer;
  border: none;
  box-shadow:
  0.3px 0.5px 2.4px rgba(0, 0, 0, 0.025),
  2px 4px 19px rgba(0, 0, 0, 0.05)
;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Conviniences = () => {
  return (
    <Container>
      <Top>
        <H1>Trusted Doctors.</H1>
        <H2>Top Hospitals.</H2>
        <H3>Hassles Taken Care</H3>
      </Top>
      <Middle>
        <Card>
          <Img src="assistance.svg" />
          <Text>Assistance in choosing right doctor</Text>
        </Card>
        <Card>
          <Img src="schedule.svg" />
          <Text>Prompt appointments</Text>
        </Card>
        <Card>
          <Img src="price.svg" />
          <Text>Compare cost, get exclusive packages</Text>
        </Card>
        <Card>
          <Img src="hospital.svg" />
          <Text>Help in hospitalisation</Text>
        </Card>
      </Middle>
      <Bottom>
        <Button>SEND ENQUIRY</Button>
      </Bottom>
    </Container>
  );
};

export default Conviniences;
