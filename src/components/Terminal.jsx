import React, { useState, useEffect } from "react"
import { code } from "../assets/code.js"
import keyboard from "../assets/keyboard.wav"
import "./Terminal.css"

function playKeyboard() {
    new Audio(keyboard).play()
}

let intensity=20
const typeSpeed=1
export default function Terminal() {
    const [terminal, setTerminal] = useState(code)
    const [cursor, setCursor] = useState(code.length-1)
    const [blinker, setBlinker] = useState(0)
    const [tick, setTick] = useState(1)
   

    let keyClick = document.getElementsByClassName('terminalBody')[0]

    useEffect(() => {
        setTimeout(()=>{
          try{
            
            if(tick==1){
              
              keyClick.style.setProperty('box-shadow', `0px 0px 30px ${intensity}px rgba(19, 194, 66, 1)`)
              keyClick.style.setProperty('-webkit-box-shadow', `0px 0px 30px ${intensity}px rgba(19, 194, 66, 1)`)
              keyClick.style.setProperty('-moz-box-shadow', `0px 0px 30px ${intensity}px rgba(19, 194, 66, 1)`)
      
             }
             else{
               
               keyClick.style.setProperty('box-shadow', `0px 0px 20px 5px rgba(19, 194, 66, 1)`)
               keyClick.style.setProperty('-webkit-box-shadow', `0px 0px 20px 5px rgba(19, 194, 66, 1)`)
               keyClick.style.setProperty('-moz-box-shadow', `0px 0px 20px 5px rgba(19, 194, 66, 1)`)
         
             }
           }catch{
             
           }
           setTick(tick*-1)
       },typeSpeed)
   
     
     }, [tick])


    useEffect(() => {

        // console.log(terminal)

        if (code[cursor]) {

            //setTimeout(() => {

                if (code[cursor] == " ") setTerminal(terminal + String.fromCharCode(160))
                else setTerminal(terminal + code[cursor])
                setCursor(cursor + 1)
           // }, typeSpeed)

        }
        //end of string blinking function
        else {
            if (blinker) {
                setTimeout(() => {
                    setTerminal(terminal + "|")
                    setBlinker(0)
                    if(tick!=0) setTick(0)
                }, 500)
            }
            else {
                setTimeout(() => {
                    setTerminal(terminal.substring(0, terminal.length - 1))
                    setBlinker(1)
                }, 500)
            }


        }

    }, [terminal])

  

    return (
        <>
            <div className="terminalBody" >
                <p className="terminalData" onClick={()=>{playKeyboard()}}>{terminal}</p>

            </div>
        </>
    )
}