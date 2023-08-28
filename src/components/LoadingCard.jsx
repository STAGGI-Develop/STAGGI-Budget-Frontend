import { Spinner, Stack } from "@chakra-ui/react";

const LoadingCard = () => (
  <Stack
    w="full"
    h="auto"
    direction="column"
    layerStyle="card"
    spacing="0rem"
    align="center"
  >
    <Spinner
      margin="1.5rem"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.100"
      color="pink.500"
      size="xl"
    />
  </Stack>
);

export default LoadingCard;
