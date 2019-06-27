export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "COURSE_ACTION":
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
