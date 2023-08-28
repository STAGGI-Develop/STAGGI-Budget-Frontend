import { Stack } from '@chakra-ui/react'

const ContentLayout = ({
  leftContent,
  rightContent,
  leftContentProps = null,
  rightContentProps = null,
}) => (
  <Stack
    h="full"
    marginX="10rem"
    marginY="1.5rem"
    direction="row"
    spacing="2rem"
    justify="center"
    align="flex-start"
  >
    {/*
    =======
    h='full'
    marginX={{ base: 0, xl: '10rem' }}
    marginy='1.5rem'
    direction={{ base: 'column', xl: 'row' }}
    justify='flex-start'
    align='flex-start'
    spacing='0px'
    overflow='hidden'
    alignSelf='stretch'
    // dropShadow="xl"
    // boxShadow="xl"
    borderColor='blackAlpha.100'
    // borderStartWidth="1px"
    // borderEndWidth="1px"
    >>>>>>> develop
    */}
    {/* Left column */}
    <Stack
      flex={0.35}
      justify="flex-start"
      align="flex-start"
      spacing=".5rem"
    >
      {/*
      =======
      paddingX='2rem'
      paddingY='1.25rem'
      justify='flex-start'
      align='flex-start'
      spacing='1rem'
      overflow='hidden'
      alignSelf='stretch'
      >>>>>>> develop
      */}
      {leftContent(leftContentProps)}
    </Stack>

    {/* Right column */}
    <Stack
      flex={0.55}
      justify="flex-start"
      align="flex-start"
      spacing=".5rem"
    >
      {/*
      =======
      flex={0.65}
      paddingX='2rem'
      paddingY='1.25rem'
      justify='flex-start'
      align='flex-start'
      spacing='1rem'
      overflow='hidden'
      borderColor='blackAlpha.100'
      borderStartWidth={{ base: 0, xl: '2px' }}
      alignSelf='stretch'
      maxWidth='100%'
      >>>>>>> develop
      */}
      {rightContent(rightContentProps)}
    </Stack>
  </Stack>
)

export default ContentLayout
