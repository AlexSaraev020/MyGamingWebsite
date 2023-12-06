import { Nav } from '../../Nav/Nav';
import dices from '../../images/dices2.png'
import { useState, useRef } from 'react';

export const GuessTheNumber = () => {

    const [number, setNumber] = useState(0)
    const [inputValue, setInputValue] = useState('')


    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Actualizează starea cu noua valoare din input
    };

    let titleRef = useRef(null)

    const handleRandomizer = () => {
        const randomNumber = Math.floor(Math.random() * 101);
        setNumber(randomNumber);
        if (titleRef.current) {
          titleRef.current.innerHTML = 'I chose the number, guess it';
        }
      };

    const verifyNumber = () => {
        if (inputValue > number) {
            titleRef.current.innerHTML = 'Lower'
        }else if(inputValue < number){
            titleRef.current.innerHTML = 'Higher'
        }else{
            titleRef.current.innerHTML = `You guessed the number : ${number} `
        }
    }


    return (
        <div className='flex items-center justify-center'>
            <div className='bg-gradient-to-r from-sky-500 dark:from-sky-950 via-sky-500 dark:via-sky-800 to-yellow-500 dark:to-sky-950 w-[1620px] h-screen'>
                <Nav />
                <div className=' flex flex-col items-center justify-center w-full '>
                    <div className=' w-72 sm:w-80 md:w-96'>
                        <h2 className='text-3xl font-bold font-serif mb-8 mt-4 text-cyan-300'>Guess The Number Game</h2>
                        <div ref={titleRef} className='bg-inherit h-80 sm:h-96 border-4 text-cyan-300 text-2xl font-bold dark:border-cyan-500 flex justify-center items-center font-serif'>Start randomize by pressing the dice button</div>
                        <form class="w-full max-w-sm">
                            <div class="flex flex-col items-center">

                                <input value={inputValue} onChange={handleInputChange} class="appearance-none h-12 pl-2 bg-transparent border-4 border-t-0 dark:border-cyan-500 w-full text-cyan-500 font-bold leading-tight focus:outline-none" type="number" placeholder="Add number" />
                                <div className='flex items-center justify-center w-full mt-2'>
                                    <button onClick={()=>verifyNumber()} class=" font-serif h-16 sm:h-24 w-[184px] bg-gradient-to-r from-yellow-400 dark:from-cyan-500 hover:from-yellow-300 mr-2 dark:bg-cyan-500 dark:hover:from-cyan-400 dark:hover:to-cyan-400 text-2xl text-white py-2 px-3  font-bold shadow-2xl" type="button">
                                        Guess
                                    </button>
                                    <button onClick={() => handleRandomizer()} class="h-16 sm:h-24 w-[184px] bg-gradient-to-l dark:from-cyan-500 from-yellow-400 ml-2 flex items-center justify-center hover:from-yellow-300 dark:bg-cyan-500 dark:hover:from-cyan-400 dark:hover:to-cyan-400 text-sm text-white py-2 px-3  font-bold shadow-2xl" type="button">
                                        <img className='w-20' src={dices} alt='randomize' />
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}