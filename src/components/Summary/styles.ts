import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  margin-top: -5rem;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 12px;
  }

  @media (min-width: 1024px) {
    padding: 0 1.5rem;
    gap: 2rem;
  }
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 1.2rem;
    min-width: 210px;

    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme["green-700"]};
    `}
`;
