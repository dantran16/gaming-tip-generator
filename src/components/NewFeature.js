import { Box, Alert, 
    AlertIcon,
    AlertTitle,
    AlertDescription, CloseButton, useDisclosure, Button, Stack } from "@chakra-ui/react";


const NewFeature = () => {
    const {
        isOpen: isVisible,
        onClose,
        onOpen
    } = useDisclosure({defaultIsOpen: true})

    return isVisible ? (
        <Alert status="info" p={4} mx={2} my={4} fontSize={18} maxWidth={"container.xl"}>
            <AlertIcon alignSelf='flex-start'/>
            <Stack ml={2} width={'100%'}>
                {/* <Box >
                    <AlertTitle>New Feature - Bookmarks</AlertTitle>
                    <AlertDescription>You can now bookmark tips, so you can view them at any point.</AlertDescription>
                </Box> */}
                <Box>
                    <AlertTitle>New Feature - Games</AlertTitle>
                    <AlertDescription>You can now search for all the tips within a game.</AlertDescription>
                </Box>
            </Stack>
            
            <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                onClick={onClose}
            />
        </Alert>) : (<Button p={4} mx={2} mb={4}colorScheme={'blue'} onClick={onOpen} variant='outline'>New Features</Button>)
}

export default NewFeature