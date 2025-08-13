import React from 'react'
import MessageUser from '../components/MessageUser'
import MessageBox from '../components/MessageBox'

const Home = () => {
  return (
    <>
  <div className="flex h-screen">
  {/* User list sidebar */}
  <div className="w-full lg:w-[400px]">
    <MessageUser />
  </div>

  {/* Message box */}
  <div className="hidden lg:flex flex-1">
    <MessageBox />
  </div>
</div>
    </>
  )
}

export default Home