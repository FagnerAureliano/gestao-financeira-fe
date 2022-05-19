 
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';

export function Home ()  {

  const {user} = useContext(AuthContext)

 return (
   <div>
     <h1>Home</h1>
     <h3>{user?.username}</h3>
   </div>
 );
};
 