import * as s from "./style";
import * as t from "./types";

const Button: React.FC<React.PropsWithChildren<t.TButtonProps>> = ({
  onClick,
  children,
}) => {
  return <s.Button onClick={onClick}>{children}</s.Button>;
};

// const Button = ({
//   onClick,
//   children,
// }) => {
//   return <s.Button onClick={onClick}>{children}</s.Button>;
// };

export default Button;
