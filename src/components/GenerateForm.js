import { useState, useEffect } from "react";
import { Button,FormControl, FormLabel, Checkbox, FormHelperText, Box, Select } from "@chakra-ui/react"
import AsyncSelect from 'react-select/async';
import { games, experiences } from "../dummy";

const renderExperiences = experiences.map(experience => (
    <option value={experience.value}>{experience.label}</option>
))


const GenerateForm = () => {
    const [formValues, setFormValues] = useState({
        game: '',
        experience: '',
        spoilerFree: false,
        newTips: false
    });

    const filterGames = (inputValue) => {
        return games.filter(game => game.label.toLowerCase().includes(inputValue.toLowerCase()))
    }
    
    const loadGames = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterGames(inputValue))
        }, 1000)
    }
    const handleGameSelect = (newGame) => {
        setFormValues((prevFormValues) => {
            return {
                ...prevFormValues, 
                game: newGame
            }
        })
    }
    const handleExperienceSelect = (e) => {
        setFormValues((prevFormValues) => {
            return {
                ...prevFormValues,
                experience: e.target.value
            }
        })
    }
    const handleSpolilerFreeToggle = (e) => {
        setFormValues((prevFormValues) => {
            return {
                ...prevFormValues,
                spoilerFree: e.target.checked
            }
        })
    }

    const handleNewTipsToggle = (e) => {
        setFormValues((prevFormValues) => {
            return {
                ...prevFormValues,
                newTips: e.target.checked
            }
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
    }

    useEffect(() =>{
        console.log(formValues)
    })
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl my={4} isRequired>
                    <FormLabel>Game</FormLabel>
                    <AsyncSelect 
                        placeholder="Select your game..." 
                        cacheOptions 
                        loadOptions={loadGames} 
                        defaultOptions
                        value={formValues.game}
                        onChange={handleGameSelect}
                    />
                </FormControl>
                <FormControl my={4}>
                    <FormLabel>How far are you in the game?</FormLabel>
                    <Select 
                        value={formValues.experience} 
                        onChange={handleExperienceSelect} 
                        placeholder="Select your experience...">
                        {renderExperiences}
                    </Select>
                    <FormHelperText>e.g. Beginner - less than 30% of the game</FormHelperText>
                </FormControl>
                <FormControl my={4}>
                    <Checkbox value={formValues.spoilerFree} onChange={handleSpolilerFreeToggle}>Spoiler Free Only?</Checkbox>
                </FormControl>
                <FormControl my={4}>
                    <Checkbox value={formValues.newTips} onChange={handleNewTipsToggle}>Tips you haven't seen yet?</Checkbox>
                </FormControl>
                <Button 
                    isDisabled={!formValues.game.value}
                    width='100%' 
                    my={4} 
                    colorScheme={formValues.game.value ? "green" : "gray" }
                    variant='solid'
                    type='submit'>
                    Generate Gaming Tip
                </Button>
            </form>
        </Box>
    )
}

export default GenerateForm