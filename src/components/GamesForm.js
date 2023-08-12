import { useState } from "react";
import { FormControl, FormLabel, Box } from "@chakra-ui/react"
import AsyncSelect from 'react-select/async';
import GameCard from "./GameCard";

const GamesForm = ({games}) => {
    const [gameSearchInput, setGameSearchInput] = useState('');
    const [gameInput, setGameInput] = useState('')

    const filterGames = (inputValue) => {
        return games.filter(game => game.label.toLowerCase().includes(inputValue.toLowerCase()))
    }
    
    const loadFilteredGames = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterGames(inputValue))
        }, 500)
    }
    const handleGameSelect = (game) => {
        setGameInput(game)
        setGameSearchInput(game.label)
    }
    const handleKeyDown = (e) => {
        setGameSearchInput(e.target.value)
        if(gameSearchInput.length){
            setGameInput('')
        }
    }

    const renderGames = () => {
        return (
            <Box>
                {games
                    .filter(game => game.label.toLowerCase().includes(gameSearchInput.toLowerCase()))
                    .map(filteredGame => {
                        return <GameCard id={filteredGame._id} key={filteredGame._id} title={filteredGame.label} description={filteredGame.description}/>
                    })
                }
            </Box>
        )
    }

    return (
        <Box>
            <FormControl my={4}>
                <FormLabel>Find your Game</FormLabel>
                <AsyncSelect 
                    placeholder="Select your game..." 
                    cacheOptions 
                    loadOptions={loadFilteredGames} 
                    defaultOptions={games}
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