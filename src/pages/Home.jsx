import React from 'react'
import MessageUser from '../components/MessageUser'
import MessageBox from '../components/MessageBox'

const Home = () => {
  return (
    <>
    <div className='flex'>
    <MessageUser/>
    <MessageBox/>
    </div>
    </>
  )
}

export default Home