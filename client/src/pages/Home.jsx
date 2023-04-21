import React, {useEffect, useState} from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { BiTask } from 'react-icons/bi'

import { Stacked, Pie, Button, SparkLine } from '../components';

import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { currentColor } = useStateContext();
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({tasks:[]})
  useEffect(() => {
    fetch('http://localhost:5555/@me',{
      'credentials':'include'
    })
    .then(r => {
      if (r.ok){
      r.json().then(data => setCurrentUser(data))
    } else{
      navigate('/')
    }
      
    })
  },[])

  console.log(currentUser.tasks)



  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white
         dark:text-gray-200
          dark:bg-secondary-dark-bg
           h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400"></p>
                <p className= "text-2xl">{currentUser.username}</p>

              </div>

            </div>
            <div className="mt-6">
              <button type="button" onClick={()=> navigate('/users')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" >Users List</button>


            </div>

        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {currentUser.tasks.map((item) => (
            <div
            key={item.id}
            className="bg-white
            dark:text-gray-200
            dark:bg-secondary-dark-bg
            md:w-56
            p-4 pt-9 rounded-2xl"
            >
            <div>
              <button type="button"className="bg-white border text-5xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl mr-10">
                <BiTask/>


              </button>
            </div>

              <p className="text-sm text-black mt-1">{item.title}</p>

            </div>

          ))}

        </div>

      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
        <div className="bg-white dark:text-gray-200
        dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Tasks</p>

          </div>
          <div className="mt-10 flex gap flex-wrap justify-center">
            
            {currentUser.tasks.map((item) => (
              <div
              key={item.id}
              className="bg-white
              dark:text-gray-200
              dark:bg-secondary-dark-bg
              md:w-56
              p-4 pt-9 rounded-2xl"
              >
                <div>
                  <button type="button"className="bg-white border text-5xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl mr-10">
                    <BiTask/>


                  </button>
                </div>

                <p className="text-sm text-black mt-1">{item.title}</p>

              </div>

            ))}
              
              

          
            <div>
             

            </div>

          </div>


        </div>

      </div>

    </div>
  )
}

export default Home