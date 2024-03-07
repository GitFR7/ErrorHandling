import React, { useState } from 'react';

function NoHandling() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const TarikData = () => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => setError(error));
  };

  return (
    <div>
      <button onClick={TarikData}>Tarik data</button>
      {error && <p>Error: {error.toString()}</p>}
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NoHandling;