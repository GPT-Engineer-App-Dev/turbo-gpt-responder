import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, Heading } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleButtonClick = () => {
    // Simulate a response from GPT-3.5 Turbo
    setResponse(`Response to "${prompt}": This is a simulated response based on the input provided.`);
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          GPT-3.5 Turbo Simulator
        </Heading>
        <Box w="100%">
          <Input placeholder="Enter your prompt" value={prompt} onChange={handleInputChange} size="md" />
        </Box>
        <Button leftIcon={<FaRobot />} colorScheme="teal" onClick={handleButtonClick} size="lg">
          Get Response
        </Button>
        {response && (
          <Text fontSize="lg" p={4} borderWidth="1px" borderRadius="lg">
            {response}
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
