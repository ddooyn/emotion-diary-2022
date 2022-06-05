import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';
import Header from '../components/Header';
import Button from '../components/Button';

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length > 0) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
  
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();
  
      // console.log(new Date(firstDay), new Date(lastDay))
      setData(
        diaryList.filter((item) => firstDay <= item.date && item.date <= lastDay)
      );
    }
  }, [curDate, diaryList]);

  useEffect(() => {
    console.log(data);
  }, [data])

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
