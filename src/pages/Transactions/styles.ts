import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 1rem auto 0;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    margin: 4rem auto 0;
  }
`;

export const TableContainer = styled.div`
  max-width: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const TransactionsTable = styled.table`
  /* display: none; */
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  min-width: max-content;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    font-size: 12px;
    min-width: min-content;

    @media (min-width: 768px) {
      font-size: inherit;
    }

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:first-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
