import React, { useEffect, useState} from 'react';
import { deleteUser ,getallUsers } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './style.css';



const AllUsers = () => {

    const [user, setUser] = useState([]);
    // const [name, setName] = useState([]);
    // const [username, setUsername] = useState([]);
    // const [email, setEmail] = useState([]);
    // const [phone, setPhone] = useState([]);
    // const [bio, setBio] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    
    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
        // setName(response.data);
        // setUsername(response.data);
        // setEmail(response.data);
        // setPhone(response.data);
        // setBio(response.data);
    }

    const deleteData = async (id) => {
        await deleteUser(id);
        getUsers();
    }
    const navigate = useNavigate();
    return (
        <div className='responsive-table'>
        {/* <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Nama</TableCell>
                    <TableCell>Alamat</TableCell>
                    <TableCell>Total Penggunaan</TableCell>
                    <TableCell>Total Pembayaran</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                user.map((data) => (
                    <TableRow className={classes.trow}>
                        <TableCell>{data.id}</TableCell>
                        <TableCell>{data.nama}</TableCell>
                        <TableCell>{data.alamat}</TableCell>
                        <TableCell>{data.totalAirPerM3}</TableCell>
                        <TableCell>{data.totalPembayaran}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" style={{margin: '0px 20px'}} component={Link} to={`/edit/${data.id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" style={{margin: '0px 20px'}} onClick={() => deleteData(data.id)}>Delete</Button>
                            <Button variant="contained" color="primary" style={{margin: '0px 20px'}} component={Link} to={`/profile/${data.id}`}>Profile</Button>
                        </TableCell>
                    </TableRow>
                    
                ))
            }
            </TableBody>
        </Table> */}
        <table>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Total Penggunaan</th>
                <th>Total Pembayaran</th>
            </tr>
            {
                user.map((data)=> (
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.nama}</td>
                        <td>{data.alamat}</td>
                        <td>{data.totalAirPerM3}</td>
                        <td>{data.totalPembayaran}</td>
                        <td>
                            <Button onClick={()=>navigate(`/edit/${data.id}`)}>Edit</Button>
                            <Button variant="contained" color="secondary" style={{margin: '0px 20px'}} onClick={() => deleteData(data.id)}>Delete</Button>
                            <Button onClick={()=>navigate(`/profile/${data.id}`)}>Profile</Button>
                        </td>
                    </tr>
                ))
            }
        </table>
        </div>
    )
}

export default AllUsers;
