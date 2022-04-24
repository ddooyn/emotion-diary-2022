import PageTitle from "../components/PageTitle";
import styled from "styled-components";

const Edit = () => {
  return (
    <>
      <PageTitle title={"수정"} />
      <EditContainer className="App">
      <h1>Edit</h1>
      </EditContainer>
    </>
  );
};

export default Edit;

const EditContainer = styled.section`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`;