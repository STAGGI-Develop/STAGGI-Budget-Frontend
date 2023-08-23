import { Button, Stack } from "@chakra-ui/react";

const Search = () => {
  return (
    <Stack
      h="full"
      marginX="10rem"
      marginy="1.5rem"
      direction="row"
      justify="center"
      align="center"
      spacing="3rem"
      overflow="hidden"
      alignSelf="stretch"
      borderColor="blackAlpha.100"
    >
      <Button
        w="9rem"
        size="sm"
        marginTop=".7rem"
        alignSelf="center"
        colorScheme="blue"
        variant="solid"
      >
        New Goal
      </Button>

      <Button
        w="9rem"
        size="sm"
        marginTop=".7rem"
        alignSelf="center"
        colorScheme="blue"
        variant="solid"
      >
        New Budget
      </Button>

      <Button
        w="9rem"
        size="sm"
        marginTop=".7rem"
        alignSelf="center"
        colorScheme="blue"
        variant="solid"
      >
        New Transaction
      </Button>
    </Stack>
  );
};
export default Search;
