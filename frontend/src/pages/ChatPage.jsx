import React from 'react'
import { useAuthStore } from '../store/useAuthStore';

function ChatPage() {

  const { logout } = useAuthStore();

  return (
    <div className='z-10'>
      <h1>
        ChatPage
      </h1>

      <button onClick={logout} >logout</button>
    </div>
  )
}

export default ChatPage
