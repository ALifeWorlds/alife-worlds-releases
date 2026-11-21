# ALife Worlds

**See your agents at work in a world you create.** Start with an idea or artwork and make a home for your team, a game, or an interactive story. Your ideas set the boundaries.

Created by **Itzel Juarez**. [Explore ALife Worlds](https://alifeworlds.com/) · [Get help](https://alifeworlds.com/support/)

## Install ALife Worlds

<p>
  <a href="#user-content-choose-codex"><img src=".github/readme/codex-tab.png" alt="Codex" width="110" height="34"></a>
  &nbsp;
  <a href="#user-content-choose-claude"><img src=".github/readme/claude-code-tab.png" alt="Claude" width="110" height="34"></a>
</p>

<a id="choose-codex"></a>

### <a href="#user-content-choose-codex"><img src=".github/readme/codex-section.png" alt="Install with Codex" width="320" height="44"></a>

[Set up](#set-up-codex) · [Install](#install-the-codex-plugin) · [Create a world](#create-a-world-in-codex)

#### Set up Codex

[Install the ChatGPT desktop app](https://learn.chatgpt.com/docs/app) and sign in. Open **Codex**, select **Local / This computer**, and choose the folder where you want your world to live. That's your project folder. Already using Codex? Open a chat in your local project.

#### Install the Codex plugin

Paste this message into that chat.

```text
Install ALife Worlds for Codex from this official GitHub repository.
https://github.com/ALifeWorlds/alife-worlds-releases

Check my current installation and update it if needed. Use the latest
Codex release ZIP and its SHA-256 checksum. Follow INSTALL.md to verify
and install it through Codex. Help me set up Node.js 20 or newer if needed.

Keep my projects and settings intact. Tell me when the plugin is ready.
Wait for me to ask before creating a world or any agents.
```

> **New to Codex?** You can start in regular ChatGPT for help. Use a **local Codex chat** to install the plugin.

#### Create a world in Codex

Type `@create-world` in your local Codex chat, select the ALife Worlds skill, and ask to use the bundled Anthill. You can also send this prompt.

```text
Use $alife-worlds:create-world to set up the bundled Anthill world in this project.
```

To use your own artwork, attach it in the project chat or share the path to your artwork folder.

[Windows PowerShell guide](INSTALL.md#windows-powershell-fresh-install) · [Download the Codex ZIP (0.4.32)](https://github.com/ALifeWorlds/alife-worlds-releases/releases/download/v0.4.32/alife-worlds-0.4.32.zip) · [Codex commands](COMMANDS.md)

[Back to install choices](#install-alife-worlds)

---

<a id="choose-claude"></a>

### <a href="#user-content-choose-claude"><img src=".github/readme/claude-section.png" alt="Install with Claude" width="320" height="44"></a>

[Set up](#set-up-claude-code) · [Install](#install-the-claude-code-plugin) · [Terminal and chat](#terminal-and-chat-options) · [Create a world](#create-a-world-in-claude-code)

#### Set up Claude Code

[Install Claude Desktop](https://claude.com/download) and sign in with an account that has Claude Code access. Install [Node.js 20 or newer](https://nodejs.org/en/download), then reopen Claude.

#### Install the Claude Code plugin

[Download the Claude ZIP (0.1.7)](https://raw.githubusercontent.com/ALifeWorlds/alife-worlds-releases/main/packages/claude/alife-worlds-claude-0.1.7.zip). In Claude Desktop, go to **Customize → Plugins → Add → Upload plugin** and select the ZIP. Open the **Code** tab, choose **Local**, and select your project folder.

#### Terminal and chat options

If you prefer a terminal, follow the [Claude Code setup guide](https://code.claude.com/docs/en/quickstart) for your operating system. Install Node.js 20 or newer and reopen your terminal.

```sh
claude plugin marketplace add ALifeWorlds/alife-worlds-releases
claude plugin install alife-worlds@alife-worlds
```

Open your project folder and run `claude`. Type `/mcp` to check that ALife Worlds is connected.

If a Claude Code terminal chat is already open, use its slash commands.

```text
/plugin marketplace add ALifeWorlds/alife-worlds-releases
/plugin install alife-worlds@alife-worlds
```

Start a new session afterward. You can also paste this message into a local Claude Code chat.

```text
Install ALife Worlds for Claude Code from this official GitHub repository.
https://github.com/ALifeWorlds/alife-worlds-releases

Check my current installation and whether Node.js 20 or newer is available.
Use the terminal steps in the Claude section of the README to install
or update the plugin. Verify the result and tell me if I need a new session.
Wait for me to ask before creating a world.
```

#### Create a world in Claude Code

In your local Claude Code project, run this command by itself to start with the bundled Anthill. Open the browser link Claude returns.

```text
/alife-worlds:start
```

The setup creates the world and adds Director, World 1.0 and Agent Support to your project. To add your own artwork, tell Claude which files or folder to use. Run `/alife-worlds:commands` to see the available commands.

[Claude plugin checksum](packages/claude/SHA256SUMS) · [Claude Desktop plugin help](https://claude.com/docs/plugins/overview)

[Back to install choices](#install-alife-worlds)

## Check your version

In Codex, open **ALife Worlds** and look above the world canvas for the plugin version. **Check for updates** compares it with the latest public Codex release. Ask Director which version created your world and which version last ran it.

## Share a world or agent

[Submit a world or agent](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose) with a license and instructions so others can try it. Keep private chats, project data, and credentials out of submissions.

## Help and license

[Tabbed install guide](https://alifeworlds.github.io/alife-worlds-releases/) · [Website support](https://alifeworlds.com/support/) · [Report an issue](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose) · [MIT license](LICENSE) · [Third-party notices](THIRD_PARTY_NOTICES.md)
