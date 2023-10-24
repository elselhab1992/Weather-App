import { useState } from "react";
import {
  Container,
  SearchInput,
  Input,
  CityTemp,
  BottomInfo,
  BottomDiv,
} from "./Styles";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  async function fetchData() {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setData(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="app">
      <Container className="container">
        <SearchInput className="search">
          <Input
            type="text"
            placeholder="Enter a City..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={fetchData}
          />
        </SearchInput>
        {data.name && (
          <>
            <CityTemp className="temp">
              <p>{data.name}</p>
              {data.main ? (
                <h1>{data.main.temp.toFixed()}°F</h1>
              ) : (
                <p>Enter a City</p>
              )}
              {data.weather ? (
                <p>{data.weather[0].main}</p>
              ) : (
                <p>Current Weather</p>
              )}
            </CityTemp>

            <BottomInfo className="moreInfo">
              <BottomDiv className="info">
                {data.main ? (
                  <h3>
                    {data.main.feels_like.toFixed()}
                    <br />
                    <span>Feels Like</span>
                  </h3>
                ) : (
                  <h3>Feels Like</h3>
                )}
              </BottomDiv>
              <BottomDiv className="info">
                {data.main ? (
                  <h3>
                    {data.main.humidity}
                    <br />
                    <span>Humidity</span>
                  </h3>
                ) : (
                  <h3>Humidity</h3>
                )}
              </BottomDiv>
              <BottomDiv className="info">
                {data.wind ? (
                  <h3>
                    {data.wind.speed.toFixed()}
                    <br />
                    <span>Wind Speed</span>
                  </h3>
                ) : (
                  <h3>Wind Speed</h3>
                )}
              </BottomDiv>
            </BottomInfo>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
