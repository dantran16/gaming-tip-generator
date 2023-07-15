import { useState, useEffect } from "react";
import { FormControl, FormLabel, Box } from "@chakra-ui/react"
import AsyncSelect from 'react-select/async';
import { games } from "../dummy";
import GameCard from "./GameCard";

const GamesForm = () => {
    const [gameSearchInput, setGameSearchInput] = useState('');
    const [gameInput, setGameInput] = useState('')

    const filterGames = (inputValue) => {
        return games.filter(game => game.label.toLowerCase().includes(inputValue.toLowerCase()))
    }
    
    const loadGames = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterGames(inputValue))
        }, 1000)
    }
    const handleGameSelect = (game) => {
        setGameInput(game)
        setGameSearchInput(game.label)
    }
    const handleKeyDown = (e) => {
        setGameSearchInput(e.target.value)
    }
    useEffect(() =>{
        console.log(gameSearchInput)
    })

    const renderGames = () => {
        return (
            <Box>
                {games
                    .filter(game => game.label.toLowerCase().includes(gameSearchInput.toLowerCase()))
                    .map(filteredGame => {
                        return <GameCard key={filteredGame.label} title={filteredGame.label} description={filteredGame.description}/>
                    })
                }
            </Box>
        )
    }

    return (
        <Box>
            <FormControl my={4} isRequired>
                <FormLabel>Game</FormLabel>
                <AsyncSelect 
                    placeholder="Select your game..." 
                    cacheOptions 
                    loadOptions={loadGames} 
                    defaultOptions
                    value={gameInput}
                    onChange={handleGameSelect}
                    onKeyDown={handleKeyDown}
                />
            </FormControl>
            {renderGames()}
        </Box>
    )
}

export default GamesForm