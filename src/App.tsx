import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
} from "@vkontakte/vkui";

import { Typography } from "./ui";

import styles from "./App.module.sass";

function App() {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="second">
            <Panel id="main">
              <PanelHeader className={styles.title}> main </PanelHeader>
              <Group header={<Header mode="secondary">Items</Header>}>
                <Typography>main</Typography>
              </Group>
            </Panel>
            <Panel id="second">
              <PanelHeader className={styles.title}> second </PanelHeader>

              <Group header={<Header mode="secondary">Items</Header>}>
                <Typography>second</Typography>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
