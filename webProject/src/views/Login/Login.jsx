import React, { useEffect, useState } from 'react'
import axios from 'axios'
import https from 'https'
import styled from 'styled-components'
import logo from '../../assets/Logo.svg';
const Styles = styled.div`
display:flex;

.left{
    width:30%;
    background-color:#282c34;
    height: 100%;
    position: absolute;
    margin:0
}
.right{
    flex-direction:column;
    width:70%;
    margin-left:30%;
    align-items:center;
    text-align:center;
}
.qr{
    margin-top:20px;
    margin-left:auto;
    margin-right:auto;
}
.title{
    font-size: 35px;
    color: #0072C6;
    font-family: 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
    margin-top:110px;
}
.logo{
    background-color:#ffffff;
    margin-top:160px;
    margin-left:20%;
    margin-right:20%;
}
`
const Login = () => {
    const [base, setBase] = useState('');
    const getQR = () => {
        const axRejUnauth = axios.create({ httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
        const url = 'https://localhost:5001/newton/v1/projeto-integrador-v/qrcode/base64';
        axRejUnauth.get(url).then(
            res => {
                console.log(res.data)
                //console.log(res.data.qrCode.rawFormat.guid)
                setBase(res.data)
            })
            .catch(e => console.log(e));
    }
    useEffect(() => {
        getQR()
    }, [])

    return (
        <Styles>
            <div className='left'>{/*<img className='logo' src={logo} />*/}</div>
            <div className='right'>
                <h1 className='title'>Refeição Transparente</h1>
                <img className='qr' src={base} /></div>
        </Styles>
    );
}
export default Login;