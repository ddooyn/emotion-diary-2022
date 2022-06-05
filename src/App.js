import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Router from "./Router";
import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((item) =>
        item.id === action.data.id ? { ...action.data } : item
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: '오늘의 일기 1번',
    date: 1654416186255,
  },
  {
    id: 2,
    emotion: 2,
    content: '오늘의 일기 2번',
    date: 1654416213045,
  },
  {
    id: 3,
    emotion: 3,
    content: '오늘의 일기 3번',
    date: 1654416242482,
  },
  {
    id: 4,
    emotion: 4,
    content: '오늘의 일기 4번',
    date: 1654416255082,
  },
  {
    id: 5,
    emotion: 5,
    content: '오늘의 일기 5번',
    date: 1654416269097,
  },
]

const App = () => {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
            <Router />
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
