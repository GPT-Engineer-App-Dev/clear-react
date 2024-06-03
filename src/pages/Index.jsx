import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blank Canvas</Heading>
      </Flex>
      <Box as="main">
        <VStack spacing={4}>
          <Heading as="h2" size="md">Welcome to Your Blank Canvas</Heading>
          <Text>This is a minimalistic starting point for your React application.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;