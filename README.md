# Spacer

Name your spaces & more...

## Commands

### Configure spaces

- Allows you to name your spaces "Desktop 1" => "Work" and "Desktop 2" => "Personal"

#### Form

- `Desktop Index` - The index of the desktop you want to name (1, 2, 3, ...)
- `Name` - The name you want to give to the desktop

Uses storage API to store mapping

### Switch space

- Switch to selected space by identifying it by name-index mapping and uses appleScript to switch to that space

```applescript
set desktopNum to 2

tell application "System Events"
    key code (18 + desktopNum - 1) using {control down}
end tell
```

## Reference

- [Storage API](https://developers.raycast.com/api-reference/storage)
- [AppleScript Util](https://developers.raycast.com/utilities/functions/runapplescript)
- [UI - Forms](https://developers.raycast.com/api-reference/user-interface/form)
- [UI - List](https://developers.raycast.com/utilities/functions/runapplescript)
- [UI - Actions](https://developers.raycast.com/api-reference/user-interface/actions)
- [UI - Action Panel](https://developers.raycast.com/api-reference/user-interface/action-panel)
