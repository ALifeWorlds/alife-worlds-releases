# Install ALife Worlds for Claude Code

[View both installation options](README.md#install-alife-worlds)

ALife Worlds 0.1.8 runs in a local Claude Code project. You can use the Code tab in Claude Desktop or the Claude Code terminal. Both routes need [Node.js 20 or newer](https://nodejs.org/en/download). Reopen your app or terminal after installing Node.js.

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

To install by upload, [download the Claude ZIP (0.1.8)](https://raw.githubusercontent.com/ALifeWorlds/alife-worlds-releases/main/packages/claude/alife-worlds-claude-0.1.8.zip), then select it under **Customize → Plugins → Add → Upload plugin**. Check for ALife Worlds in **+ → Plugins** or **Customize**. [Claude Code in the desktop app](https://code.claude.com/docs/en/desktop#install-plugins)

## Install from the terminal

1. [Install the latest Claude Code CLI](https://code.claude.com/docs/en/quickstart) for your operating system. On Windows, the official guide includes WinGet. Open a new terminal and check `claude --version` and `node --version`.
2. Run these commands in your terminal.

```sh
claude plugin marketplace add ALifeWorlds/alife-worlds-releases
claude plugin install alife-worlds@alife-worlds
```

3. Open your project folder in the terminal and run `claude`. Sign in if prompted. In the new session, type `/mcp` and check that `alife-worlds` is connected.

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

1. Open the **Code** tab and start a new **Local** session.
2. Click the folder picker, choose **New folder**, name it **Anthill**, and select it.
3. Run this command by itself to start with the bundled Anthill.

   ```text
   /alife-worlds:start
   ```

4. Open the local viewer link Claude returns. This chat becomes your **Director**.

For a custom world, add your own idea. For example, run `/alife-worlds:start a moonlit pine village`. To add your own artwork, tell Director which files or folder to use.

## Your agents

Director, World 1.0 and Agent Support are saved under `alife-agents/` in your project folder. Open those files to read or edit the agents. ALife Worlds syncs its managed copies into `.claude/agents/` when a new chat starts, so edits apply in the next chat. Type `/agents` for agent help, or ask Claude to list your project’s agents. [Claude Code agents](https://code.claude.com/docs/en/sub-agents)

## Coming back later

Start a new **Local** session on the same folder. If it does not start as Director, run `/alife-worlds:start` again to reuse the existing world.

## Update the plugin

Run `/plugin marketplace update alife-worlds`, then start a new chat. If Claude offers **Update now** for ALife Worlds, select it before starting the chat. For a ZIP installation, upload the latest Claude ZIP. [Claude Code plugin updates](https://code.claude.com/docs/en/discover-plugins#update-plugins)

Use `/alife-worlds:commands` to see the plugin's slash commands.

[Download the Claude ZIP (0.1.8)](https://raw.githubusercontent.com/ALifeWorlds/alife-worlds-releases/main/packages/claude/alife-worlds-claude-0.1.8.zip) · [SHA-256 checksum](packages/claude/SHA256SUMS) · [Get help](https://alifeworlds.com/support/)
