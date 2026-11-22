# Install ALife Worlds for Claude Code

[View both installation options](README.md#install-alife-worlds)

ALife Worlds 0.1.17 runs in a local Claude Code project. You can use the Code tab in Claude Desktop or the Claude Code terminal. Both routes need [Node.js 20 or newer](https://nodejs.org/en/download). Reopen your app or terminal after installing Node.js.

[Claude app](#install-in-the-claude-app) · [Terminal](#install-from-the-terminal) · [First world](#make-your-first-world) · [Your agents](#your-agents) · [Update](#update-the-plugin)

## Install in the Claude app

Use the app’s **Code** tab for the plugin. Regular Claude chats and Projects can help plan your world.

### Install once

1. [Download Claude Desktop](https://claude.com/download), sign in with an account that has Claude Code access, and open the **Code** tab.
2. Start a new **Local** session. Run these commands one at a time.

   ```text
   /plugin marketplace add ALifeWorlds/alife-worlds-releases
   /plugin install alife-worlds@alife-worlds
   ```

3. Close and reopen Claude.

To install by upload, [download the Claude ZIP (0.1.17)](https://raw.githubusercontent.com/ALifeWorlds/alife-worlds-releases/main/packages/claude/alife-worlds-claude-0.1.17.zip), then select it under **Customize → Plugins → Add → Upload plugin**. Check for ALife Worlds in **+ → Plugins** or **Customize**. [Claude Code in the desktop app](https://code.claude.com/docs/en/desktop#install-plugins)

## Install from the terminal

Install the [Claude Code CLI](https://code.claude.com/docs/en/quickstart) and Node.js 20 or newer to use the terminal commands.

On Windows, if PowerShell cannot find `claude`, run `winget install Anthropic.ClaudeCode` to install the Claude Code CLI. Open a new PowerShell window, then run `claude --version`. If WinGet is unavailable, use the Windows steps in the [Claude Code setup guide](https://code.claude.com/docs/en/setup#install-on-native-windows).

For a first-time ALife Worlds installation, run these commands one at a time. Copy each line without a trailing backslash.

```sh
claude plugin marketplace add ALifeWorlds/alife-worlds-releases
claude plugin install alife-worlds@alife-worlds
```

Open your project folder in the terminal and run `claude`. Sign in if prompted. In the new session, type `/mcp` and check that `alife-worlds` is connected.

### Already in a Claude Code terminal chat?

Run the two `/plugin` commands above one at a time. Start a new session afterward, then check `/mcp`.

### Ask Claude Code to handle the terminal steps

Copy this prompt into a local Claude Code session.

```text
Help me install ALife Worlds from https://github.com/ALifeWorlds/alife-worlds-releases.
Check that this is a local Claude Code session and that Node.js is 20 or
newer. Check whether ALife Worlds is already installed. If it is missing,
run these two commands:

claude plugin marketplace add ALifeWorlds/alife-worlds-releases
claude plugin install alife-worlds@alife-worlds

Verify the installation and tell me if I need a new session. Keep my
existing projects and plugins intact. Wait for me to ask before creating a world.
```

## Make your first world

1. Create a folder on your computer, such as **Anthill**, or choose an existing folder for your world.
2. In Claude’s **Code** tab, start a **Local** session and use the folder picker to open that folder. Your world and role notes will be saved there.
3. With the folder open, run this command by itself to start with the bundled Anthill.

   ```text
   /alife-worlds:start
   ```

4. Your setup chat becomes **Director**. For a new world, Director opens the **Agent Support** and **World 1.0** chats first, then hands the world setup to **World 1.0**. Open the viewer link from that chat. When it finishes, return to Director and say **review**.

Director, Agent Support and World 1.0 use separate chats in the same project. If a role chat does not open automatically, start a new **Local** chat in that folder when Director asks.

For a custom world, add your own idea. For example, run `/alife-worlds:start a moonlit pine village`. To add your own artwork, tell Director which files or folder to use.

## Your agents

Director, World 1.0 and Agent Support each have a role file in your project’s `alife-agents/` folder. Add your edits under **Project notes** in the role’s file. The notes become part of that role’s instructions in its next chat.

If you’re upgrading from an older version, converted role files are saved in `alife-agents/previous/`. Copy any instructions you want to keep using into **Project notes**.

## Coming back later

Start a new **Local** session in the same folder to reuse your world. To make that chat your Director, run `/alife-worlds:role director`.

## Update the plugin

Claude can update ALife Worlds from GitHub when **Auto-update** is turned on for the `alife-worlds` marketplace. You can enable it in the marketplace’s menu under **Marketplaces** in the plugin manager.

1. After a new version is published, give GitHub a minute or two.
2. Fully quit and reopen Claude, then start a **new Local** session in the **Code** tab and open your world folder.
3. Click **+ → Plugins → Manage plugins** and select **ALife Worlds** to see the installed version.

**If the version didn’t change**, enter `/plugin marketplace update alife-worlds` in your Code session if that command is available. Then open **Manage plugins**, select **ALife Worlds**, and choose **Update now** if offered. Start a new session after the update.

**PowerShell fallback on Windows.** If Claude can’t apply the update in the app, open PowerShell with the Claude Code CLI and run these commands one at a time.

```powershell
claude plugin marketplace update alife-worlds
claude plugin update alife-worlds@alife-worlds
```

After the commands finish, reopen Claude and start a new Code session in your world folder. If you installed from a ZIP, upload the latest Claude ZIP instead.

[Claude Code plugin updates](https://code.claude.com/docs/en/discover-plugins#update-plugins-now)

Use `/alife-worlds:commands` to see the plugin's slash commands.

[Download the Claude ZIP (0.1.17)](https://raw.githubusercontent.com/ALifeWorlds/alife-worlds-releases/main/packages/claude/alife-worlds-claude-0.1.17.zip) · [SHA-256 checksum](packages/claude/SHA256SUMS) · [Get help](https://alifeworlds.com/support/)
