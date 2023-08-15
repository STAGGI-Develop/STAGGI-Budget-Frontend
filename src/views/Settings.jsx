import { Stack } from "@chakra-ui/react";
import React from "react";

const Settings = () => {
  return (
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
    >
      <Stack
        w="full"
        h="full"
        padding="32px"
        direction="column"
        background="blackAlpha.50"
      >
        {/* Contenido de la página */}
        <div>
          Settings: <br />
          Cambiar imagen de perfil <br />
          Cambiar contraseña <br />
          Subscribirse/darse de baja de premium
        </div>
      </Stack>
    </Stack>
  );
};

export default Settings;
