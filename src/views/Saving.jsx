import React from "react";
import ContentLayout from "../layouts/ContentLayout";

const leftContent = () => {
  return <div>Listado de las cuentas de ahorro + botón para crear</div>;
};

const rightContent = () => {
  return <div>Detalle de la cuenta seleccionada, Target y fecha límite + lista de aportes realizados</div>;
};

const Saving = () => {
  return (
    <>
      <ContentLayout leftContent={leftContent} rightContent={rightContent} />
    </>
  );
};
export default Saving;
