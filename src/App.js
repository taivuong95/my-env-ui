import "./App.css";
import Navigation from './components/Navigation/Navigation';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
function App() {
  return (
    <div className='container'>
      <div className='current-weather-layout'>
        <Navigation/>
        <WeatherDetail/>
        <WeatherInfo/>
      </div>

      <div className='chart-layout'></div>
    </div>
  );
}

export default App;
