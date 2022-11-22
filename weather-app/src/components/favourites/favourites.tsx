import React, { useState } from "react";
import './favourites.css';


const Favourites = () => {
  const [dialog, setDialog] = useState(false)
  return (
    <div className="favourites">
      {false ? (
        <div className="noInfoContainer">
          <div className="noInfoImg">
            <img src={require("../../assets/icon_nothing.png")} alt="" />
          </div>
          <div className="noInfoText">No Favorites Added</div>
        </div>
      ) : (
        <div className="favContainer">
          <div className="favHead">
            <div className="cities">
              0 City added as favourite
            </div>
            <div
              className="removeAll"
              onClick={() => {
                setDialog(true);
              }}
            >
              Remove All
            </div>
          </div>
          <div className="favColumnReverse">
            <div className="favBodyContainer">
              <div className="favBody">
                <div className="state">
                  {/* {favPlace.location.city}, {favPlace.location.country} */}
                  Udupi, Karnataka
                </div>
                <div className="threeElements">
                  <div className="elementOne">
                    <img
                      src={require("../../assets/icon_mostly_sunny_small.png")}
                      alt=""
                      className="elementOneImg"
                    />
                  </div>
                  <div className="elementTwo">
                    {/* {favPlace.current_observation.condition.temperature} */}
                    87
                    <span className="deg">&#8451;</span>
                  </div>
                  <div className="elementThree">
                    {/* {favPlace.current_observation.condition.text} */}
                    Mostly Sunny
                  </div>
                </div>
                <div className="fillHeart">
                  <img
                    src={require("../../assets/icon_favourite_Active.png")}
                    alt=""
                    className="fillHeartImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {dialog ? (
        <div>
          <div className="dialogContainer">
            <div className="overlay">
              <div className="dialogContent">
                <div className="dialogModal">
                  Are you sure want to remove all the favourites?
                </div>
                <div className="dialogButtons">
                  <form action="" className="dialogForm">
                    <button className="btnNo" onClick={() => setDialog(false)}>
                      No
                    </button>
                    <button
                      className="btnNo"
                      type="button"
                      onClick={() => {
                        localStorage.removeItem("fav");
                        setDialog(false);
                      }}
                    >
                      Yes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Favourites;
