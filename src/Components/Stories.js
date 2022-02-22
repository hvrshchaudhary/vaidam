import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Quicksand", sans-serif;
  box-shadow: 0.3px 0.5px 2.4px rgba(0, 0, 0, 0.025),
    2px 4px 19px rgba(0, 0, 0, 0.05);
`;
const H1 = styled.h1`
  text-align: center;
  margin-top: 25px;
  font-weight: 900;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;
const Card = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  height: 370px;
  width: 300px;
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
  padding-bottom: 0;
  font-size: 18px;
  font-weight: 600;
`;
const Desc = styled.span`
  padding: 20px;
  text-align: center;
`;
const Bottom = styled.div`
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
const Stories = () => {
  return (
    <Container>
      <H1>Read Patient Stories</H1>
      <Middle>
        <Card>
          <Img src="happy.svg" />
          <Text>Ms. Michael Thorsen</Text>
          <Desc>
            "I am extremely grateful to Vaidam team for taking care of
            everything from my arrival to the treatment"
          </Desc>
        </Card>
        <Card>
          <Img src="happy.svg" />
          <Text>Ms. Anna</Text>
          <Desc>
            "I am extremely grateful to Vaidam team for taking care of
            everything from my arrival to the treatment"
          </Desc>
        </Card>
        <Card>
          <Img src="happy.svg" />
          <Text>Mr. Luftar Rehman</Text>
          <Desc>
            "I am extremely grateful to Vaidam team for taking care of
            everything from my arrival to the treatment"
          </Desc>
        </Card>
      </Middle>
      <Bottom>
        <Button>View More Stories</Button>
      </Bottom>
    </Container>
  );
};

export default Stories;
