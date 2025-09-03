import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import UserCard from '../components/UserCard';
import { useSelector } from 'react-redux';



const AllUserList = () => {
 
  const [allUsers,setAllUsers] =useState([])
  const currentUserInfo =useSelector((state)=>state.currentUserInfo.value)
  
  const db = getDatabase();
  useEffect(()=>{



    const allUsershowData = ref(db, 'allUsers' );

    onValue(allUsershowData, (allUserdata) => {

    let myArray =[]
   

      allUserdata.forEach((item)=>{
        if(item.key!=currentUserInfo.uid){
        myArray.push(item.val())}
      })
   setAllUsers(myArray)
});



  },[])
 console.log(allUsers)
  return (
    <>
    <div className='h-screen  p-[20px]'>
        <h1 className='text-lg font-semibold mb-4 ml-4'>All Users</h1>
    
  

  {
    allUsers.map((item)=>(
    <UserCard
    userName={item.username}
    userEmail={item.email}
    userAvatar={item.profile_picture}
    />))
  }
 
     
    </div>
    
    </>
  )
}

export default AllUserList