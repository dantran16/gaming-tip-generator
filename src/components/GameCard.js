import { Card, CardBody, Image, Stack, Heading, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const GameCard = ({id, title, description}) => {
    return (
        <Link to={`/games/${id}`}>
            <Card 
                direction={{ base: 'column', md: 'row' }}
                overflow='hidden' 
                variant='outline'
                borderRadius='lg'
                flexWrap={{ base: 'wrap', md: 'nowrap' }}
                my={3}>
                <Image 
                    objectFit='cover' 
                    maxW={{ base: '100%', md: '450px' }}
                    src={process.env.PUBLIC_URL + '/placeholder.webp'}
                    alt={title}
                    />
                <Stack>
                    <CardBody>
                        <Heading size='lg'>{title}</Heading>
                        <Text py='2'>
                            {description}
                        </Text>
                    </CardBody>
                    {/* <CardFooter>
                        <Button colorScheme='red'>
                            Report Game
                        </Button>
                    </CardFooter> */}
                </Stack>
            </Card>
        </Link>
    )

}

export default GameCard