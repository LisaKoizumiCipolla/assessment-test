import React from 'react';
import ViewData from './components/ViewData';
import FetchData from './FetchData';

function App() {
  const data = FetchData();

  return (
    
    <div className="container">
        <h1 className='mainbadge mt-5 badge bg-warning text-dark'>Security Report</h1>
        <ViewData data={data} />
    </div>
  );
}

export default App;
