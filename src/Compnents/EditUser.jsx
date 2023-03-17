import React, { useEffect, useState } from 'react';
import { editUser, getallUsers } from '../service/api';
import { useHistory, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input, message, Upload } from 'antd';


const initialValue = {
    nama: "",
    alamat: "",
    totalAirPerM3: "",
    totalPembayaran:"",
    phone: "",
    catatan:"",
  }
  const { TextArea } = Input;

const EditUser = () => {

    const [user, setUser] = useState(initialValue);
    const { nama, alamat, totalAirPerM3,totalPembayaran, phone, catatan} = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getallUsers(id);
        setUser(response.data);
    }

    // const history = useHistory();
    const navigate = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const editUserDetails = async () =>{
       await editUser(id,user);
    //    history.push('/all');
    navigate("/all")
    }

    return (
        <>
        {/* <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Update User Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" value={username} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
                </FormControl>
                <FormControl>
                    <InputLabel>bio</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="bio" value={bio} />
                </FormControl>
                <Box my={3}>
                    <Button variant="contained" onClick={() => editUserDetails() } color="primary" align="center">Update User</Button>
                    <Button onClick={()=> navigate("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container> */}
        <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          width:200,
          marginLeft:"auto",
          marginRight:"auto"
        }}
      >
        <Form.Item
          label="Nama"
        >
          <Input onChange={onValueChange} name="nama" value={nama} />
        </Form.Item>
        <Form.Item
          label="Alamat"
        >
          <Input onChange={onValueChange} name="alamat" value={alamat} />
        </Form.Item>
        <Form.Item
          label="Total Penggunaan Air/m3"
        >
          <Input onChange={onValueChange} name="totalAirPerM3" value={totalAirPerM3} />
        </Form.Item>
        <Form.Item
          label="Total Pembayaran"
        >
          <Input onChange={onValueChange} name="totalPembayaran" value={totalPembayaran}  />
        </Form.Item>
        <Form.Item
          label="Telepon Pelanggan"
        >
          <Input onChange={onValueChange} name="phone" value={phone}  />
        </Form.Item>
        <Form.Item
          label="Catatan"
        >
          <TextArea onChange={onValueChange} name="catatan" value={catatan}  />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button variant="contained" onClick={() => editUserDetails() } color="primary" align="center">Update User</Button>
          <Button onClick={()=> navigate("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
          {/* <Button type="primary" onClick={()=> pesanWAotomatis()}>
        send wa
      </Button> */}
        </Form.Item>
      </Form>
        </>
    )
}


export default EditUser;