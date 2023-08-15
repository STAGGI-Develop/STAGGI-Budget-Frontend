import { Stack } from "@chakra-ui/react";

const ContentLayout = ({ leftContent, rightContent }) => (
  <Stack
    h="full"
    marginX="160px"
    direction="row"
    justify="flex-start"
    align="flex-start"
    spacing="0px"
    overflow="hidden"
    flex="1"
    alignSelf="stretch"
    // dropShadow="xl"
    // boxShadow="xl"
    borderColor="blackAlpha.100"
    borderStartWidth="1px"
    borderEndWidth="1px"
  >
    {/* Left column */}
    <Stack
      flex={1}
      padding="32px"
      justify="flex-start"
      align="flex-start"
      spacing="32px"
      overflow="hidden"
      alignSelf="stretch"
      background="blackAlpha.50"
    >
      {leftContent()}
    </Stack>

    {/* Right column */}
    <Stack
      flex={2}
      padding="32px"
      justify="flex-start"
      align="flex-start"
      spacing="32px"
      overflow="hidden"
      borderColor="blackAlpha.200"
      borderStartWidth="1px"
      alignSelf="stretch"
      maxWidth="100%"
      background="blackAlpha.50"
    >
      {rightContent()}
    </Stack>
  </Stack>
);

export default ContentLayout;
