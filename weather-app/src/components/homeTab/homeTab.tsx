import { useState } from "react";
import "./homeTab.css";
import Switch from "react-switch";

const HomeTab = (props: any) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  console.log(props);

  return (
    <div className="HomeDetailsContainer">
      <div className="weatherContent">
        <div>
          <div className="homeTab">
            <div className="dateMobile">{props.value}&nbsp;&nbsp;{props.time}</div>
            <div className="locationName">Udupi, Karnataka</div>
            <div className="addToFav">
              <div className="heartImg">
                <img src={require("../../assests/icon_favourite.png")} alt="" />
              </div>
              <div className="addFavText">Add to Favourites</div>
            </div>
          </div>
          <div className="weatherData">
            <div className="weatherImg">
              <img
                src={require("../../assets/icon_mostly_sunny.png")}
                alt=""
              />
            </div>
            <div className="degree">
              <div className="degrees">80</div>
              <div className="switchTempature">
                <Switch
                  borderRadius={4}
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                  offColor="transparent"
                  onColor="transparent"
                  uncheckedHandleIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 18,
                        color: "red",
                      }}
                    >
                      {"\u00B0"}C
                    </div>
                  }
                  uncheckedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 18,
                        paddingRight: 2,
                        color: "white",
                        zIndex: "2",
                      }}
                    >
                      {"\u00B0"}F
                    </div>
                  }
                  checkedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 18,
                        paddingRight: 2,
                        color: "white",
                      }}
                    >
                      {"\u00B0"}C
                    </div>
                  }
                  checkedHandleIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        color: "red",
                        fontSize: 18,
                      }}
                    >
                      {"\u00B0"}F
                    </div>
                  }
                />
              </div>
            </div>
            <div className="weatherDetails">Mostly Sunny</div>
          </div>
        </div>
        <div className="footer">
          <div className="footerListItem">
            <div className="footerImg">
              <img
                src={require("../../assets/icon_temperature_info.png")}
                alt=""
                className="footerImage"
              />
            </div>
            <div className="footerText">
              <div className="minMax">Min-Max</div>
              <div className="temp">75-78</div>
            </div>
          </div>
          <div className="footerListItem">
            <div className="footerImg">
              <img
                src={require("../../assets/icon_precipitation_info.png")}
                alt=""
                className="footerImage"
              />
            </div>
            <div className="footerText">
              <div className="minMax1">Precipitation</div>
              <div className="temp">75%</div>
            </div>
          </div>
          <div className="footerListItem">
            <div className="footerImg">
              <img
                src={require("../../assets/icon_humidity_info.png")}
                alt=""
                className="footerImage"
              />
            </div>
            <div className="footerText">
              <div className="minMax1">Humidity</div>
              <div className="temp">75%</div>
            </div>
          </div>
          <div className="footerListItem">
            <div className="footerImg">
              <img
                src={require("../../assets/icon_wind_info.png")}
                alt=""
                className="footerImage"
              />
            </div>
            <div className="footerText">
              <div className="minMax1">Wind</div>
              <div className="temp">75mph</div>
            </div>
          </div>
          <div className="footerListItem">
            <div className="footerImg">
              <img
                src={require("../../assets/icon_visibility_info.png")}
                alt=""
                className="footerImage"
              />
            </div>
            <div className="footerText">
              <div className="minMax1">Visibility</div>
              <div className="temp">75mph</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
