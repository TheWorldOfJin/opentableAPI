const initialState = {
  restaurants: [],
  city: "",
  page: "",
  count: "",
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, restaurants, city, page, count } = action;

  switch (type) {
    case "GET_RESTAURANTS":
      return {
        ...state,
        restaurants,
        city,
        page,
        count,
        loading: false
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        error: restaurants,
        loading: false
      };

    default:
      return state;
  }
}
