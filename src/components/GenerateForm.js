import { useState, useEffect } from "react";
import {
  useToast,
  Button,
  FormControl,
  FormLabel,
  Checkbox,
  FormHelperText,
  Box,
  Select,
  Accordion,
  AccordionItem,
  Heading,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import AsyncSelect from "react-select/async";


const GenerateForm = ({ setTipHistory, games, experiences, tipHistory }) => {
  const [formValues, setFormValues] = useState({
    game: "",
    experience: "",
    spoiler_free: false,
    newTips: false,
  });
  const [gamingTips, setGamingTips] = useState([])


  const loadGamingTips = async () => {
    const response = await fetch('http://127.0.0.1:8000/tips');
    const gamingTips = await response.json();
    setGamingTips(gamingTips);
  } 
  
  const renderExperiences = experiences.map((experience) => (
    <option value={experience.level}>{experience.label}</option>
  ));

  const toast = useToast();
  const renderErrorMessage = (errMessage) =>
    toast({
      title: "Failed to get more tips",
      description: errMessage,
      status: "error",
      duration: 2000,
      isClosable: true,
    });

  const filterGames = (inputValue) => {
    return games.filter((game) =>
      game.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadFilteredGames = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterGames(inputValue));
    }, 1000);
  };
  const handleGameSelect = (newGame) => {
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        game: newGame,
      };
    });
  };
  const handleExperienceSelect = (e) => {
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        experience: e.target.value,
      };
    });
  };
  const handleSpolilerFreeToggle = (e) => {
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        spoiler_free: e.target.checked,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredTips = gamingTips
      .filter((tip) => tip.game_id === formValues.game._id)
      .filter(
        (tip) =>
          formValues.experience === "" || tip.experience_id === experiences.filter(
            (experience) => experience.level === formValues.experience
          )[0]._id
      )
      .filter(
        (tip) =>
          !formValues.spoiler_free || formValues.spoiler_free === tip.spoiler_free
      )
      .filter(
        (tip) => 
          !tipHistory.find(oldTip => tip._id === oldTip._id)
      );
    if (filteredTips.length) {
      const newTip =
        filteredTips[Math.floor(Math.random() * filteredTips.length)];
      setTipHistory((prev) => {
        return [newTip, ...prev];
      });
    } else {
      renderErrorMessage(
        `We have failed to get any more tips for the game ${formValues.game.label}`
      );
    }
  };

  useEffect(() => {
    loadGamingTips()
    
  }, [])

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl my={4} isRequired>
          <FormLabel>Game</FormLabel>
          <AsyncSelect
            placeholder="Select your game..."
            cacheOptions
            loadOptions={loadFilteredGames}
            defaultOptions={games}
            value={formValues.game}
            onChange={handleGameSelect}
          />
        </FormControl>
        <Accordion allowToggle>
          <AccordionItem p={2}>
            <Heading as="h3" fontSize={18}>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Filter Options
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
            <FormControl my={4}>
                <FormLabel>How far are you in the game?</FormLabel>
                <Select
                value={formValues.experience}
                onChange={handleExperienceSelect}
                placeholder="Select your experience..."
                >
                {renderExperiences}
                </Select>
                <FormHelperText>
                e.g. Beginner - less than 30% of the game
                </FormHelperText>
            </FormControl>
            <FormControl my={4}>
                <Checkbox
                value={formValues.spoiler_free}
                onChange={handleSpolilerFreeToggle}
                >
                Spoiler Free Only?
                </Checkbox>
            </FormControl>
            </AccordionPanel>
            
          </AccordionItem>
        </Accordion>

        {/* <FormControl my={4}>
                    <Checkbox value={formValues.newTips} onChange={handleNewTipsToggle}>Tips you haven't seen yet?</Checkbox>
                </FormControl> */}
        <Button
          isDisabled={!formValues.game.value}
          width="100%"
          my={4}
          colorScheme={formValues.game.value ? "green" : "gray"}
          variant="solid"
          type="submit"
        >
          Generate Gaming Tip
        </Button>
      </form>
    </Box>
  );
};

export default GenerateForm;
