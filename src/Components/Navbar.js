import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Container = styled.div`
  margin: 40px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Logo = styled.h1`
  font-family: "Quicksand", sans-serif;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
`;
const SearchContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 100%;
  height: 20px;
  padding: 5px;
  padding-left: 10px;
  font-family: "Quicksand", sans-serif;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>VAIDAM</Logo>
        </Left>
        <Right>
          <SearchContainer>
            <Input placeholder="Search by disease, procedure, doctor, hospital" />
            <Search>
              <AiOutlineSearch />
            </Search>
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
