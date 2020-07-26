import React from 'react';
import UserList from './UserList';
const User=props=>{
    const USERS=[{id:'u1',name:'maryam',
    image:'https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/12DogGrooming.jpg',
    places:3
}];
return 
<UserList items={USERS}/>;
};
 

export default User;