import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import HeadingOne from "../components/HeadingOne";
import { useParams } from "react-router-dom";
import { games,tips } from "../dummy";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import TipCard from "../components/TipCard";


const TipList = () => {
    const { id } = useParams()
    const game = games.filter(li => li.id === id)[0]
    const filteredTips = tips.filter(tip => tip.game_id === id)

    const renderTips = () => filteredTips.map(tip => (
        <TipCard tip={tip} key={tip.id}/>
    ))

    useEffect(() => {
        console.log(id)
        console.log(filteredTips)
    })

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