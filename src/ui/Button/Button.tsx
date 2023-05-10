import { memo, FC } from "react";
import cn from "classnames";

import { Button as VkButton } from "@vkontakte/vkui";

import { IButtonProps } from "./types";

import styles from "./Button.module.sass";

const Button: FC<IButtonProps> = ({ loading, className, onClick, value, view }) => {
  return (
    <div className={cn(styles.wrapper, className)} onClick={onClick}>
      <VkButton
        stretched
        className={cn(styles.btn, styles[`btn--${view}`])}
        loading={loading}
        size="l"
      >
        {value}
      </VkButton>
    </div>
  );
};

export default memo(Button);
