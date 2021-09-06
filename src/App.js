import React from 'react';
import './App.css';
import Header from "./Header";
import Data from './API';

function Card(props)
{
  return(
  <>
  <div className="Card">
    <div>
      <img className="img" alt=".." src={props.pic}/>
    </div>
    <div className="content">
      <p className="p1">NETFLIX ORIGNAL SERIES</p>
      <p className="p2">{props.name}</p>
      <div>
        <a href={props.link} ><button className="btn">WATCH NOW</button></a>
      </div>
    </div>
    </div>
  </>)
}

console.log(Data[0].name);
function App() {
  return (
    <>
  <Header/>
  <main>
  {Data.map((val,i)=>{
    return(<Card 
    key = {i+1}
    name = {val.name}
    pic = {val.Imp}
    link = {val.link} 
    />
    )
  }
  )}</main>
 </>);
}

export default App;
