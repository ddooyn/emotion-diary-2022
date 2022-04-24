import PageTitle from "../components/PageTitle";
import styled from "styled-components";

const New = () => {
  return (
    <>
      <PageTitle title={"작성"} />
      <NewContainer className="App">
        <h1>New</h1>
      </NewContainer>
    </>
  );
};

export default New;

const NewContainer = styled.section`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`;
