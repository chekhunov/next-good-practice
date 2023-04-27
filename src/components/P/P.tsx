import React from "react";
import cn from "classnames";

import { PProps } from "./P.props";
import styles from "./P.module.css";

const P = ({
  size = "m",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p className={cn(styles.p, styles[size])} {...props}>
      {children}
    </p>
  );
};

export default P;
