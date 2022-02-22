import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  height: 80vh;
  box-shadow: 0.3px 0.5px 2.4px rgba(0, 0, 0, 0.025),
    2px 4px 19px rgba(0, 0, 0, 0.05);
`;
const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  margin: 60px 50px;
  height: 100px;
`;
const H1 = styled.h1`
  padding-left: 60px;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

const TopHospitalsFor = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <H1>Top Hospitals in New Delhi for</H1>
        </Top>
        <Middle>
          <Card>
            <Img src="generic.svg" />
            <Text>Oncology</Text>
          </Card>
          <Card>
            <Img src="generic.svg" />
            <Text>Cardiology</Text>
          </Card>
          <Card>
            <Img src="generic.svg" />
            <Text>Orthopaedic</Text>
          </Card>
          <Card>
            <Img src="generic.svg" />
            <Text>Neurosurgery</Text>
          </Card>
          <Card>
            <Img src="generic.svg" />
            <Text>Cosmetic</Text>
          </Card>
          <Card>
            <Img src="generic.svg" />
            <Text>Spine surgery</Text>
          </Card>
        </Middle>
      </Wrapper>
    </Container>
  );
};

export default TopHospitalsFor;
