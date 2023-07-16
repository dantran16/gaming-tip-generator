import { Box, Text} from "@chakra-ui/react";
import HeadingOne from "../components/HeadingOne";
import GenerateForm from "../components/GenerateForm";
import TipCard from "../components/TipCard";


const Home = ({tipHistory, setTipHistory}) => {

    const renderTips = () => tipHistory.map(tip => (
        <TipCard tip={tip} key={tip.id}/>
    ))

    return (
    <Box p={2} className="home">
        <HeadingOne>Random Gaming Tip Generator</HeadingOne>
        <Text px={1} my={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <GenerateForm setTipHistory={setTipHistory} />
        <Box>
            {tipHistory.length > 0 && renderTips()}
        </Box>
    </Box>
)}

export default Home;