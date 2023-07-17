import { Box, OrderedList, Text, ListItem } from "@chakra-ui/react";
import HeadingOne from "../components/HeadingOne";
import GenerateForm from "../components/GenerateForm";
import TipCard from "../components/TipCard";

const Home = ({ tipHistory, setTipHistory }) => {
  const renderTips = () =>
    tipHistory.map((tip) => <TipCard tip={tip} key={tip.id} />);

  return (
    <Box p={2} className="home">
      <HeadingOne>Random Gaming Tip Generator</HeadingOne>
      <Text px={1} py={2} my={2}>
        Generate a random gaming tip based on the game.
      </Text>
      <OrderedList px={4} my={2}>
        <ListItem>Select a game.</ListItem>
        <ListItem>To filter more, click on Filter Options.</ListItem>
        <ListItem>Click on Generate Gaming Tip.</ListItem>
      </OrderedList>
      <GenerateForm setTipHistory={setTipHistory} />
      <Box p={2}>{tipHistory.length > 0 && renderTips()}</Box>
    </Box>
  );
};

export default Home;
