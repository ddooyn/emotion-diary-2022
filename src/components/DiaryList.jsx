const DiaryList = ({ diaryList }) => {
  return (
    <>
      {diaryList.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
}

export default DiaryList;
