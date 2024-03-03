
import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import Hero from './scenes/Hero'
import facepic from "./assets/daniel.jpg"
import pts from "./assets/pts.mp4"
import calcdemo from "./assets/calc-demo.mp4"
import chessdemo from "./assets/chess-demo.mp4"
import pigebankDemo from "./assets/short-pigebank-demo.mp4"
import linkedinLogo from "./assets/linkedinLogo.png"
import upworkLogo from "./assets/upwork.png"
import lpLogo from "./assets/LPLogo.png"
import githubLogo from "./assets/github-logo.png"
import SplineView from './scenes/SplineView'
import Gallery from './component/Gallery'


export default function App() {


  const links = [{
    url: "https://pig-e-bank-app.firebaseapp.com/",
    src: pigebankDemo
  }, {
    url: "https://chess-online-deb.firebaseapp.com",
    src: chessdemo
  }, {
    url: "https://calculator-react-example-deb.web.app/",
    src: calcdemo
  }, {
    url: "https://www.youtube.com/watch?v=Ba2qaQILcww&ab_channel=LinearPrintingLLC",
    src: pts
  }] 
  function generateTags(ls) {
    let tags = []
    ls.forEach((l, i) => {
      tags.push(<a href={l.url}>
        <div className="rounded-3xl overflow-hidden">

        <video   src={l.src} loop muted />
        </div>
      </a>
      )
    })

    return tags
  }

  return (
    <main className="app-container">

      {/* <Hero/> */}


      <Gallery tags={generateTags(links)} cardW={500} />



    </main>
  )
}








