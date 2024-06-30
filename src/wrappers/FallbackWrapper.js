import styled from "styled-components";

const FallbackWrapper = styled.div`
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .fallback {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 4px;
    box-shadow: 2px 5px 10px 4px grey;

    p {
      font-size: 20px;
    }

    pre {
      color: white;
      background-color: #9b2626;
      border-radius: 8px;
      padding: 4px 12px;
    }
  }
`;

export default FallbackWrapper;
