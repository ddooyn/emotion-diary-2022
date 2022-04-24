import styled from "styled-components";

const Header = ({ headText, leftChild, rightChild }) => {
  return (
    <HeaderContainer>
      <BtnLeft>{leftChild}</BtnLeft>
      <HeadText>{headText}</HeadText>
      <BtnRight>{rightChild}</BtnRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  div {
    ${({ theme }) => theme.flex.center};
  }
`;
const BtnLeft = styled.div`
  justify-content: flex-start;
  width: 25%;
`;
const HeadText = styled.div`
  justify-content: center;
  width: 50%;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
`;
const BtnRight = styled.div`
  justify-content: flex-end;
  width: 25%;
`;
