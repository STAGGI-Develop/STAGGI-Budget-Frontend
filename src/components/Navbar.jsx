import {
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Avatar,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Stack
    paddingX="20px"
    width="100%"
    height="70px"
    direction="row"
    justify="space-between"
    align="center"
    spacing="0px"
    overflow="hidden"
    borderColor="blackAlpha.200"
    borderBottomWidth="1px"
  >
    <Stack //logo container
      direction="row"
      justify="flex-start"
      align="center"
      spacing="0px"
      overflow="hidden"
      width="160px"
      height="48px"
    >
      {/* <Box
        borderRadius="10px"
        width="48px"
        height="48px"
        backgroundColor="blackAlpha.400"
      /> */}
      <Box
        h="full"
        w="full"
        bgImage="url('src/assets/logo-text.svg')"
        bgSize="contain"
        bgPosition="center"
        bgRepeat="no-repeat"
        // as={Link} to="/"
      />
    </Stack>

    <Tabs size="lg" alignSelf="end">
      <TabList fontWeight="medium" color="gray.500">
        <Tab
          as={Link}
          to="/dashboard"
          fontSize="1rem"
          _selected={{
            fontWeight: "bold",
            color: "blue.600",
            borderBottom: '3px solid var(--chakra-colors-blue-600)'
          }}
        >
          DASHBOARD
        </Tab>
        <Tab
          as={Link}
          to="/saving"
          fontSize="1rem"
          _selected={{
            fontWeight: "bold",
            color: "blue.600",
            borderBottom: '3px solid var(--chakra-colors-blue-600)'
          }}
        >
          SAVING
        </Tab>
        <Tab
          as={Link}
          to="/budget"
          fontSize="1rem"
          _selected={{
            fontWeight: "bold",
            color: "blue.600",
            borderBottom: '3px solid var(--chakra-colors-blue-600)'
          }}
        >
          BUDGET
        </Tab>
        <Tab
          as={Link}
          to="/search"
          fontSize="1rem"
          _selected={{
            fontWeight: "bold",
            color: "blue.600",
            borderBottom: '3px solid var(--chakra-colors-blue-600)'
          }}
        >
          SEARCH
        </Tab>
      </TabList>
      <TabPanels />
    </Tabs>

    <Stack //User
      direction="row"
      justify="flex-end"
      align="center"
      spacing="10px"
      width="160px"
      alignSelf="stretch"
    >
      <Menu>
        <MenuButton size="xs" variant="link" as={Button} rounded="full">
          <Avatar name="GA" src=" " bgColor="blue.600" />
        </MenuButton>
        <MenuList boxShadow="sm" maxWidth="6rem">
          <MenuItem as={Link} to="/settings">
            Settings
          </MenuItem>
          <MenuItem>Logout</MenuItem>

          <MenuItem as={Link} to="/signin" textColor="gray.400">
            Sign In - Temporal
          </MenuItem>
          <MenuItem as={Link} to="/signup" textColor="gray.400">
            Sign Up - Temporal
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  </Stack>
);

export default Navbar;
