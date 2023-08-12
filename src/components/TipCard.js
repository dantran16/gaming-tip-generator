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
import ReportTipModal from "./ReportTipModal";

const TipCard = ({ tip, game, experiences }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, spoiler_free, description, experience_id } = tip;
  const experience = experiences.filter(experience => experience._id === experience_id)[0]
  const handleClick = () => {
    onOpen();
  };

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
            {experience.level}
          </Badge>
          <Badge
            p={2}
            fontSize="sm"
            colorScheme={spoiler_free ? "green" : "red"}
          >
            {spoiler_free ? "Spoiler-free" : "Spoilers included"}
          </Badge>
        </HStack>
        <Text py={2}>{description}</Text>
      </CardBody>
      <CardFooter py={0}>
        <Button w={{ base: "100%", md: "150px" }} colorScheme="red" onClick={handleClick}>
          Report Tip
        </Button>
      </CardFooter>
      <ReportTipModal tip={tip} game={game} onClose={onClose} isOpen={isOpen}/>
    </Card>
  );
};

export default TipCard;
