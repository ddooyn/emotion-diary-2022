import styled from "styled-components";

const Button = ({ text, type, onClick }) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <Btn className={`${btnType}`} onClick={onClick}>
      {text}
    </Btn>
  );
};

Button.defaultProps = {
  type: "default",
};

export default Button;

const Btn = styled.button`
  font-family: "Nanum Pen Script", cursive;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.button};
  white-space: nowrap;
  cursor: pointer;
  &.positive {
    background-color: ${({ theme }) => theme.colors.green};
  }
  &.negative {
    background-color: ${({ theme }) => theme.colors.red};
  }
  &.default {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.black};
  }
`;
