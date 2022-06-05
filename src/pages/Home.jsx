import { useState } from 'react';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import Header from '../components/Header';
import Button from '../components/Button';

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const increaseMonth = () =>
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );

    const decreaseMonth = () =>
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );

  return (
    <>
      <PageTitle title={'홈'} />
      <Header
        headText={headText}
        leftChild={<Button text={'<'} onClick={decreaseMonth} />}
        rightChild={<Button text={'>'} onClick={increaseMonth} />}
      />
      <HomeContainer className="App">
        <h1>Home</h1>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.section`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`;
