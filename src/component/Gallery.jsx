import { useEffect, useRef, useState } from "react"


export default function Gallery({ w, h, cardH, cardW = 500, tags }) {
    const [max, setMax] = useState(0)
    const [pos, setPos] = useState(0)
    const [sel, setSel] = useState(0)
    const [goto, setGoto] = useState(0)
    const [isAuto, setIsAuto] = useState(true)

    const autoRef = useRef(null)
    useEffect(() => {
        const div = document.getElementById('gallery-scroll')
        const _max = div.scrollWidth - div.clientWidth
        setMax(_max)

        // autoRef.current = setInterval(scrollToRandom, 1000)

        div.addEventListener('scroll', scrollHandler)
        // div.addEventListener('mousedown', handleMouse)
        return () => {
            // div.addEventListener('mousedown', handleMouse)
            div.addEventListener('scroll', scrollHandler)
        }
    }, [])

    // useEffect(() => {
    //     if (sel === goto) scrollToRandom()
    //     else setGoto(sel)
    // }, [sel])
    // useEffect(() => {
    //     // let _ = (_i * (max / tags.length) + (cardW / 2))
    //     console.log("GOTO", goto)
    // }, [goto])

    // function scrollToRandom() {
    //     const _i = Math.floor(Math.random() * tags.length)
    //     setSel(_i)
    // }

    // function handleMouse(event) {
    //     setIsAuto(false)


    //     clearInterval(autoRef.current)

    // }

    function scrollHandler(event) {
        const div = event.target
        const _pos = div.scrollLeft
        setPos(_pos)
    }

    function gallery(tags) {

        let sects = []
        // sects.push(<div key={-1} style={{
        //     height: cardH ? cardH : "100%",
        //     width: cardW ? cardW : "100%",
        //     minWidth: cardW ? cardW : "100%", 
        // }} className=" "/>)
        tags.forEach((tag, i) => {
            const targetPos = (i * (max / tags.length) + (cardW / 2))
            const delta = targetPos - pos
            const deltaPositive = Math.sqrt(delta * delta)
            const deltaLocal = deltaPositive < cardW ? deltaPositive : cardW
            const spotLight = Number(1 - (deltaLocal / cardW)).toFixed(3)//vallue between 0-1

            sects.push(<div key={i} style={{ 
                minHeight: cardH ? cardH : "100%",
                width: cardW ? cardW : "100%",
                minWidth: cardW ? cardW : "100%",
                opacity: spotLight,
                transform: `scale(${spotLight>.4?spotLight:.4})`
            }} className="relative  rounded-3xl  ">
                <div className="h-full flex flex-col justify-center align-center items-center ">

                {tag}
                </div>
               

            </div>)
        })
        // sects.push(<div key={-2} style={{
        //     height: cardH ? cardH : "100%",
        //     width: cardW ? cardW : "100%",
        //     minWidth: cardW ? cardW : "100%", 
        // }} className="relative  " />)
        return sects
    }
    return (
        <div id="gallery-scroll" style={{
            height: h ? h : "",
            width: w ? w : "100%",
            paddingInline: cardW,
            animationDuration: '1s'
        }} className="flex flex-row  overflow-x-scroll duration-2000 transition-all ">
            {/* <div className="flex flex-row  border-8 border-red-500"> */}

            {
                tags.length
                    ? gallery(tags)
                    : null
            }
            {/* </div> */}
        </div>

    )
}