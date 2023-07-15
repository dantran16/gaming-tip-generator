import { Card, CardFooter, CardBody, Image, Stack, Heading, Text, Button } from "@chakra-ui/react"

const GameCard = ({title, description}) => {
    return (
        <Card 
            direction='row' 
            overflow='hidden' 
            variant='outline'
            borderRadius='lg'
            my={3}>
            <Image 
                objectFit='cover' 
                maxW='200px'
                src={process.env.PUBLIC_URL + '/placeholder.webp'}
                alt={title}
                />
            <Stack>
                <CardBody>
                    <Heading size='md'>{title}</Heading>
                    <Text py='2'>
                        {description}
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button variant='solid' colorScheme='red'>
                        Report Game
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )

}

export default GameCard