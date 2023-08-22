import { Stack, Box, Text, Input, Checkbox, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <Stack flex={1} direction="row" h="100vh" minH="fit-content">
      {/* Form */}
      <Stack
        w="50%"
        paddingX="10rem"
        paddingTop="4rem"
        // paddingBottom="50px"
        justify="flex-start"
        align="flex-start"
        spacing="40px"
        // overflow="hidden"
        boxShadow="lg"
        // background="#F4F5F7"
      >
        {/* <Box width="48px" height="48px" background="blackAlpha.300" /> */}
        {/* <Box
          width="4rem"
          height="4rem"
          rounded="xl"
          bgImage="url('src/assets/logo-icon.svg')"
          bgSize="contain"
          bgPosition="center"
          bgRepeat="no-repeat"
          as={Link}
          to="/"
        /> */}
        <Stack
          width="4rem"
          height="4rem"
          padding="0.5rem"
          rounded="xl"
          background="blue.500"
          as={Link}
          to="/"
        >
          <Box
            width="full"
            height="full"
            bgImage="url('src/assets/logo-pig.svg')"
            bgSize="contain"
            bgPosition="center"
            bgRepeat="no-repeat"
          />
        </Stack>
        <Stack
          justify="flex-start"
          align="flex-start"
          spacing="20px"
          alignSelf="stretch"
        >
          <Text fontWeight="bold" fontSize="2.5rem">
            Sign In
          </Text>
          <Text fontWeight="medium" fontSize="1.25rem">
            Welcome back!
          </Text>
        </Stack>

        {/* Form */}
        <Stack
          justify="flex-start"
          align="flex-start"
          spacing="20px"
          alignSelf="stretch"
        >
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="4px"
            alignSelf="stretch"
          >
            <Text fontWeight="medium" fontSize="14px" color="black">
              Email*
            </Text>
            <Input
              placeholder="Email"
              size="lg"
              height="48px"
              alignSelf="stretch"
            />
          </Stack>
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="4px"
            alignSelf="stretch"
          >
            <Text fontWeight="medium" fontSize="14px" color="black">
              Password*
            </Text>
            <Input
              placeholder="Password"
              size="lg"
              height="48px"
              alignSelf="stretch"
            />
          </Stack>
          <Stack
            direction="row"
            justify="space-between"
            align="center"
            spacing="10px"
            height="24px"
            alignSelf="stretch"
          >
            <Checkbox variant="blue">Remember me</Checkbox>
            <Text
              as={Link}
              to="/signin"
              fontWeight="semibold"
              fontSize="14px"
              color="blue.600"
            >
              Forget password?
            </Text>
          </Stack>
          <Button size="md" width="100%" colorScheme="blue">
            Sign in
          </Button>
        </Stack>

        {/* Create account */}
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          alignSelf="stretch"
        >
          <Text fontWeight="medium" fontSize="14px">
            Not registered yet?
          </Text>
          <Text
            as={Link}
            to="/signup"
            fontWeight="semibold"
            fontSize="14px"
            color="blue.600"
          >
            Create an account
          </Text>
        </Stack>
      </Stack>

      {/* Info section */}
      <Stack w="50%" background="staggi-blue.600" />
    </Stack>
  );
};

export default Signin;