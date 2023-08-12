import { useState,useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import HeadingOne from "../components/HeadingOne";
import { useParams } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import TipCard from "../components/TipCard";


const TipList = ({experiences}) => {
    const { id } = useParams()
    const [tips, setTips] = useState([])
    const [game, setGame] = useState({})

    const renderTips = () => tips.map(tip => (
        <TipCard tip={tip} game={game} experiences={experiences} key={tip._id}/>
    ))

    const loadTips = async() => {
        const response = await fetch(`http://127.0.0.1:8000/tips?game_id=${id}`);
        const tipsData = await response.json();
        setTips(tipsData);
      }
    const loadGame = async() => {
        const response = await fetch(`http://127.0.0.1:8000/games/${id}`)
        const gameData = await response.json()
        const transformedGameData = {
            ...gameData,
            label: gameData.title,
            value: gameData.title
        }
        setGame(transformedGameData)
    }

    useEffect(() => {
        loadGame()
        loadTips()
    }, [])

    return (
    <Box p={2} className="tiplist">
        <Breadcrumb mb={2}>
            <BreadcrumbItem>
                <Link to='/games'>Games</Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{game.label}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <HeadingOne>{game.label}</HeadingOne>
        <Text py={1} my={2}>{game.description}</Text>
        <Box py={2} my={2}>
            {renderTips()}
        </Box>
    </Box>
)}

export default TipList;