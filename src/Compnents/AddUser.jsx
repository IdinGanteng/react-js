import React, { useState } from 'react';
// import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../service/api';
import { Button, Form, Input, message, Upload } from 'antd';
import { useHistory, useNavigate } from 'react-router-dom';


const initialValue = {
  nama: "",
  alamat: "",
  totalAirPerM3: "",
  totalPembayaran:"",
  phone: "",
  catatan:"",
}
const { TextArea } = Input;

const AddUser = () => {
    
  const [user, setUser] = useState(initialValue);
  const { nama, alamat, totalAirPerM3,totalPembayaran, phone, catatan} = user;

  // const history = useHistory();
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // const noWA={phone}
  const pesan= `atas nama ${nama} telah membayar total air ${totalAirPerM3}m3 dengan harga ${totalPembayaran} dibayar secara ${catatan}`;
  const pesanWA = () => {
    const url=`https://wa.me/${phone}?text=${encodeURIComponent(pesan)}`;
    window.open(url);
  }
  const pesanWAotomatis = () => {
    setTimeout(pesanWA,3000);
  }
  const addUserDetails = async () => {
    await addUser(user);
    pesanWAotomatis();
    console.log(user);
    // history.push('/all');
    navigate("/all");
  }


  return (
    <>
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
          <Button type="primary" onClick={() => addUserDetails()} >
            Bayar sekarang
          </Button>
          {/* <Button type="primary" onClick={()=> pesanWAotomatis()}>
        send wa
      </Button> */}
        </Form.Item>
      </Form>
    </>

  )
}


export default AddUser;