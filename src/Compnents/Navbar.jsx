import React from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';


const Navbar = () => {
    const myFunction=()=> {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return (
        <div class="topnav" id="myTopnav">
            <a href="/" class="active">Home</a>
            <a href="/add">Pembayaran</a>
            <a href="/all">Daftar Pelanggan</a>
            <a href="javascript:void(0);" class='icon' onClick={myFunction}>
                <i class="fa fa-bars"></i>
            </a>
        </div>
    )
}

export default Navbar;