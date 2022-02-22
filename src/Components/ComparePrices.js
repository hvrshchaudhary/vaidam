import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  height: 80vh;
`;
const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  margin: 60px 50px;
  height: 100px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const H1 = styled.h1`
  text-align: center;
`;
const Right = styled.div`
  height: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterCity = styled.select`
  width: 50%;
  height: 38px;
  padding: 10px;
`;
const CityOption = styled.option``;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
`;
const Bottom1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
  width: 250px;
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
const Text = styled.h3`
  /* text-align: center; */
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
`;
const StartingAt = styled.h4`
  color: lightgray;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 700;
`;
const Bottom2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 150px;
`;
const Button = styled.button`
  width: 20%;
  height: 33%;
  background-color: white;
  cursor: pointer;
  border: none;
  box-shadow: 0.3px 0.5px 2.4px rgba(0, 0, 0, 0.025),
    2px 4px 19px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Price = styled.span`
  padding: 20px;
  font-weight: 700;
`;

const ComparePrices = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Left>
            <H1>Compare Prices and find exclusive packages</H1>
          </Left>
          <Right>
            <FilterCity>
              <CityOption>Oncology</CityOption>
              <CityOption>Cardiology</CityOption>
              <CityOption>Orthopaedic</CityOption>
              <CityOption>NeuroSurgery</CityOption>
              <CityOption>Cosmetic</CityOption>
              <CityOption>SpineSurgery</CityOption>
              <CityOption>Transplant</CityOption>
              <CityOption>Fertility</CityOption>
            </FilterCity>
          </Right>
        </Top>
        <Bottom>
          <Bottom1>
            <Card>
              <Text>Breast Cancer Surgery</Text>
              <StartingAt>Starting At</StartingAt>
              <Price>INR 1,44,000</Price>
            </Card>
            <Card>
              <Text>Chemothreapy</Text>
              <StartingAt>Starting At</StartingAt>
              <Price>INR 33,700</Price>
            </Card>
            <Card>
              <Text>Prostate Cancer Surgery</Text>
              <StartingAt>Starting At</StartingAt>
              <Price>INR 1,92,000</Price>
            </Card>
            <Card>
              <Text>Liver Cancer Surgery</Text>
              <StartingAt>Starting At</StartingAt>
              <Price>INR 3,13,000</Price>
            </Card>
          </Bottom1>
          <Bottom2>
            <Button>SEND ENQUIRY</Button>
          </Bottom2>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default ComparePrices;
