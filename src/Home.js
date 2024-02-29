import * as React from 'react';
import './Home.css';
import Logo from'./image/logo.png';
import Camera from "./image/camera.ico";
import Author from'./image/author.jpg'; 
function Home() {
    return (
      
        <div className="container-fluid  ">
        <div className="row home-container">
          <div className="col-sm-4">
         
          </div>
          <div className="col-sm-4">
          <p className="company-name">V<img src={Logo} alt="logo" className='logo' />2</p>
          </div>
          <div className="col-sm-4">
           
          </div>

        </div>
        <div className="row content-first home-container" >

          
          <div className="col-sm-5" >
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle" >PHOTO</text>
            
          </svg>  
          </div>
          <div className="col-sm-2" >
           <img src={Camera} alt="camera" className='camera' /> 
          </div>
          <div className="col-sm-5" >
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle" >GRAPHY</text>
            
          </svg> 
          </div>
       
          
        </div>
        <div>
        <div className="row ">
        <div className="col-sm-6 home-data">
          <div className='row'>
          <div className='"col-sm-3'>
          <p className="author-name">Agash</p>
          </div>
          <div className='"col-sm-3'>
          <p className='author-job'>PHOTOGRAPHER</p>
          </div>
          </div>
        
       
      
         </div>
         <div className="col-sm-6 home-data2">
          < div className='row'>
           <img src={Author} alt="author" className='author' />
         <div className='"col-sm-2'>
         <p className='home-para1'><i>With each click, I unveil the fleeting moments </i></p> 
         </div>
         <div className='"col-sm-2'>
         <p className='home-para2'><i>Framing life's whispers and distilling its poetry into frames</i> </p>  
         </div>
         <div className='"col-sm-2'>
         <p className='home-para3'>  <i>Illuminating the unseen beauty in the everyday.</i></p>
         </div>
          </div>
       
        
        
      
         </div>

        </div>
        </div>
        </div>
  
    );
  }
  
  export default Home;