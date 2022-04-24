import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return (
    <>
      <PageTitle title={`기록 ${id}`} />
      <DiaryContainer className="App">
        <h1>Diary</h1>
      </DiaryContainer>
    </>
  );
};

export default Diary;

const DiaryContainer = styled.section`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`;