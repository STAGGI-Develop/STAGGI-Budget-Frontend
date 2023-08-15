import React from "react";
import ContentLayout from "../layouts/ContentLayout";

const leftContent = () => {
  return <div>Filtros de búsqueda</div>;
};

const rightContent = () => {
  return <div>Resultados de la búsqueda</div>;
};

const Search = () => {
  return (
    <>
      <ContentLayout leftContent={leftContent} rightContent={rightContent} />
    </>
  );
};
export default Search;
