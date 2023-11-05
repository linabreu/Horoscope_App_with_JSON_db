import React from 'react';
import { useState } from "react";



export default function Content() {

  const [horoscope, setHoroscope] = useState("Click on your sign to get your daily horoscope!");
  const [sign, setSign] = useState("");
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [showBirthdayInput, setShowBirthdayInput] = useState(false);
  const [showHoroscope, setShowHoroscope] = useState(false);

  const zodiacSigns = [
    { name: 'Capricorn', frontColor: 'purple', backColor: 'dk-purple',  path: require('../Images/Capricorn.png') },
    { name: 'Aquarius', frontColor: 'green', backColor: 'dk-green',  path: require('../Images/Aquarius.png')},
    { name: 'Pisces', frontColor: 'teal', backColor: 'dk-teal', path: require('../Images/Pisces.png')},
    { name: 'Aries', frontColor: 'purple', backColor: 'dk-purple', path: require('../Images/Aries.png')},
    { name: 'Taurus', frontColor: 'green', backColor: 'dk-green', path:require('../Images/Taurus.png')},
    { name: 'Gemini', frontColor: 'teal', backColor: 'dk-teal', path: require('../Images/Gemini.png')},
    { name: 'Cancer', frontColor: 'purple',backColor: 'dk-purple', path:require('../Images/Cancer.png')},
    { name: 'Leo', frontColor: 'green',backColor: 'dk-green', path:require('../Images/Leo.png') },
    { name: 'Virgo', frontColor: 'teal', backColor: 'dk-teal', path: require('../Images/Virgo.png')},
    { name: 'Libra', frontColor: 'purple', backColor: 'dk-purple', path: require('../Images/Libra.png')},
    { name: 'Scorpio', frontColor: 'green', backColor: 'dk-green', path:require('../Images/Scorpio.png')},
    { name: 'Sagittarius', frontColor: 'teal', backColor: 'dk-teal', path:require('../Images/Sagittarius.png')}
  ];

  let yourDate = new Date();
  let formalDate = yourDate.toDateString()

  const getRandomNumber = () => {
    const randomNumber = Math.random();
    const min = 1;
    const max = 414;
    const scaledNumber = Math.floor(randomNumber * (max - min + 1)) + min;
    return scaledNumber;
  }
  
  const getHoroscope = async() => {
    let randomHoroscopeNum = getRandomNumber()
    console.log(randomHoroscopeNum)
    const response = await fetch(`http://localhost:8000/horoscopes/${randomHoroscopeNum}`);
    const horoData = await response.json();
    setHoroscope(horoData.horoscope);
    console.log(horoData.horoscope); 
}

  const getSign = (e) => {
    let calculatedSign = ""
    e.preventDefault()
    let monthNum = Number(month);
    let dayNum = Number(day)

      if(monthNum == 1 && dayNum <= 19){
        calculatedSign = "Capricorn";
      }
      else if (monthNum == 1 && dayNum > 19){
        calculatedSign = "Aquarius";
      }
      else if ( monthNum == 2 && dayNum <= 18){
        calculatedSign = "Aquarius";
      }
      else if (monthNum == 2 && dayNum > 18){
        calculatedSign = "Pisces";
      }
      else if (monthNum == 3 && dayNum <= 19){
        calculatedSign = "Pisces";
      }
      else if (monthNum == 3 && dayNum > 19){
        calculatedSign = "Aries";
      }
      else if (monthNum == 4 && dayNum <= 19){
        calculatedSign = "Aries";
      }
      else if (monthNum == 4 && dayNum > 19){
        calculatedSign = "Taurus";
      }
      else if (monthNum == 5 && dayNum <= 20){
        calculatedSign = "Taurus";
      }
      else if (monthNum == 5 && dayNum > 20){
        calculatedSign = "Gemini";
      }
      else if (monthNum == 6 && dayNum <= 22){
        calculatedSign = "Gemini";
      }
      else if (monthNum == 6 && dayNum > 22){
        calculatedSign = "Cancer";
      }
      else if (monthNum == 7 && dayNum <= 22 ){
        calculatedSign = "Cancer";
      }
      else if (monthNum == 7 && dayNum > 22 ){
        calculatedSign = "Leo";
      }
      else if (monthNum == 8 && dayNum <= 23){
        calculatedSign = "Leo";
      }
      else if (monthNum == 8 && dayNum > 23){
        calculatedSign = "Virgo";
      }
      else if (monthNum == 9 && dayNum <= 23){
        calculatedSign = "Virgo";
      }
      else if (monthNum == 9  && dayNum > 23){
        calculatedSign = "Libra";
      }
      else if (monthNum == 10 && dayNum <= 23){
        calculatedSign = "Libra";
      }
      else if (monthNum == 10 && dayNum > 23){
        calculatedSign = "Scorpio";
      }
      else if (monthNum == 11 && dayNum <= 21){
        calculatedSign = "Scorpio";
      }
      else if (monthNum == 11 && dayNum  <= 22){
        calculatedSign = "Sagittarius";
      }
      else if (monthNum ==12 && dayNum <= 21){
        calculatedSign = "Sagittarius";
      }
      else if (monthNum == 12 && dayNum > 21){
        calculatedSign = "Capricorn";
      }
      else{
        calculatedSign = null;
      }
      setSign(calculatedSign);
      getHoroscope();  
}



return (
<div>


    {sign == null ? (
    <div className = "horoscopeContainer ml-10 mr-10 mt-10 glass">
    <h1 className = "branded text-white name pt-5 pb-5 pl-2 pr-2 big-text">We couldn't find your sign! Please try again!:</h1>
    </div>):(
    <div>
{showBirthdayInput == true ? (<div></div>):(
  <div className = "horoscopeContainer ml-10 mr-10 mt-10 glass">
  {showHoroscope === false ? 
  (<div><h1 className = "branded text-white name pt-5 pb-5 pl-2 pr-2 big-text">Click on your sign to get your daily horoscope!:</h1></div>)
  :(<div>
    <h1 className = "branded text-white name pt-5 pl-2 pr-2 big-text">{sign}'s Horoscope for {formalDate}:</h1>
    <p className = "text-white pb-5 pt-5 pl-2 pr-2 text-xl">{horoscope}</p></div>)}
    </div>)}


    </div>
    
    
    
    
    
    )}
        

  {showBirthdayInput === false ? (<div></div>):
  (<form className=" p-4 mx-auto text-center ml-10 mr-10 mt-10 glass">
  <div className="flex flex-wrap -mx-1 mb-6">
    <div className="w-full md:w-1/4 lg:w-1/4  px-2 mb-6 md:mb-0">
      <label className = "branded text-white name pt-5 pl-2 pr-2" >Enter Your Birthday:</label>
    </div>
    <div className="w-1/2 md:w-1/4 lg:w-1/4  px-2 mb-6 md:mb-0">
    <select className="block appearance-none w-full bg-white border 
    border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight 
    focus:outline-none focus:bg-white focus:border-gray-500" 
    onChange={(e) => setMonth(e.target.value)}>
          <option value = "0">Month</option>
          <option value = "1">January</option>
          <option value = "2">Feburary</option>
          <option value = "3">March</option>
          <option value = "4">April</option>
          <option value = "5">May</option>
          <option value = "6">June</option>
          <option value = "7">July</option>
          <option value = "8">August</option>
          <option value = "9">September</option>
          <option value = "10">October</option>
          <option value = "11">November</option>
          <option value = "12">December</option>
        </select>
    </div>
    <div className="w-1/2 md:w-1/4 lg:w-1/4  px-2">
    <select className="block appearance-none w-full bg-white 
    border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded 
    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
    onChange={(e) => setDay(e.target.value)}>
          <option value = "0">Day</option>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
          <option value = "5">5</option>
          <option value = "6">6</option>
          <option value = "7">7</option>
          <option value = "8">8</option>
          <option value = "9">9</option>
          <option value = "10">10</option>
          <option value = "11">11</option>
          <option value = "12">12</option>
          <option value = "13">13</option>
          <option value = "14">14</option>
          <option value = "15">15</option>
          <option value = "16">16</option>
          <option value = "17">17</option>
          <option value = "18">18</option>
          <option value = "19">19</option>
          <option value = "20">20</option>
          <option value = "21">21</option>
          <option value = "22">22</option>
          <option value = "23">23</option>
          <option value = "24">24</option>
          <option value = "25">25</option>
          <option value = "26">26</option>
          <option value = "27">27</option>
          <option value = "28">28</option>
          <option value = "29">29</option>
          <option value = "30">30</option>
          <option value = "31">31</option>
        </select>
  </div>
  <div className="w-full md:w-1/4 lg:w-1/4  px-2 mb-6 md:mb-0">
  <button className="text-white py-3 px-7 rounded purple sign-btn" onClick = {(e) => {getSign(e); setShowBirthdayInput(false); setShowHoroscope(true)}}>
    Find My Sign
  </button>
</div>
</div>
</form>)}

  <div className = "grid grid-cols-1 place-items-center mt-20 mb-20" >
  <div className="flip h-[150px] w-[150px] md:h-[170px] md:w-[170px] lg:h-[175px] lg:w-[175px]">
        <div className= {`flip-content rounded-full purple`}>
            <div className="flip-front flex justify-center items-center ">
              <p className = "branded text-7xl">?</p>
            </div>
            <div className= {`flip-back branded name dk-purple rounded-full flex items-center justify-center`}>
              <div>
                <strong className = "hover" onClick = {() => setShowBirthdayInput(true)}>Find My Sign</strong>
              </div>
            </div>
        </div>
    </div>
  </div>

  <div className = "grid grid-cols-2 gap-10 place-items-center mr-10 ml-10  mb-20 md:grid-cols-3 lg:grid-cols-6">
{zodiacSigns.map((sign, index) => 
    <div className="flip h-[150px] w-[150px] md:h-[170px] md:w-[170px] lg:h-[175px] lg:w-[175px]" key = {index} >
        <div className= {`flip-content rounded-full ${sign.frontColor} `}>
            <div className="flip-front flex justify-center items-center ">
            <img src={`${sign.path}`} className = "h-[110px] mt-5 ml-2 md:h-[120px]" />
            </div>
            <div className= {`flip-back branded name ${sign.backColor} rounded-full flex items-center justify-center`}>
              <div>
                <strong className = "hover" onClick = {() => { getHoroscope(); setSign(sign.name); setShowHoroscope(true)}}>{sign.name}</strong>
              </div>
            </div>
        </div>
    </div>)}
</div>

</div>
  )
}
