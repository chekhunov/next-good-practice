import React from "react";
import cn from "classnames";

import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

const Tag = ({
  size = "s",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, styles[size], styles[color], className)}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
