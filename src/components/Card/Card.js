import React from 'react';
import './Card.css';
import { MdOutlinePlace, MdCancel } from "react-icons/md";
import styled from "styled-components";

export default function Card ({name, weather, temp, img, description, min, max, humidity, wind, onClose, id}) {
    console.log(img[2])
    let background = img[2] === "d" ? "https://conceptodefinicion.de/wp-content/uploads/2012/12/dia-.jpg" : "https://ucarecdn.com/0e91e129-13bd-4b5f-9059-6c56f1bf1cf7/noche.png" ;


    const ImgContainer = styled.div`
      background-image: url(${background});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;   
      position: relative;
      width: 200px;
      height: 200px;
      margin-top: 20px;
      margin-bottom: 35px;
      border-radius: 50%;
      text-align: center;
      margin-left: 22%;
      box-shadow: -1px 15px 30px -12px black;
`
  return (
    <div key={id} className="container" background="https://aforisticamente.com/wp-content/uploads/2017/10/Noche1.jpg">
          <div className='localCard'>
          <button onClick={onClose} ><MdCancel className="buttonClose"/></button>
           <div>
             <p className='weather'>{weather}</p>
             <h5 className='name' >< MdOutlinePlace /> {name}</h5>
           </div>
           <ImgContainer>
             <img className='iconWeather' src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
           </ImgContainer>
           <p className='description'>{description}</p>
           <p className='data'>Wind: {wind}m/s</p>
                 
           <div className='containerButtom'>
             <div className='dataContainer'>
               <p className='data' >{max}℃</p>
               <p className='dataVaule'>Max</p>
             </div>
             <div className='dataContainer'>
               <p className='data' >{min}℃</p>
               <p className='dataVaule'>Min</p>
             </div>
             <div className='dataContainer no-border'>
               <p className='data'>{humidity}%</p>
               <p className='dataVaule'>Humidity</p>
             </div>
             
           </div>
          </div>
        </div>
    );
};
