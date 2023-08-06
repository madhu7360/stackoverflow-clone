// import React from 'react'
// import { useSelector } from 'react-redux'

// import User from './User'
// import './Users.css'
// import Loader from "../../components/Loader/Loader"

// const UsersList = () => {
//     const users = useSelector((state) => state.usersReducer)
//     // console.log(users)
//   return (
//   {
//     users.length === 0 ? (
//       <Loader />
//     ) : (
//     <div className='user-list-container'>
//       {
//         users.map((user) => (
//             <User user={user} key={user?._id} />
//         ))
//       }
//     </div>
//   )
//   }
//   )
// }

// export default UsersList

import React from 'react'
import { useSelector } from 'react-redux'

import User from './User'
import './Users.css'
import Loader from "../../components/Loader/Loader"

const UsersList = () => {
    const users = useSelector((state) => state.usersReducer)
    // console.log(users)
    return (
        users.length === 0 ? (
            <Loader />
        ) : (
            <div className='user-list-container'>
                {
                    users.map((user) => (
                        <User user={user} key={user?._id} />
                    ))
                }
            </div>
        )
    )
}

export default UsersList

