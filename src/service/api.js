import axios from 'axios';


// const express = require('express');
// const cors = require('cors');
// const jsonServer = require('json-server');

// const app = express();
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');

// app.use(cors());
// app.use('/api',router);
// server.use('/api',router);

// const PORT = process.env.PORT || 500;
// app.listen(PORT, () =>console.log('server siap'));

const url = "https://127.0.0.1:3003/user";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}
// export const addImage = async (image) => {
//     return await axios.post(url1,image);
// }
export const addUser = async (user) => {
    return await axios.post(url,user);
}
export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`,user);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}