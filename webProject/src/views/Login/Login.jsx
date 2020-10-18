import React, { useEffect, useState } from 'react'
import axios from 'axios'
import https from 'https'
import styled from 'styled-components'
//import demontration from '../../assets/Logo.svg';
import demontration from '../../assets/demonstration.png';
import lock from '../../assets/Lock.png';

import QrCode from 'qrcode.react'

const Styles = styled.div`
display:flex;

.left{
    width:30%;
    background-color:#282c34;
    height: 100%;
    position: absolute;
    margin:0;
    align-items:center;
    text-align:center;
    flex-direction:column;
}
.right{
    flex-direction:column;
    width:70%;
    margin-left:30%;
    align-items:center;
    text-align:center;
}
.qr{
    padding:0px
}
.title{
    font-size: 35px;
    color: #0072C6;
    font-family: 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
    margin-top:110px;
}
.subTitle{
    font-size: 18   px;
    margin-top:20%;
    font-family: 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
}
.subTitle2{
    font-size: 18   px;
    color:gray;
    margin-top:10px;
    font-family: 'Segoe UI', 'Segoe WP', 'Segoe UI WPC', Tahoma, Arial, sans-serif;
}
.logo{
    background-color:#ffffff;
    margin-top:160px;
    margin-left:20%;
    margin-right:20%;
}
.lock{
    width:20%;
    margin-top:20px;

}
.demontration{
    width:50%;
    margin-top:60%;

}

.qrCover{
    background-color:	#DCDCDC
}

.qrTrue{
    background-color:   #daeefe;
}
`
const Login = () => {
    const [base, setBase] = useState('');
    const dNow = new Date;
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
            <div className='left'>{/*<img className='logo' src={logo} />*/}
                <img className='demontration' src={demontration} />
            </div>
            <div className='right'>
                <h1 className='title'>Refeição Transparente</h1>
                {base ? <div className="qrTrue"><img className='qr' src={base} /></div>
                    //Foi usada uma condicional que caso não seja possível retorna o Qr da Api
                    //Sera gerado um Qr manual "QR COVER"
                    : <div className="qrCover"><QrCode value="ABCDE-12345-A2A4" /></div>
                }

                <h3 className='subTitle'>generated in {dNow.getDate() + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes()}</h3>
                <h3 className='subTitle2'>Two-factor authentication required</h3>
            </div>
        </Styles>
    );
}
export default Login;