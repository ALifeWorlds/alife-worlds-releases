# Install ALife Worlds for Claude Code

[View both installation options](README.md#install-alife-worlds)

ALife Worlds 0.1.3 runs in a local Claude Code project. You can use the Code tab in Claude Desktop or the Claude Code terminal. Both routes need [Node.js 20 or newer](https://nodejs.org/en/download). Reopen your app or terminal after installing Node.js.

[Claude app](#install-in-the-claude-app) · [Terminal](#install-from-the-terminal) · [Ask Claude](#ask-claude-code-to-handle-the-terminal-steps) · [First world](#make-your-first-world)

## Install in the Claude app

1. [Download Claude Desktop](https://claude.com/download), install it, and sign in with an account that has access to Claude Code.
2. [Download the ALife Worlds plugin ZIP](https://raw.githubusercontent.com/ALifeWorlds/alife-worlds-releases/main/packages/claude/alife-worlds-claude-0.1.3.zip).
3. Open **Customize → Plugins → Add → Upload plugin** and select the ZIP. Use the account you signed into for Claude Code. [Claude's plugin upload guide](https://claude.com/docs/plugins/overview)
4. Open the app's **Code** tab, choose a **Local** session, and open the folder where your world should live. Start a new session if you had one open while uploading. Check **+ → Plugins** or **Customize** for ALife Worlds. [Claude Code in the desktop app](https://code.claude.com/docs/en/desktop#install-plugins)

Regular Claude chat can help plan a world. Use the local **Code** session for the plugin's tools and browser viewer.

## Install from the terminal

1. [Install the latest Claude Code CLI](https://code.claude.com/docs/en/quickstart) for your operating system. On Windows, the official guide includes WinGet. Open a new terminal and check `claude --version` and `node --version`.
2. Run these commands in your terminal.

```sh
claude plugin marketplace add ALifeWorlds/alife-worlds-releases
claude plugin install alife-worlds@alife-worlds
```

3. Open your project folder in the terminal and run `claude`. Sign in if prompted. In the new session, type `/mcp` and check that `alife-worlds` is connected.

### Already in a Claude Code terminal chat?

Enter these commands in the chat, one at a time. Start a new session afterward, then check `/mcp`.

```text
/plugin marketplace add ALifeWorlds/alife-worlds-releases
/plugin install alife-worlds@alife-worlds
```

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

In the local project, send this prompt.

```text
Use /alife-worlds:create-world to set up a moonlit pine village in this
project. Then open the ALife World viewer and give me its browser link.
```

Open the local link Claude returns. For a world based on your art, add your idea and tell Claude which local files or folder to use.

[Download 0.1.3](https://raw.githubusercontent.com/ALifeWorlds/alife-worlds-releases/main/packages/claude/alife-worlds-claude-0.1.3.zip) · [SHA-256 checksum](packages/claude/SHA256SUMS) · [Get help](https://alifeworlds.com/support/)
