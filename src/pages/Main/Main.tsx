import { AppRoot, Title, Text } from "@vkontakte/vkui";

import { Button } from "@/ui";

import { TITLE, SUBTITLE } from "./store";

import styles from "./Main.module.sass";

function App() {
  return (
    <AppRoot className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <Text className={styles.subtitle}>{SUBTITLE}</Text>
        <Title className={styles.title}>{TITLE}</Title>
      </div>

      <div className={styles.bottom}>
        <Button view="fill" value="Зарегистрироваться" className={styles.btn} />
        <Button view="outline" value="Регистрация на Съемки шоу Вписка" className={styles.btn} />
      </div>
    </AppRoot>
  );
}

export default App;
