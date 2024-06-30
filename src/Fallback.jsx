import styled from "styled-components";
import FallbackWrapper from "./wrappers/FallbackWrapper.js";

function Fallback({ error }) {
  return (
    <FallbackWrapper>
      <div className="fallback" role="alert">
        <p>Something went wrong:</p>
        <pre>{error}</pre>
      </div>
    </FallbackWrapper>
  );
}
export default Fallback;
