import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  margin-top: 30px;
  margin-bottom: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  padding: 50px 100px;
  font-size: 60px;
  text-align: center;
`;
const H3 = styled.h3`
  font-size: 25px;
  text-align: center;
  color: gray;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 50px;
  justify-content: center;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 200px;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 10px;
  box-shadow: 0.3px 0.5px 2.4px rgba(0, 0, 0, 0.025),
    2px 4px 19px rgba(0, 0, 0, 0.05);
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
  font-weight: 600;
`;
const Desc = styled.span`
  text-align: center;
`;
const Stats = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <H1>
            Our services are FREE and by using our services your hospital bill
            does not increase!
          </H1>
          <H3>25000+ patients from 105+ countries have trusted Vaidam</H3>
        </Top>
        <Bottom>
          <Card>
            <Img src="building.svg" />
            <Text>400+</Text>
            <Desc>Top Class Hospitals</Desc>
          </Card>
          <Card>
            <Img src="ed.svg" />
            <Text>7000+</Text>
            <Desc>Experienced Doctors</Desc>
          </Card>
          <Card>
            <Img src="patients.svg" />
            <Text>25000+</Text>
            <Desc>Patients Assisted</Desc>
          </Card>   
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Stats;
