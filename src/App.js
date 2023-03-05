import { Row, Col, Button, Layout, Image, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import facepic from "./assets/daniel.jpg"
import './App.css';
import pts from "./assets/pts.mp4"
import calcdemo from "./assets/calc-demo.mp4"
import chessdemo from "./assets/chess-demo.mp4"
import { Footer } from 'antd/es/layout/layout';
import Terminal from "./components/Terminal"

export default function App() {
  const [cycle, setCycle] = useState(1)
  const [deg, setDeg] = useState(0)
  const [turn, setTurn] = useState(0)

  let buttonEffect = document.getElementsByClassName("buttons")
  let videoEffects = document.getElementsByClassName("project-videos")
  const upperDetect = 400
  const lowerDetect = 50
  const videoEffectRes =30
  const cycleSpeed = 10


  useEffect(() => {

    setTimeout(() => {

      try{

      
      
        if(window.scrollY+upperDetect>videoEffects[0].getBoundingClientRect().top+ document.documentElement.scrollTop && window.scrollY+lowerDetect<videoEffects[0].getBoundingClientRect().top+ document.documentElement.scrollTop){
          videoEffects[0].style.setProperty(`box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[0].style.setProperty(`-webkit-box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[0].style.setProperty(` -moz-box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[0].style.setProperty(`border`, `4px #00ff22 solid`) 
        }
        else{
          videoEffects[0].style.setProperty(`box-shadow`, `0px 0px 0px 0px rgba(0,255,34,0.75)`)
          videoEffects[0].style.setProperty(`border`, `3px solid #ff0000`)
        }
      
        if(window.scrollY+upperDetect>videoEffects[1].getBoundingClientRect().top+ document.documentElement.scrollTop && window.scrollY+lowerDetect<videoEffects[1].getBoundingClientRect().top+ document.documentElement.scrollTop){
          videoEffects[1].style.setProperty(`box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[1].style.setProperty(`-webkit-box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[1].style.setProperty(` -moz-box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[1].style.setProperty(`border`, `4px #00ff22 solid`) 
        }
        else{
          videoEffects[1].style.setProperty(`box-shadow`, `0px 0px 0px 0px rgba(0,255,34,0.75)`)
          videoEffects[1].style.setProperty(`border`, `3px solid #ff0000`)
        }
      
        if(window.scrollY+upperDetect>videoEffects[2].getBoundingClientRect().top+ document.documentElement.scrollTop && window.scrollY+lowerDetect<videoEffects[2].getBoundingClientRect().top+ document.documentElement.scrollTop){
          videoEffects[2].style.setProperty(`box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[2].style.setProperty(`-webkit-box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[2].style.setProperty(` -moz-box-shadow`, `0px 0px 130px 50px rgba(0,255,34,0.75)`)
          videoEffects[2].style.setProperty(`border`, `4px #00ff22 solid`) 
        }
        else{
          videoEffects[2].style.setProperty(`box-shadow`, `0px 0px 0px 0px rgba(0,255,34,0.75)`)
          videoEffects[2].style.setProperty(`border`, `3px solid #ff0000`)
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
     // console.log(deg)
      setCycle(cycle * -1)
    }, cycleSpeed)
  }, [cycle])


  return (
    <>
      <Layout className='hero' style={heroStyle} >
        <div className='hero-image'>
          {/* <Terminal/> */}
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
            <Divider className='project-divider' style={projectdivider} orientation="left">Pistol Training System</Divider>
            <p className='project-comments'> A wireless MVP prototype for firearm training using arduino and C#</p>
            <a href='https://github.com/DanielEduardoBarba/Pistol-Training-System'><p style={{fontSize:'3vw'}}>See the Repo!</p></a>
            <a href='https://www.youtube.com/watch?v=Ba2qaQILcww&ab_channel=LinearPrintingLLC'>
              <video className='project-videos' src={pts} playsInline autoPlay loop muted />
            </a>
            <p style={{fontWeight:900, fontSize:'3vw'}}>TAP to see more!</p>
          
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
            <p style={{fontWeight:900, fontSize:'3vw'}}>TAP to PLAY!</p>
          
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
            <p style={{fontWeight:900, fontSize:'3vw'}}>TAP to TRY!</p>
          
          </Col>
        </Row>

      </Layout>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
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




