import { Action, ActionPanel, Icon, List, closeMainWindow } from "@raycast/api";
import { useLocalStorage } from "@raycast/utils";
import { switchToSpace } from "./applescript";
import { Space } from "./types";

export default function SwitchSpace() {
  const { value: spaces, isLoading } = useLocalStorage<Space[]>("spaces", []);

  return (
    <List isLoading={isLoading}>
      <List.EmptyView title="No spaces configured" description="Use 'Configure Spaces' command to add spaces." />
      {(spaces || []).map((space) => (
        <List.Item
          key={space.index}
          icon={Icon.Monitor}
          title={space.name}
          subtitle={`Desktop ${space.index}`}
          actions={
            <ActionPanel>
              <Action
                title="Switch to Space"
                icon={Icon.ArrowRight}
                onAction={async () => {
                  await switchToSpace(space.index);
                  await closeMainWindow();
                }}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
