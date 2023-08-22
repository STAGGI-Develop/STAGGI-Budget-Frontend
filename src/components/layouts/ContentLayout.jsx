import { Stack } from "@chakra-ui/react";

const ContentLayout = ({ leftContent, rightContent }) => (
  <Stack
    h="full"
    marginX="10rem"
    marginy="1.5rem"
    direction="row"
    justify="flex-start"
    align="flex-start"
    spacing="0px"
    overflow="hidden"
    alignSelf="stretch"
    // dropShadow="xl"
    // boxShadow="xl"
    borderColor="blackAlpha.100"
    // borderStartWidth="1px"
    // borderEndWidth="1px"
  >
    {/* Left column */}
    <Stack
      flex={0.35}
      paddingX="2rem"
      paddingY="1.25rem"
      justify="flex-start"
      align="flex-start"
      spacing="1rem"
      overflow="hidden"
      alignSelf="stretch"
    >
      {leftContent()}
    </Stack>

    {/* Right column */}
    <Stack
      flex={0.65}
      paddingX="2rem"
      paddingY="1.25rem"
      justify="flex-start"
      align="flex-start"
      spacing="1rem"
      overflow="hidden"
      borderColor="blackAlpha.100"
      borderStartWidth="2px"
      alignSelf="stretch"
      maxWidth="100%"
    >
      {rightContent()}
    </Stack>
  </Stack>
);

export default ContentLayout;
