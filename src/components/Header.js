
import { Box, Container, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom"

const Header = () => (
    <Box
      as="nav"
      zIndex={1}
    >
      <Container display="flex" p={2} my={4} maxW="container.xl" wrap="wrap" align="center" justify="space-between">
        <Stack
          direction='row'
          display='flex'
          width={'full'}
          gap={10}
          fontSize={24}
          fontWeight={700}
        >
            <Link to="/">Home</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <Link to="/games">Games</Link>
        </Stack>
        <div>
            Avatar
        </div>
      </Container>
    </Box>
)

export default Header;