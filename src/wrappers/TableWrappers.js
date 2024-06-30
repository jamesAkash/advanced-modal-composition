import styled, { css } from "styled-components";

const TableWrapper = styled.div`
  max-width: 900px;
  max-height: 400px;
  width: 100%;
  background-color: whitesmoke;
  color: black;
  overflow: auto;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.$length ? props.$length : 0)},
    400px
  );
  grid-gap: 20px;
  justify-content: baseline;
  padding: 0.8rem 2rem;
  border-bottom: 0.1px solid #b3c2d3;
  ${(props) =>
    props.type === "header" &&
    css`
      text-transform: capitalize;
      font-size: 22px;
      font-weight: 600;
      background-color: #08082c;
      color: #bdc6d0;
      position: sticky;
      top: 0;
      left: 0;
    `}

  ${(props) =>
    props.type === "regular" &&
    css`
      font-size: 16px;
    `}
`;

export { TableWrapper, TableRow, BodyWrapper };
