import { memo, FC } from "react";
import cn from "classnames";

import { Button as VkButton } from "@vkontakte/vkui";

import { IButtonProps } from "./types";

import styles from "./Button.module.sass";

const Button: FC<IButtonProps> = ({
  onClick,
  loading,
  value,
  className,
  view,
}) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <VkButton
        stretched
        className={cn(styles.btn, styles[`btn--${view}`], className)}
        loading={loading}
        size="l"
      >
        {value}
      </VkButton>
    </div>
  );
};

export default memo(Button);
