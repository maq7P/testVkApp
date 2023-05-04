import { AppRoot } from "@vkontakte/vkui";

import { Typography, Button } from "@/ui";

import styles from "./Main.module.sass";

function App() {
  return (
    <AppRoot>
      <Typography>ГЛАВНОЕ СОБЫТИЕ МЕСЯЦА</Typography>

      <div className={styles.btnWrapper}>
        <Button view="fill" value="Зарегистрироваться" />
        <Button view="outline" value="Регистрация на Съемки шоу Вписка" />
      </div>
    </AppRoot>
  );
}

export default App;
