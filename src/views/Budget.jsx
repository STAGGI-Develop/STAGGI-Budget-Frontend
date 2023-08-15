import React from 'react'
import ContentLayout from '../layouts/ContentLayout';

const leftContent = () => {
  return <div>Listados de presupuestos + botón para crear</div>;
};

const rightContent = () => {
  return <div>Idem Saving pero para límite de consumo y gastos</div>;
};

const Budget = () => {
  return (
    <>
      <ContentLayout leftContent={leftContent} rightContent={rightContent} />
    </>
  );
};
export default Budget