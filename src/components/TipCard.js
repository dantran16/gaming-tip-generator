import { Card,  Heading, Badge, CardBody, Text, HStack, CardFooter, Button } from "@chakra-ui/react";
import { experiences, games } from "../dummy";
import { useEffect } from "react";

const TipCard = ({tip}) => {
    const {game_id, title, experience_id, spoilerFree, description } = tip
    const game = games.filter(game => game.id === game_id)[0]
    const experience = experiences.filter(experience => experience.id === experience_id)[0]
    useEffect(() => {
        console.log(tip)
        console.log(game)
        console.log(experience)
    })
    return (
    <Card 
        direction='column' 
        overflow='hidden' 
        variant='outline'
        borderRadius='lg'
        my={3}
        p={4}
    >
        <CardBody>
            <Heading mb={2} size='lg'>{game.label}</Heading>
            <Heading mb={2}size='md'>{title}</Heading>
            <HStack my={2} py={2}>
                <Badge p={2} fontSize='sm' colorScheme={experience.color}>{experience.id}</Badge>
                <Badge p={2} fontSize='sm' colorScheme={spoilerFree ? 'green': 'red'}>{spoilerFree ? 'Spoiler-free' : 'Spoilers included'}</Badge>
            </HStack>
            <Text py={2}>{description}</Text>
        </CardBody>
        <CardFooter py={0}>
            <Button colorScheme='red'>Report Tip</Button>
        </CardFooter>
    </Card>
    )
}

export default TipCard;