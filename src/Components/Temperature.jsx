import React from 'react'
import { format } from 'date-fns';


const Temperature = ({data }) => {

  const temperatures = data.map((item) => item.temperatura);
  const temp = temperatures.length > 0 ? temperatures[temperatures.length - 1] : 0;

  const lastUpdated = data.length > 0 ? new Date(data[data.length - 1].createdAt) : 0;
  const formattedDate = lastUpdated ? format(lastUpdated, 'yyyy-MM-dd HH:mm:ss') : '';

  return (
    <>
        <div className="bg-gray-200 w-80 lg:w-96 h-60 rounded-lg overflow-hidden shadow-lg">
            <div className='w-full flex flex-col'>
              <p className='p-3 font-bold'>
                Temperatura
              </p>
              <div className='flex p-3 justify-center'>
                <i className="fas fa-thermometer-three-quarters text-7xl"></i>
                <p className='text-center my-auto mx-4 font-bold text-6xl'>
                  {`${temp}°C`}
                </p>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2 text-center font-semibold">
                <span>{formattedDate}</span>
            </div>
        </div>
    </>
  )
}

export default Temperature;