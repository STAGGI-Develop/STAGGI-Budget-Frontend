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
  AspectRatio,
  Square,
  Icon,
  Text,
  useTab,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import home from "../assets/navbar/home.svg"
import HomeIcon from "../assets/navbar/HomeIcon";
import FlagIcon from "../assets/navbar/FlagIcon";
import ChartIcon from "../assets/navbar/ChartIcon";
import SearchIcon from "../assets/navbar/SearchIcon";
import React from "react";

// eslint-disable-next-line react/display-name
const CustomTab = React.forwardRef((props, ref) => {
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];
  return (
    <Tab
      {...tabProps}
      as={Link}
      to={props.to}
      w="7rem"
      padding="0px"
      roundedTop="md"
      fontSize=".75rem"
      fontWeight="medium"
      color="gray.100"
      outline="none"
      _selected={{
        fontWeight: "bold",
        color: "pink.500",
        background: "#F4F5F7",
        borderTop: "4px solid var(--chakra-colors-pink-500)",
      }}
      borderTop="4px solid transparent"
      icon=""
    >
      <Stack
        // as={Link}
        // to={props.to}
        w="full"
        h="full"
        justify="center"
        align="center"
        spacing="0"
        padding=".25rem"
      >
        <Icon
          w="50%"
          h="50%"
          as={props.icon}
          stroke={isSelected ? "pink.500" : "gray.100"}
        />
        <Text>{props.title}</Text>
      </Stack>
    </Tab>
  );
});

const Navbar = () => {
  const navbarItems = [
    { to: "/dashboard", title: "Dashboard", icon: HomeIcon },
    { to: "/saving", title: "Goals", icon: FlagIcon },
    { to: "/budget", title: "Budgets", icon: ChartIcon },
    { to: "/search", title: "Details", icon: SearchIcon },
  ];
  return (
    <Stack
      paddingX="20px"
      width="100%"
      height="60px"
      direction="row"
      justify="space-between"
      align="center"
      spacing="0px"
      // background="staggi-blue.600"
      background="blue.600"
      // borderColor="blackAlpha.200"
      // borderBottomWidth="1px"
      // boxShadow="md"
    >
      <Stack //logo container
        direction="row"
        justify="flex-start"
        align="center"
        spacing="8px"
        overflow="hidden"
        width="160px"
        height="48px"
      >
        {/* <Box
        h="full"
        w="full"
        bgImage="url('src/assets/logo-text.svg')"
        bgSize="contain"
        bgPosition="center"
        bgRepeat="no-repeat"
        // as={Link} to="/"
      /> */}
        <Square
          w="3rem"
          h="full"
          padding="2%"
          rounded="xl"
          // background="blue.500"
          // as={Link}
          // to="/"
        >
          <Box
            width="full"
            height="full"
            bgImage="url('src/assets/logo-pig.svg')"
            bgSize="contain"
            bgPosition="center"
            bgRepeat="no-repeat"
          />
        </Square>
        <Stack
          direction="column"
          spacing="0"
          lineHeight="1.2rem"
          cursor="default"
          color="gray.100"
        >
          <Text fontSize="1.2rem" fontWeight="bold">Budget</Text>
          <Text fontSize=".7rem" color="gray.200" fontWeight="medium">by STAGGI</Text>
        </Stack>
      </Stack>

      <Tabs h="100%" size="lg" alignSelf="end" variant="unstyled">
        <TabList h="full">
          {navbarItems.map((e, i) => (
            <CustomTab key={i} to={e.to} title={e.title} icon={e.icon} />
          ))}
        </TabList>
        {/* <TabPanels /> */}
      </Tabs>

      <Stack //User
        direction="row"
        justify="flex-end"
        align="center"
        width="160px"
        alignSelf="stretch"
      >
        <Menu>
          <MenuButton size="xs" variant="link" as={Button} rounded="full">
            <Avatar name="GA" src=" " bgColor="pink.500" />
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
};

export default Navbar;
