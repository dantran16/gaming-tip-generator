import { Box } from "@chakra-ui/react";
import HeadingOne from "../components/HeadingOne";
import GamesForm from "../components/GamesForm";

const Games = () => (
    <Box p={2} class="games">
        <HeadingOne>Games</HeadingOne>
        <GamesForm />
    </Box>
)

export default Games;