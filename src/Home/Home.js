import { GamesDiv } from "../Games/Games"
import { Hero } from "../HeroSection/Hero"
import { Nav } from '../Nav/Nav';

export const Home = () => {
    return (
        <div className="flex items-center justify-center relative z-0">
            <div className="pb-10 min-[376px]:h-screen bg-gradient-to-r from-sky-500 dark:from-sky-950 via-sky-500 dark:via-sky-800 to-yellow-500 dark:to-sky-950 w-full ">
                <Nav />
                <Hero />
                <GamesDiv />               
            </div>
            
        </div>
    )
}