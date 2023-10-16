import React from 'react';
import useUserStore from '../stores/user';

const Home = () => {
  const users = useUserStore((state) => state.users)
  return (
    <div>
      {
        users?.map((user) => (
          <p key={Math.random()}>{user.name} | {user.email}</p>
        ))
      }
    </div>
  )
}

export default Home;
