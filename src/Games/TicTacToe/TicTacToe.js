import { Nav } from '../../Nav/Nav'
import React, { useRef, useState } from 'react'
import "./TicTacToe.css"

import circle_icon from '../../images/o.png'
import x_icon from '../../images/x.png'

let data = ["","","","","","","","",""] 

export const TicTacToe = () => {

    let [count , setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let box9 = useRef(null)

    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

    const toggle = (e , num) =>{
        if(lock){
            return 0
        }
        if(count%2 === 0){
            e.target.innerHTML = `<img src='${x_icon}' >`
            data[num] = 'x';
            setCount(++count)
        }else{
            e.target.innerHTML = `<img src='${circle_icon}' >`
            data[num] = 'o';
            setCount(++count)
        }
        checkWin();
    }

    const checkWin = () =>{
       if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
        won(data[2])
       }else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
        won(data[5])
       }else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
        won(data[8])
       }else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
        won(data[6])
       }else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
        won(data[7])
       }else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
        won(data[8])
       }else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
        won(data[8])
       }else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
        won(data[6])
       }
    }
    const won = (winner) =>{
        setLock(true)
        if(winner==="x"){
            titleRef.current.innerHTML = `Congratulations : <img src='${x_icon}' />`
        }else{
            titleRef.current.innerHTML = `Congratulations : <img src='${circle_icon}' />`
        }
    }
    const reset = () =>{
        setLock(false)
        data = ["","","","","","","","",""]
        titleRef.current.innerHTML = 'Tic Tac Toe'
        box_array.map((e)=>e.current.innerHTML = "")
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-gradient-to-r from-sky-500 dark:from-sky-950 via-sky-500 dark:via-sky-800 to-yellow-500 dark:to-sky-950 w-[1620px] h-screen'>
                <Nav />
                <h1 className='winner mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-cyan-400 ' ref={titleRef}>Tic Tac Toe </h1>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col justify-center items-center border-4 border-sky-300 dark:border-cyan-500 w-fit'>
                        <div className='row1 flex '>
                            <div ref={box1} className='boxes cursor-pointer dark:bg-cyan-950 bg-sky-600 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-4 border-sky-300 dark:border-cyan-500' onClick={(e)=>{toggle(e,0)}}></div>
                            <div ref={box2} className='boxes cursor-pointer dark:bg-cyan-950 bg-sky-600 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-4 border-sky-300 dark:border-cyan-500' onClick={(e)=>{toggle(e,1)}}></div>
                            <div ref={box3} className='boxes cursor-pointer dark:bg-cyan-950 bg-sky-600 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-4 border-sky-300 dark:border-cyan-500' onClick={(e)=>{toggle(e,2)}}></div>
                        </div>
                        <div className='row2 flex'>
                            <div ref={box4} className='boxes cursor-pointer dark:bg-cyan-950 bg-sky-600 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-4 border-sky-300 dark:border-cyan-500' onClick={(e)=>{toggle(e,3)}}></div>
                            <div ref={box5} className='boxes cursor-pointer dark:bg-cyan-950 bg-sky-600 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-4 border-sky-300 dark:border-cyan-500' onClick={(e)=>{toggle(e,4)}}></div>
                            <div ref={box6} className='boxes cursor-pointer dark:bg-cyan-950 bg-sky-600 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-4 border-sky-300 dark:border-cyan-500' onClick={(e)=>{toggle(e,5)}}></div>
                        </div>
                        <div className='row3 flex'>
                            <div ref={box7} className='boxes cursor-pointer dark:bg-cyan-950 bg-sky-600 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-4 border-sky-300 dark:border-cyan-500' onClick={(e)=>{toggle(e,6)}}></div>
                            <div ref={box8} className='boxes cursor-pointer dark:bg-cyan-950 bg-sky-600 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-4 border-sky-300 dark:border-cyan-500' onClick={(e)=>{toggle(e,7)}}></div>
                            <div ref={box9} className='boxes cursor-pointer dark:bg-cyan-950 bg-sky-600 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-4 border-sky-300 dark:border-cyan-500' onClick={(e)=>{toggle(e,8)}}></div>
                        </div>
                    </div>
                </div>

                <button onClick={() => reset()} className='dark:bg-cyan-600 bg-sky-700 border-sky-800 hover:bg-sky-800 hover:border-sky-700 dark:hover:bg-cyan-500 text-white font-bold sm:py-2 px-4 border-b-4 dark:border-cyan-800 dark:hover:border-cyan-400 rounded mt-12 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14 lg:w-36 lg:h-16 md:text-xl'>Reset</button>
            </div>

        </div>
    )
}