import { Box, Alert, 
    AlertIcon,
    AlertTitle,
    AlertDescription, CloseButton, useDisclosure, Button } from "@chakra-ui/react";


const NewFeature = () => {
    const {
        isOpen: isVisible,
        onClose,
        onOpen
    } = useDisclosure({defaultIsOpen: true})

    return isVisible ? (
        <Alert status="info" p={4} my={4} fontSize={18} maxWidth={"container.xl"}>
            <AlertIcon />
            <Box width={'100%'}>
                <AlertTitle>New Feature - Bookmarks</AlertTitle>
                <AlertDescription>You can now bookmark tips, so you can view them at any point.</AlertDescription>
            </Box>
            <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                onClick={onClose}
            />
        </Alert>) : (<Button colorScheme={'blue'} onClick={onOpen} variant='outline'>New Features</Button>)
}

export default NewFeature