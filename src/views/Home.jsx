import React from "react";
import ContentLayout from "../layouts/ContentLayout";

const leftContent = () => {
  return <div>Grafico de torta + montos de los consumos por categoría</div>;
};

const rightContent = () => {
  return <div>Balance actual + tarjetas de los Savings y Budgets. Abajo una lista con las últimas transacciones</div>;
};

const Home = () => {
  return (
    <>
      <ContentLayout leftContent={leftContent} rightContent={rightContent} />
    </>
  );
};

export default Home;
