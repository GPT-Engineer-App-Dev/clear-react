import { Box, Container, Flex, Heading, Text, VStack, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Index = () => {
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) {
    return (
      <Container maxW="container.xl">
        <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">My Blank Canvas</Heading>
        </Flex>
        <Box as="main">
          <VStack spacing={4}>
            <Spinner size="xl" />
          </VStack>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxW="container.xl">
        <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">My Blank Canvas</Heading>
        </Flex>
        <Box as="main">
          <VStack spacing={4}>
            <Text color="red.500">Failed to load events.</Text>
          </VStack>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blank Canvas</Heading>
      </Flex>
      <Box as="main">
        <VStack spacing={4}>
          <Heading as="h2" size="md">Welcome to Your Blank Canvas</Heading>
          <Text>This is a minimalistic starting point for your React application.</Text>
          <Heading as="h3" size="md" mt={8}>Events</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={4}>
            {events.map(event => (
              <Box key={event.id} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{event.name}</Heading>
                <Text mt={4}>{event.description}</Text>
                <Text mt={4} fontWeight="bold">{new Date(event.date).toLocaleDateString()}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;