import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div``;
const H1 = styled.h1``;
const Middle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
const Text = styled.h1`
  text-align: center;
  padding: 20px;
  padding-bottom: 0;
  font-size: 18px;
  font-weight: 600;
`;
const Desc = styled.h3`
  padding: 20px;
  text-align: center;
`;
const Bottom = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const News = () => {
  return (
    <Container>
      <Top>
        <H1>Vaidam News</H1>
      </Top>
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
          <Text>Ms. Michael Thorsen</Text>
          <Desc>
            "I am extremely grateful to Vaidam team for taking care of
            everything from my arrival to the treatment"
          </Desc>
        </Card>
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
          <Text>Ms. Michael Thorsen</Text>
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

export default News;
