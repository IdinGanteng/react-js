
import React, { useEffect, useState } from 'react';

import { editUser, getallUsers } from '../service/api';
import { useHistory, useParams } from 'react-router-dom';
import { Upload, message } from 'antd';

const initialValue = {
  name: "",
  username : "",
  email: "",
  phone: "",
  bio: "",
  
}

const Profile = () => {
  const [user, setUser] = useState(initialValue);
    const {name, email, phone,bio,} = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getallUsers(id);
        setUser(response.data);
    }

    // const history = useHistory();

    // const onValueChange = (e) =>
    // {
    //   //  console.log(e);
    //   // console.log(e.target.value);
    //     setUser({...user, [e.target.name]: e.target.value});
    //     console.log(user);
    // }

    // const editUserDetails = async () =>{
    //    await editUser(id,user);
    //    history.push('/all');
    // }
  return (
    <>
        <h1>profile</h1>
        <h3>NAMA:{name}</h3>
        <h3>EMAIL:{email}</h3>
        <h3>BIO:{bio}</h3>
        <h3>PHONE:{phone}</h3>
    </>
  )
}

export default Profile;