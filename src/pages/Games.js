import { Box } from "@chakra-ui/react";
import HeadingOne from "../components/HeadingOne";
import GamesForm from "../components/GamesForm";

const Games = ({games}) => (
    <Box p={2} className="games">
        <HeadingOne>Games</HeadingOne>
        <GamesForm games={games}/>
    </Box>
)

export default Games;