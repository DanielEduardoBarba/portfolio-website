import { Row, Col, Button, Layout, Image, Divider, Carousel } from 'antd';
import React, { useEffect, useState } from 'react';
import facepic from "./assets/daniel.jpg"
import './App.css';
import pts from "./assets/pts.mp4"
import calcdemo from "./assets/calc-demo.mp4"
import chessdemo from "./assets/chess-demo.mp4"
import Terminal from "./components/Terminal"
import { Footer } from 'antd/es/layout/layout';

export default function App() {
  const [cycle, setCycle] = useState(1)
  const [deg, setDeg] = useState(0)

  let videoHover = document.getElementsByClassName("project-videos")

  useEffect(() => {
    setTimeout(() => {

      try {
        for (let i = 0; i < videoHover.length; i++) {

          videoHover[i].style.setProperty(`background`, `linear-gradient(${deg}deg, #ff0000 0%, #000000 20%)`)
          videoHover[i].style.setProperty(`background`, `-webkit-linear-gradient(${deg}deg, #ff0000 0%, #000000 20%)`)
          videoHover[i].style.setProperty(`background`, `-moz-linear-gradient(`, `)${deg}deg, #ff0000 0%, #000000 20%)`)
          if (deg <= 360) {
           // console.log(deg)
            setDeg(deg + 7)
          }
          else setDeg(1)
        }

      } catch {

      }
      setCycle(cycle * -1)
    }, 50)
  }, [cycle])


  return (
    <>
      <Layout className='heroimage' style={hero}>
        <Row>

          <Col span={20} style={navigation} orientation="right">
            <Button className='buttons' style={buttons} href='https://www.linkedin.com/in/daniel-e-barba/'>LinkedIn</Button>
            <Button className='buttons' style={buttons} href='https://github.com/DanielEduardoBarba?tab=repositories'>Github</Button>
            <Button className='buttons' style={buttons} href='https://www.upwork.com/freelancers/~010d685dd4debfa757'>Upwork</Button>

          </Col>
        </Row>
        <Row gutter={30}>

          <Col span={6} style={profilepic}>
            <Image alt="face pic" className='profile-photo' src={facepic} />
          </Col>

          <Col span={16} style={aboutme}>
            {/* <Terminal/> */}
          </Col>
        </Row>
        <Row>
          <Col span={24} style={aboutme}>
            <h1 className='aboutme'>Hey I'm Daniel!</h1>
            <p className='aboutme'>An upcoming software engineer, with years of experience in prototyping hardware, software, electronics and manufacturing aerospace and industrial components, get in touch with me above! </p>

          </Col>
        </Row>
      </Layout>

      <Layout className='project-layout'>

        <Row className='projects'  >
          <Col >
            <Divider className='project-divider' style={projectdivider} orientation="left">Pistol Training System</Divider>
            <p className='project-comments'> An MVP prototype for firearm training</p>
            <a href='https://github.com/DanielEduardoBarba/Pistol-Training-System'>
              <video className='project-videos' src={pts} playsInline autoPlay loop muted />
            </a>
          </Col>

        </Row>

        <Row className='projects' >
          <Col >

            <Divider className='project-divider' style={projectdivider} orientation="left">Online Chess Game</Divider>
            <p className='project-comments'> Built on React and CSS/HTML with an Express API</p>
            <a href='https://github.com/DanielEduardoBarba/chess-client-react-jsx'>
              <video className='project-videos' src={chessdemo} playsInline autoPlay loop muted />
            </a>
          </Col>
        </Row>

        <Row className='projects' >
          <Col >

            <Divider className='project-divider' style={projectdivider} orientation="left">Simple Calculator</Divider>
            <p className='project-comments'>Built with only state variables on a single React component</p>
            <a href='https://github.com/DanielEduardoBarba/calculator-react-app-example'>
              <video className='project-videos' src={calcdemo} playsInline autoPlay loop muted />
            </a>
          </Col>
        </Row>

      </Layout>
      <Footer style={{ color: "white" }}>@{new Date().getFullYear()} Copyright Daniel Barba</Footer>

    </>
  )
}






const projectdivider = {
  border: 'red',
  color: "white",
}



const hero = {
  color: "white",
  height: "auto",
  paddingInline: 10,
};
const buttons = {

  color: "white",
  height: "auto",
  paddingInline: 10,
  margin: 10,
  backgroundColor: 'transparent'
};
const navigation = {
  textAlign: 'right',
  color: "black",
  height: 64,
  paddingInline: 10,
  lineHeight: '64px',
  margin: "20px",
  backgroundColor: 'transparent',
};
const profilepic = {
  paddingInlin: 50,
  backgroundColor: 'transparent',
};
const aboutme = {
  textAlign: 'right',
  height: "auto",
  paddingInline: 20,
  backgroundColor: 'transparent',
};



