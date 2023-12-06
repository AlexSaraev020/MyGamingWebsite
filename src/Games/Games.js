import { Link } from 'react-router-dom';
import tictactoe from '../images/tictactoe.png'
import rockpaperscissors from '../images/rockpaperscissors.png'
import guessthenumber from '../images/guessmynumber.jpg'

export const GamesDiv = () => {
    return (
        <div className="flex items-center justify-center">
            <section className="bg-inherit  w-fit relative flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center">
                <div className="mt-8 px-4 sm:px-8 md:px-12 lg:px-16">
                    <Link to='/tictactoe'>
                        <img alt="Tic Tac Toe" className="w-40 sm:w-44 md:w-52 lg:w-60 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1" src={tictactoe} />
                    </Link>

                </div>
                <div className="mt-8 px-4 sm:px-8 md:px-12 lg:px-16">
                    <Link to='/rockpaperscissors'>
                        <img alt="Rock Paper Scissors" className="border-8 border-transparent dark:border-cyan-500 w-40 sm:w-44 md:w-52 lg:w-60 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1" src={rockpaperscissors} />
                    </Link>
                </div>
                <div className="mt-8 px-4 sm:px-8 md:px-12 lg:px-16">
                    <Link to='/guessthenumber'>
                        <img alt="guessthenumber" className="border-8 border-transparent dark:border-cyan-500 w-40 sm:w-44 md:w-52 lg:w-60 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1" src={guessthenumber} />
                    </Link>
                </div>
            </section>
        </div>
    )
}
