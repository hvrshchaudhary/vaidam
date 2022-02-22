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
const H1 = styled.h1``;
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
  height: 300px;
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
const Img = styled.img`
  height: 60%;
  width: 60%;
  align-self: center;
  justify-self: center;
  object-fit: contain;
`;
const Text = styled.h3`
  /* text-align: center; */
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
`;
const Address = styled.h4`
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
  box-shadow:
  0.3px 0.5px 2.4px rgba(0, 0, 0, 0.025),
  2px 4px 19px rgba(0, 0, 0, 0.05)
;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const HospitalsNearby = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Left>
            <H1>Top hospitals in your area</H1>
          </Left>
          <Right>
            <FilterCity>
              <CityOption>Delhi</CityOption>
              <CityOption>Gurgaon</CityOption>
              <CityOption>Faridabadh</CityOption>
            </FilterCity>
          </Right>
        </Top>
        <Bottom>
            <Bottom1>
          <Card>
            <Img src="generic.svg" />
            <Text>Name of the hospital</Text>
            <Address>
              Address of the hospital, address line 2, address line 3
            </Address>
          </Card>
          <Card>
            <Img src="generic.svg" />
            <Text>Name of the hospital</Text>
            <Address>
              Address of the hospital, address line 2, address line 3
            </Address>
          </Card>
          <Card>
            <Img src="generic.svg" />
            <Text>Name of the hospital</Text>
            <Address>
              Address of the hospital, address line 2, address line 3
            </Address>
          </Card>
          <Card>
            <Img src="generic.svg" />
            <Text>Name of the hospital</Text>
            <Address>
              Address of the hospital, address line 2, address line 3
            </Address>
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

export default HospitalsNearby;
