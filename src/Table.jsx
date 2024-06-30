import React, { createContext, useState, useEffect, useContext } from "react";
import { BodyWrapper, TableRow, TableWrapper } from "./wrappers/TableWrappers";

const TableContext = createContext();

const Table = ({ children, data }) => {
  const [dataLocal, setDataLocal] = useState(data || []);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    if (dataLocal.length > 0) {
      const headersArray = Object.keys(dataLocal[0]);
      setHeaders(headersArray);
    }
  }, [dataLocal]);

  return (
    <TableContext.Provider value={{ headers, dataLocal }}>
      <TableWrapper>
        <div className="scroll-fix">{children}</div>
      </TableWrapper>
    </TableContext.Provider>
  );
};

const Headers = () => {
  const { headers } = useContext(TableContext);
  return (
    <TableRow role="row" type="header" $length={headers.length}>
      {headers
        ? headers.map((head, index) => (
            <div key={index} role="columnheader">
              {head}
            </div>
          ))
        : null}
    </TableRow>
  );
};

const Body = () => {
  const { dataLocal, headers } = useContext(TableContext);
  if (!dataLocal) return null;

  return (
    <BodyWrapper role="body">
      {dataLocal.map((datum, index) => (
        <TableRow
          key={index}
          role="row"
          type="regular"
          $length={headers.length}
        >
          {headers.map((header, i) => (
            <div role="cell" key={i}>
              {typeof datum[header] !== "object" ? datum[header] : "N/A"}
            </div>
          ))}
        </TableRow>
      ))}
    </BodyWrapper>
  );
};

Table.Headers = Headers;
Table.Body = Body;

export default Table;
