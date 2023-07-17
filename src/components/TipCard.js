import {
  Card,
  Heading,
  Badge,
  CardBody,
  Text,
  HStack,
  CardFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { experiences, games } from "../dummy";
import { useEffect } from "react";
import ReportTipModal from "./ReportTipModal";

const TipCard = ({ tip }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { gameId, title, experienceId, spoilerFree, description } = tip;
  const game = games.filter((game) => game.id === gameId)[0];
  const experience = experiences.filter(
    (experience) => experience.id === experienceId
  )[0];

  const handleClick = () => {
    onOpen();
  };

  useEffect(() => {
    console.log(tip);
    console.log(game);
    console.log(experience);
  });
  return (
    <Card
      direction="column"
      overflow="hidden"
      variant="outline"
      borderRadius="lg"
      my={3}
      p={4}
    >
      <CardBody>
        <Heading mb={2} size="lg">
          {game.label}
        </Heading>
        <Heading mb={2} size="md">
          {title}
        </Heading>
        <HStack my={2} py={2}>
          <Badge p={2} fontSize="sm" colorScheme={experience.color}>
            {experience.id}
          </Badge>
          <Badge
            p={2}
            fontSize="sm"
            colorScheme={spoilerFree ? "green" : "red"}
          >
            {spoilerFree ? "Spoiler-free" : "Spoilers included"}
          </Badge>
        </HStack>
        <Text py={2}>{description}</Text>
      </CardBody>
      <CardFooter py={0}>
        <Button w={{ base: "100%", md: "150px" }} colorScheme="red" onClick={handleClick}>
          Report Tip
        </Button>
      </CardFooter>
      <ReportTipModal tip={tip} onClose={onClose} isOpen={isOpen}/>
    </Card>
  );
};

export default TipCard;
