import './App.css';
import Logo from './Components/Logo/Logo';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import React, { useEffect} from 'react';
import { tsParticles } from 'tsparticles';
function App() {

  useEffect(() => {
    const initParticles = async () => {
      await tsParticles.load("tsparticles", {
        /* your options here */
        // background: {
        //   color: {
        //     value: "#0d47a1"
        //   }
        // },
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce"
            }
          },
          number: {
            value:90,
            density: {
              enable: true,
              area: 800
            }
          },
          opacity: {
            value: 0.7
          },
          shape: {
            type: "circle"
          },
          size: {
            value: {
              min: 1,
              max: 6
            }
          }
        },
        detectRetina: true
      });
    };

    initParticles();
  }, []);
  return (
    <div className="container-fluid">
      <Logo/>
      <div id="tsparticles" className="tsparticles" />
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
