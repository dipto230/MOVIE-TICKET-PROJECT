import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../components/Loading'
import { ClockIcon } from 'lucide-react'
import isoTimeFormat from '../lib/intoTimeFormat'
import BLurCircle from '../components/BlurCircle'


const SeatLayout = () => {
  const { id, date } = useParams()

  const [selectedTime, setSelectedTime] = useState(null)
  const [show, setShow] = useState(null)

  const getShow = () => {
    const foundShow = dummyShowsData.find((show) => show._id === id)

    if (foundShow) {
      setShow({
        movie: foundShow,
        dateTime: dummyDateTimeData
      })
    }
  }

  useEffect(() => {
    getShow()
  }, [id])

  return show ? (
    <div className='px-6 md:px-16 lg:px-40 py-30 md:pt-50'>
      
      {/* Available Timings */}
      <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10'>
        <p className='text-lg font-semibold px-6'>Available Timings</p>

        <div className='mt-5 space-y-1'>
          {show.dateTime[date]?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
                selectedTime?.time === item.time
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary/20'
              }`}
            >
              <ClockIcon className='w-4 h-4' />
              <p>{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* seat layout */}
      <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>
        <BLurCircle top="-100px" left="-100px"/>
        <BLurCircle bottom="0px" right="0px"/>
        <h1 className='text-2xl font-semibold mb-4'>Select Your Seat</h1>
        <img src={assets.screenImage} alt='screen'/>
        <p className='text-gray-500 text-sm mb-6'>SCREEN SIDE</p>



      </div>

    </div>
  ) : (
    <Loading />
  )
}

export default SeatLayout