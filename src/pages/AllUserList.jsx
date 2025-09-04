import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, push, set } from "firebase/database";
import UserCard from '../components/UserCard';
import { useSelector } from 'react-redux';



const AllUserList = () => {
//  show all user code start
  const [allUsers,setAllUsers] =useState([])
  const currentUserInfo =useSelector((state)=>state.currentUserInfo.value)
  const db = getDatabase();
  useEffect(()=>{

    const allUsershowData = ref(db, 'allUsers' );
    onValue(allUsershowData, (allUserdata) => {
    let myArray =[]
   
      allUserdata.forEach((item)=>{
        if(item.key!=currentUserInfo.uid){
        myArray.push({userData:item.val(),userID:item.key})
        }
      })
   setAllUsers(myArray)
});
  },[])
//  show all user code end
// add user start 
const handleAdd =(user)=>{
  set(push(ref(db, 'chatUser/')), {
   senderID: currentUserInfo.uid,
   senderName: currentUserInfo.displayName,
   senderPhoto: currentUserInfo.photoURL,

   adderId: user.userID,
   adderName: user.userData.username,
   adderAvatar: user.userData.profile_picture,
  
   
  });
  console.log(user)
}
// add user end


 console.log(allUsers)
  return (
    <>
    <div className='h-screen  p-[20px]'>
        <h1 className='text-lg font-semibold mb-4 ml-4'>All Users</h1>
    
  

  {
    allUsers.map((item,indexkey)=>(
    <UserCard
    key={indexkey}
    userName={item.userData.username}
    userEmail={item.userData.email}
    userAvatar={item.userData.profile_picture}
    addUser={()=>handleAdd(item)}
    />))
  }
 
     
    </div>
    
    </>
  )
}

export default AllUserList