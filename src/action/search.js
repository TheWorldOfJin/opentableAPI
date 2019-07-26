import axios from "axios";

export const setCity = city => {
  return getRestaurants(city);
};

export const getRestaurants = (city, page) => async dispatch => {
  try {
    const res = await axios.get(
      `http://opentable.herokuapp.com/api/restaurants?city=${city}&page=${page}`
    );
    console.log(res.data);
    console.log(page);
    dispatch({
      type: "GET_RESTAURANTS",
      restaurants: res.data.restaurants,
      page: res.data.current_page,
      city,
      count: res.data.total_entries
    });
  } catch (err) {
    dispatch({
      type: "SEARCH_ERROR",
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
