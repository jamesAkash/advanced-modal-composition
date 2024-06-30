import React, { useEffect, useState } from "react";
import Table from "./Table";
import AppWrapper from "./wrappers/AppWrapper";
import useFetch from "./useFetch";

const App = () => {
  const { loading, data, error } = useFetch({ endpoint: "users" });

  if (error) {
    throw error;
  }

  return (
    <AppWrapper>
      {loading ? (
        <h1>Data Loading</h1>
      ) : (
        <Table data={data}>
          <Table.Headers />
          <Table.Body />
        </Table>
      )}
    </AppWrapper>
  );
};

export default App;
