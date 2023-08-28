import { Stack } from "@chakra-ui/react";

const ContentLayout = ({ leftContent, rightContent }) => (
  <Stack
    h="full"
    marginX="10rem"
    marginY="1.5rem"
    direction="row"
    spacing="2rem"
    justify="center"
    align="flex-start"
  >
    {/* Left column */}
    <Stack
      flex={0.35}
      justify="flex-start"
      align="flex-start"
      spacing=".5rem"
    >
      {leftContent()}
    </Stack>

    {/* Right column */}
    <Stack
      flex={0.55}
      justify="flex-start"
      align="flex-start"
      spacing=".5rem"
    >
      {rightContent()}
    </Stack>
  </Stack>
);

export default ContentLayout;
