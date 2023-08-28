import { Button, Icon, Spinner, Stack, Text, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import archive from "../assets/icons/archive";
import edit from "../assets/icons/edit";
import trash from "../assets/icons/trash";

const CustomList = ({ list, listType }) => {
  const CustomListItem = ({ item, listType }) => (
    <Stack
      h="3.5rem"
      paddingX=".5rem"
      direction="row"
      justify="space-between"
      align="center"
      overflow="hidden"
      borderBottom="1px"
      borderColor="gray.200"
      _hover={{ bg: "gray.100" }}
      // flex="1"
    >
      <Stack as={Link} to={`/${listType}/${item.id}`} align="center">
        <Text
          fontWeight="medium"
          fontSize="1rem"
          _hover={{ color: "blue.600" }}
        >
          {item.Name ? item.Name : item.Category}
        </Text>
      </Stack>
      <Stack w="fit-content" direction="row" justify="flex-end" spacing="1rem">
        <Stack
          direction="row"
          fontWeight="medium"
          fontSize=".9rem"
          spacing=".25rem"
          align="center"
        >
          <Text color="blue.600" fontWeight="bold">
            {`$${item.Balance} /`}
          </Text>
          <Text color="gray.500">
            ${item.TargetAmount ? item.TargetAmount : item.LimitAmount}
          </Text>
        </Stack>
        <Stack direction="row" align="center" spacing="0">
          <Tooltip label="Edit" fontSize="xs" bg="pink.400" color="white">
            <Button variant="ghost" padding="1px" size="sm">
              <Icon as={edit} />
            </Button>
          </Tooltip>
          <Tooltip label="Archive" fontSize="xs" bg="pink.400" color="white">
            <Button variant="ghost" padding="1px" size="sm">
              <Icon as={archive} />
            </Button>
          </Tooltip>
          <Tooltip label="Delete" fontSize="xs" bg="pink.400" color="white">
            <Button variant="ghost" padding="1px" size="sm">
              <Icon as={trash} />
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Stack spacing="0">
      {list.map((saving, i) => (
        <CustomListItem key={i} item={saving} listType={listType}/>
      ))}
    </Stack>
  );
};

export default CustomList;
