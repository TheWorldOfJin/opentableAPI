import React, { useEffect } from "react";
import Spinner from "./Spinner";
import { connect } from "react-redux";
import { getRestaurants } from "../action/search";

const Restaurants = ({ getRestaurants, restaurants, city, count, loading }) => {
  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  //Pagination
  const numPage = Math.round(count / 25);
  let pageButtons = [];
  let i;
  for (i = 1; i <= numPage; i++) {
    pageButtons.push(
      <button
        className="pageButton"
        key={i}
        onClick={() => getRestaurants(city, { i })}
      >
        {i}
      </button>
    );
  }

  //Restaurant Items
  return loading ? (
    <Spinner />
  ) : restaurants ? (
    <div>
      <div className="row restaurant-list">
        {restaurants.map(restaurant => (
          <div className="restaurant-card col-md-3">
            <img
              src={restaurant.image_url}
              className="card-img-top restaurant-image"
              alt="Restaurant"
            />
            <div className="card-body">
              <h5 className="restaurant-name">{restaurant.name}</h5>
              <p>Address: {restaurant.address}</p>
              <p className="restaurant-price">Price: {restaurant.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pageButtons">{pageButtons}</div>
    </div>
  ) : (
    <h2>No restaurants found</h2>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  city: state.city,
  count: state.count,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { getRestaurants }
)(Restaurants);
