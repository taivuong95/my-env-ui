import "./App.css";
import Navigation from './components/Navigation/Navigation';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import TideSunChart from './components/TideSunChart/TideSunChart';
function App() {
  return (
    <div className='container'>
      <div className={`${window.innerWidth < 400 ? 'current-weather-layout': 'current-weather-layout respond'}`}>
        <Navigation />
        <WeatherDetail />
        <WeatherInfo />
      </div>

      <div className='chart-layout'>
         <TideSunChart />
      </div>
    </div>
  );
}

export default App;
