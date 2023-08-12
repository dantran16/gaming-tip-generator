import {
  Text,
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonGroup,
  useDisclosure,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
  PopoverTrigger,
  PopoverFooter,
  useToast,
  FormControl,
  FormLabel,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const ReportTipModal = ({ isOpen, onClose, tip, game }) => {
  const popoverDisclosure = useDisclosure();
  const toast = useToast();

  const { title, _id } = tip;

  const handleReportClick = () => {
    popoverDisclosure.onToggle();
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    popoverDisclosure.onToggle();
    onClose();
    toast({
      title: "Report submitted.",
      description: "Your report has been submitted successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleReportDescriptionChange = (e) => {
    setReportForm((prev) => {
      return {
        ...prev,
        description: e.target.value,
      };
    });
  };

  const handleReportTypeChange = (e) => {
    setReportForm((prev) => {
      return {
        ...prev,
        reportType: e.target.value,
      };
    });
  };

  const [reportForm, setReportForm] = useState({
    description: "",
    reportType: "",
    game_id: game._id,
    tip: _id,
  });

  const isDisabled = reportForm.description.trim() === '' || reportForm.reportType === ''

  return (
    <form>
      <Modal isCentered size="xl" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={24}>Report a Tip</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={2}>
              {game.label} - {title}
            </Text>
            <FormControl my={4} isRequired>
              <FormLabel>Why do you want to report it?</FormLabel>
              <Select
                value={reportForm.reportType}
                onChange={handleReportTypeChange}
                placeholder="Select option"
              >
                <option value="Incorrect Information">
                  Incorrect Information
                </option>
                <option value="Outdated">Outdated</option>
                <option value="Typo">Typo</option>
              </Select>
            </FormControl>
            <FormControl my={4} isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={reportForm.description}
                onChange={handleReportDescriptionChange}
                resize="vertical"
                placeholder="Type your description"
                size="md"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Popover
                returnFocusOnClose={false}
                isOpen={popoverDisclosure.isOpen}
                onClose={popoverDisclosure.onClose}
                placement="top"
              >
                <PopoverTrigger>
                  <Button
                    variant="solid"
                    colorScheme="red"
                    onClick={handleReportClick}
                    isDisabled={isDisabled}
                  >
                    Report Tip
                  </Button>
                </PopoverTrigger>

                <PopoverContent p={4}>
                  <PopoverHeader>Report Tip Confirmation</PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody p={4}>
                    Are you sure you want to report this tip?
                  </PopoverBody>
                  <PopoverFooter p={4}>
                    <ButtonGroup>
                      <Button
                        type="submit"
                        colorScheme="red"
                        onClick={handleReportSubmit}
                        
                      >
                        Report Tip
                      </Button>
                      <Button variant="outline" onClick={handleReportClick}>
                        Cancel
                      </Button>
                    </ButtonGroup>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
              <Button onClick={onClose}>Close</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
};

export default ReportTipModal;
