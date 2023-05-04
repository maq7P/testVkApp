import { FC } from "react";
import cn from "classnames";

import { Title } from "@vkontakte/vkui";

import { ITypography } from "./types";

import styles from "./Typography.module.sass";

const Typography: FC<ITypography> = ({
  children,
  className,
  level = "1",
  variant,
  ...rest
}) => (
  <div>
    <Title level={level} className={cn(styles.title, className)} {...rest}>
      {children}
    </Title>
  </div>
);

export default Typography;
