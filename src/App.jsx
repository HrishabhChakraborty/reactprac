import React from 'react';
import $ from 'jquery';
import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'


const App = () => {
  
  useEffect(() => {
    $('.button').on("click",() => {
      //$('.height-div').css('height', '300px')
      $( ".height-div" ).toggle(() => {
        
      });
    })
  });

  useEffect(() => {
    $('.button2').on("click",() => {
      //$('.height-div').css('height', '300px')
      $( ".height-div2" ).toggle(() => {
        
      });
    })
  });
  

  return (
    <>
     <div style={{display:"inline-block", marginRight:"20px"}}>
     <button className="button">click to change div height</button>
     <div>
     <img className="height-div" src={reactLogo} width="100" height="123"></img>
     </div>
      </div>

      <div style={{display:"inline-block"}}>
     <button className="button2">click to change div height</button>
     <div>
     <img className="height-div2" src={viteLogo} width="100" height="123"></img>
     </div>
     </div>
    </>
  )
}

export default App
