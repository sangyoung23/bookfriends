interface ResInitialstate {
  books: [];
}

//books state의 초기값  설정
let initialState: ResInitialstate = {
  books: [],
};

// 행동지침서 reducer 작성 reducer는 2개의 매개변수를 받는다 state값과 action
function getBooksreducer(state = initialState, action: any) {
  let { type, payload } = action;
  switch (type) {
    case "GET_BOOKS_SUCCESS":
      return { ...state, books: payload.data };
    default:
      return { ...state };
  }
}

export default getBooksreducer;
