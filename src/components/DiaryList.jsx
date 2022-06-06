import { useState } from 'react';

const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된순' },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((item, i) => (
        <option key={i} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState('latest');

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }

    const copyList = JSON.parse(JSON.stringify(diaryList)); // 깊은 복사
    const sortedList = copyList.sort(compare); 
    return sortedList;
  }

  return (
    <>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {getProcessedDiaryList().map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
