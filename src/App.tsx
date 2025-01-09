import React, { useState } from 'react';
import { WeatherChart } from './components/WeatherChart';
import { WeatherTable } from './components/WeatherTable';
import { WeatherResponse } from './types/weather';
import { CloudSun } from 'lucide-react';

function App() {
  const [latitude, setLatitude] = useState('51.5074');
  const [longitude, setLongitude] = useState('-0.1278');
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-02-01');
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateInputs = () => {
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    
    if (isNaN(lat) || lat < -90 || lat > 90) {
      setError('Invalid latitude. Must be between -90 and 90.');
      return false;
    }
    
    if (isNaN(lon) || lon < -180 || lon > 180) {
      setError('Invalid longitude. Must be between -180 and 180.');
      return false;
    }

    if (!startDate || !endDate) {
      setError('Please select both start and end dates.');
      return false;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (end < start) {
      setError('End date must be after start date.');
      return false;
    }

    return true;
  };

  const fetchWeatherData = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?` +
        `latitude=${latitude}&longitude=${longitude}&` +
        `start_date=${startDate}&end_date=${endDate}&` +
        `daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,` +
        `apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean&` +
        `timezone=auto`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data: WeatherResponse = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <CloudSun className="h-8 w-8 text-blue-500 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">Weather Dashboard</h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Latitude
              </label>
              <input
                type="text"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter latitude"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Longitude
              </label>
              <input
                type="text"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter longitude"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              onClick={fetchWeatherData}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Fetch Weather Data'}
            </button>
          </div>
          {error && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
        </div>

        {weatherData && (
          <div className="space-y-8">
            <WeatherChart data={weatherData.daily} />
            <WeatherTable data={weatherData.daily} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;