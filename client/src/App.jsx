import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Messages from './pages/Messages'
import ChatBox from './pages/ChatBox'
import Discover from './pages/Discover'
import Connection from './pages/Connection'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import { useUser } from '@clerk/clerk-react'
// import {Layout} from './pages/Layout'
import LayoutN from './pages/LayoutN'


const App = () => {
  const {user} =useUser()
  return (
    <>
    <Routes>
      <Route path='/' element={!user ? <Login/>: <LayoutN/>}>
        <Route index element={<Feed/>}/>
        <Route path='messages' element={<Messages/>}/>
        <Route path='messages/:userId' element={<ChatBox/>}/>
        <Route path='connections' element={<Connection/>}/>
        <Route path='discover' element={<Discover/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='profile/:profileId' element={<Profile/>}/>
        <Route path='create-post' element={<CreatePost/>}/>
        <Route path='layoutn' element={<LayoutN/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
