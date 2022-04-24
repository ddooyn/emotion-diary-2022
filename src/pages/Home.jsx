import PageTitle from "../components/PageTitle";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <PageTitle title={"홈"} />
      <HomeContainer className="App">
        <h1>Home</h1>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.section`
  /* ${({ theme }) => theme.flex.centerCol}; */
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`;
