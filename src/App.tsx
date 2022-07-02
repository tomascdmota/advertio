import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main/Main';

import {useApiGet, TApiResponse} from './hooks/useApiHook';

function App() {

  const [location, setLocation] = useState('Lisbon');

  const url = `https://api.openweathermap.org/data/2.5/weather?appid=ab37c5b7920cb60cd91deacf60c67e67&q=${location}`;
  // Calling the hook
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(res => console.log(res))

  }, []);

  return (
    <div className="App">
      <Main/>
      <input onChange={() => setLocation(location)} />
    </div>
  );
}

export default App;
