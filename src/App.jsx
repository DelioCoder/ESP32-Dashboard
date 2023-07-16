import React, { useEffect, useState } from 'react';
import { Temperature, Humedity } from './Components';
import { fetchData } from './Api/index';

function App() {

  const [receive, setReceive] = useState(false);
  const [data, setData] = useState([]);

  const fetchAPI = async() => {
    setData(await fetchData());
  }

  useEffect(() => {
    if (receive) {
      const interval = setInterval(() => {
        fetchAPI();
        console.log(data);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [receive]);

  useEffect(() => {
 
      fetchAPI();

  }, []);

  return (
    <>
      <div className=' bg-gray-400 w-screen h-screen'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center'>

            <div className='flex flex-col justify-center items-center lg:flex-row gap-8 py-12'>
              <Temperature data={data} />
              <Humedity data={data} />
              
            </div>

            <div className=''>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setReceive(!receive)}
                >
                  Recibir datos
                </button>
              </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default App
