import { Row, Col, Button, Layout, Image, Divider } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import React, { useEffect, useState, useRef } from 'react';
import facepic from "./assets/daniel.jpg"
import pts from "./assets/pts.mp4"
import calcdemo from "./assets/calc-demo.mp4"
import chessdemo from "./assets/chess-demo.mp4"
import pigebankDemo from "./assets/short-pigebank-demo.mp4"
import './App.css';
import linkedinLogo from "./assets/linkedinLogo.png"
import upworkLogo from "./assets/upwork.png"
import lpLogo from "./assets/LPLogo.png"


export default function App() {
  const [cycle, setCycle] = useState(1)
  const [deg, setDeg] = useState(0)
  const [turn, setTurn] = useState(0)

  let buttonEffect = document.getElementsByClassName("buttons")
  let videoEffects = document.getElementsByClassName("project-videos")

  const shift = useRef(window.innerHeight).current/2
  const borderCapture = 70

  const videoEffectRes =60
  const cycleSpeed = 10


  useEffect(() => {

    setTimeout(() => {

      try{

      
      if(window.scrollY>5){
        for(let i=0;i<4;i++){
        if(window.scrollY+shift>videoEffects[i].getBoundingClientRect().top+document.documentElement.scrollTop-borderCapture 
        && window.scrollY+shift<videoEffects[i].getBoundingClientRect().bottom+document.documentElement.scrollTop+borderCapture ){
          videoEffects[i].style.setProperty(`box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[i].style.setProperty(`-webkit-box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[i].style.setProperty(` -moz-box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[i].style.setProperty(`border`, `4px #00ff22 solid`) 
        }
        else{
          videoEffects[i].style.setProperty(`box-shadow`, `0px 0px 0px 0px rgba(0,255,34,0.75)`)
          videoEffects[i].style.setProperty(`border`, `3px solid #ff0000`)
        }
      }}else{
        videoEffects[0].style.setProperty(`box-shadow`, `0px 0px 0px 0px rgba(0,255,34,0.75)`)
        videoEffects[0].style.setProperty(`border`, `3px solid #ff0000`)
      }
    
      }catch{

      }

      try {
            if (deg+videoEffectRes <= 360) setDeg(deg + videoEffectRes)
            else{
                setDeg(deg-360+videoEffectRes)
                if(turn<40) setTurn(turn+1)
                else setTurn(0)
            } 
            let color = `#ff0000`
            if(turn===0) color = `#0072b1`
            else if(turn===1) color = `#6e5494`
            else if(turn===2) color = `#14a800`
            else if(turn===4) color = `#9a902e`
            
           if(turn < buttonEffect.length) buttonEffect[turn].style.setProperty(`background`, `linear-gradient(${deg}deg, ${color} 0%, #000000 70%)`)
      } catch {
        
      }
    
      setCycle(cycle * -1)
    }, cycleSpeed)
  }, [cycle])


  return (
    <>
      <Layout className='hero' style={heroStyle} >
        <div className='hero-image'>
         
          </div>
        <Row>

          <Col span={24} >
            <Button className='buttons' href='https://www.linkedin.com/in/daniel-e-barba/'>LinkedIn</Button>
            <Button className='buttons' href='https://github.com/DanielEduardoBarba?tab=repositories'>Github</Button>
            <Button className='buttons' href='https://www.upwork.com/freelancers/~010d685dd4debfa757'>Upwork</Button>
            <Button className='buttons' href='mailto:danieleduardobarba@gmail.com'>Email</Button>
            <Button className='buttons' href='https://www.linearprototypes.com/'>Business</Button>
          </Col>
        </Row>
        <br/>
        

        <Row >

          <Col span={10} style={profilepic}>
            <Image alt="face pic" className='profile-photo' src={facepic} />
          </Col>

          
          <Col span={14}className='aboutme' >
            <h1>Hey I'm Daniel!</h1>
            <p >I'm an engineer in practice and an inventor at heart, with years of experience in prototyping hardware, software, electronics and manufacturing aerospace and industrial components, let's make your idea come alive!</p>
            <h2 style={{fontSize:"4vw"}}>Contact me above!</h2>

          </Col>
        </Row>
        
      </Layout>

      <Layout className='project-layout'>

      <Row className='projects'  >
          <Col >
            <Divider className='project-divider' style={projectdivider} orientation="left">Pig E Bank</Divider>
            <p className='project-comments'> A finance and chore tracking app for kids!</p>
            <a href='https://github.com/DanielEduardoBarba/pig-e-bank-app'><p style={{fontSize:'3vw'}}>See the Repo!</p></a>
            <a href='https://pig-e-bank-app.firebaseapp.com/'>
              <video className='project-videos' src={pigebankDemo} playsInline autoPlay loop muted />
            </a>
            <p style={{fontWeight:900, fontSize:'4vw'}}>TAP to TRY!</p>
          
          </Col>

        </Row>

        <Row className='projects' >
          <Col >

            <Divider className='project-divider' style={projectdivider} orientation="left">Online Chess Game</Divider>
            <p className='project-comments'> Built on React and CSS/HTML with an Express API</p>
            <a href='https://github.com/DanielEduardoBarba/chess-client-react-jsx'><p style={{fontSize:'3vw'}}>See the Repo!</p></a>
            <a href='https://chess-online-deb.firebaseapp.com'>
              <video className='project-videos' src={chessdemo} playsInline autoPlay loop muted />
            </a>
            <p style={{fontWeight:900, fontSize:'4vw'}}>TAP to PLAY!</p>
          
          </Col>
        </Row>

        <Row className='projects' >
          <Col >

            <Divider className='project-divider' style={projectdivider} orientation="left">Simple Calculator</Divider>
            <p className='project-comments'>Built with only state variables on a single React component</p>
            <a href='https://github.com/DanielEduardoBarba/calculator-react-app-example'><p style={{fontSize:'3vw'}}>See the Repo!</p></a>
            <a href='https://calculator-react-example-deb.web.app/'>
              <video className='project-videos' src={calcdemo} playsInline autoPlay loop muted />
            </a>
            <p style={{fontWeight:900, fontSize:'4vw'}}>TAP to TRY!</p>
          
          </Col>
        </Row>

        <Row className='projects'  >
          <Col >
            <Divider className='project-divider' style={projectdivider} orientation="left">Pistol Training System</Divider>
            <p className='project-comments'> A wireless MVP prototype for firearm training using arduino and C#</p>
            <a href='https://github.com/DanielEduardoBarba/Pistol-Training-System'><p style={{fontSize:'3vw'}}>See the Repo!</p></a>
            <a href='https://www.youtube.com/watch?v=Ba2qaQILcww&ab_channel=LinearPrintingLLC'>
              <video className='project-videos' src={pts} playsInline autoPlay loop muted />
            </a>
            <p style={{fontWeight:900, fontSize:'4vw'}}>TAP to see more!</p>
          
          </Col>
        </Row>

        <Row className='projects'  >
          <Col >
      <div className='footer-base'>
      <a href='https://www.linkedin.com/in/daniel-e-barba/'>
        <img className='footer-logo' src={linkedinLogo}/>
        </a>

        <a href='https://www.linearprototypes.com/'>
        <img className='footer-logo' src={lpLogo}/>
        </a>

        <a href='https://www.upwork.com/freelancers/~010d685dd4debfa757'>
        <img className='footer-logo' src={upworkLogo}/>
        </a>
      </div>
      </Col>
        </Row>

      </Layout>
      <Footer style={{ color: "white", margin:10}}>@{new Date().getFullYear()} Copyright Daniel Barba</Footer>

    </>
  )
}






const projectdivider = {
  border: 'red',
  color: "white",
}

const heroStyle={
  padding: 10
}




const profilepic = {
  paddingInlin: 50,
  backgroundColor: 'transparent',
};




