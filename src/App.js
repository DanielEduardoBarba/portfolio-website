import { Row, Col, Button, Layout, Image, Divider, Carousel } from 'antd';
import React from 'react';
import facepic from "./assets/daniel.jpg"
import './App.css';
import pts from "./assets/pts.mp4"
import calcdemo from "./assets/calc-demo.mp4"
import chessdemo from "./assets/chess-demo.mp4"
import Terminal from "./components/Terminal"
import { Footer } from 'antd/es/layout/layout';

export default function App() {
 
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
             <Terminal/>
          </Col>
        </Row>
        <Row>
        <Col span={24} style={aboutme}>
            <h1 className='aboutme'>Hey I'm Daniel!</h1>
            <p className='aboutme'>An upcoming software engineer, with years of experience in prototyping hardware, software, electronics and manufacturing aerospace and industrial components, get in touch with me above! </p>
         
          </Col>
        </Row>
      </Layout>

      <Layout style={project1}>

      <Row className='project1'  gutter={5}>
        <Col span={24} >
              <Divider className='project1divider' style={project1divider} orientation="left">Pistol Training System</Divider>
              <p className='project1comment'> An MVP prototype for firearm training</p>
              <a href='https://github.com/DanielEduardoBarba/Pistol-Training-System'>
                <video className='project1video' src={pts} playsInline autoPlay loop muted />
                </a>
        </Col>

      </Row>

      <Row className='project2' >
        <Col span={24} >
              
            <Divider className='project2divider' style={project2divider} orientation="right">Online Chess Game</Divider>
              <p className='project2comment'> Built on React and CSS/HTML with an Express API</p>
              <a href='https://github.com/DanielEduardoBarba/chess-client-react-jsx'>
                <video className='project2video' src={chessdemo} playsInline autoPlay loop muted />
                </a> 
        </Col>
      </Row>

      <Row className='project3' >
        <Col span={24} >
              
            <Divider className='project3divider' style={project2divider} orientation="right">Simple Calculator</Divider>
              <p className='project3comment'>Built with only state variables on a single React component</p>
              <a href='https://github.com/DanielEduardoBarba/calculator-react-app-example'>
                <video className='project3video' src={calcdemo} playsInline autoPlay loop muted />
                </a> 
        </Col>
      </Row>

      </Layout>
      <Footer style={{color: "white"}}>@{new Date().getFullYear()} Copyright Daniel Barba</Footer>

    </>
  )
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const project2divider = {
  border: 'red',
  color: "white",
}

const project2comment = {
  color: "blue",
  height: "auto",
  paddingInline: 10,
};
const project2 = {

};
const project1divider = {
  border: 'red',
  color: "white",
}

const project1comment = {
  color: "blue",
  height: "auto",
  paddingInline: 10,
};
const project1 = {

};
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



