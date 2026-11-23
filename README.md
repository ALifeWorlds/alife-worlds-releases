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

[Windows PowerShell guide](INSTALL.md#windows-powershell-fresh-install) · [Download the Codex ZIP (0.4.33)](https://github.com/ALifeWorlds/alife-worlds-releases/releases/download/v0.4.33/alife-worlds-0.4.33.zip) · [Codex commands](COMMANDS.md)

[Back to install choices](#install-alife-worlds)

---

<a id="choose-claude"></a>

### <a href="#user-content-choose-claude"><img src=".github/readme/claude-section.png" alt="Install with Claude" width="320" height="44"></a>

[Set up](#set-up-claude-code) · [Install](#install-the-claude-code-plugin) · [Terminal](#terminal-and-chat-options) · [Create a world](#create-a-world-in-claude-code) · [Your agents](#your-claude-agents) · [Update](#update-claude)

#### Set up Claude Code

[Install Claude Desktop](https://claude.com/download) and sign in with an account that has Claude Code access. Install [Node.js 20 or newer](https://nodejs.org/en/download), then reopen Claude.

Run ALife Worlds in a **Local** session in the app’s **Code** tab. Regular Claude chats and Projects can help you plan your world.

#### Install the Claude Code plugin

1. Open Claude’s **Code** tab and start a new **Local** session.
2. Run these commands one at a time.

   ```text
   /plugin marketplace add ALifeWorlds/alife-worlds-releases
   /plugin install alife-worlds@alife-worlds
   ```

3. Close and reopen Claude.

To install by upload, [download the Claude ZIP (0.1.20)](https://raw.githubusercontent.com/ALifeWorlds/alife-worlds-releases/main/packages/claude/alife-worlds-claude-0.1.20.zip) and select it under **Customize → Plugins → Add → Upload plugin**.

#### Terminal and chat options

Install the [Claude Code CLI](https://code.claude.com/docs/en/quickstart) and Node.js 20 or newer to use the terminal commands.

On Windows, if PowerShell cannot find `claude`, run `winget install Anthropic.ClaudeCode` to install the Claude Code CLI. Open a new PowerShell window, then run `claude --version`. If WinGet is unavailable, use the Windows steps in the [Claude Code setup guide](https://code.claude.com/docs/en/setup#install-on-native-windows).

For a first-time ALife Worlds installation, run these commands one at a time. Copy each line without a trailing backslash.

```sh
claude plugin marketplace add ALifeWorlds/alife-worlds-releases
claude plugin install alife-worlds@alife-worlds
```

Open your project folder and run `claude`. Type `/mcp` to check that ALife Worlds is connected.

In a Claude Code chat, you can use the same two `/plugin` commands from the app steps. Start a new session afterward. You can also paste this message into a local Claude Code chat.

```text
Install ALife Worlds for Claude Code from this official GitHub repository.
https://github.com/ALifeWorlds/alife-worlds-releases

Check my current installation and whether Node.js 20 or newer is available.
Use the terminal steps in the Claude section of the README to install
or update the plugin. Verify the result and tell me if I need a new session.
Wait for me to ask before creating a world.
```

#### Create a world in Claude Code

1. Create a folder on your computer, such as **Anthill**, or choose an existing folder for your world.
2. In Claude’s **Code** tab, start a **Local** session and use the folder picker to open that folder. Your world and role notes will be saved there.
3. With the folder open, run this command by itself to start with the bundled Anthill.

   ```text
   /alife-worlds:start
   ```

4. Your setup chat becomes **Director**. For a new world, Director opens the **Agent Support** and **World 1.0** chats first, then hands the world setup to **World 1.0**. Open the viewer link from that chat. Director reviews the work automatically when it opens the role chats. If you opened the chats manually, return to Director and say **review** when World 1.0 finishes.

Director, Agent Support and World 1.0 use separate chats in the same project. If a role chat does not open automatically, start a new **Local** chat in that folder when Director asks.

For a custom world, include your idea, for example `/alife-worlds:start a moonlit pine village`. You can also tell Director which artwork files or folder to use.

#### Your Claude agents

Director, World 1.0 and Agent Support each have a role file in your project’s `alife-agents/` folder. Add your edits under **Project notes** in the role’s file. The notes become part of that role’s instructions in its next chat.

If you’re upgrading from an older version, converted role files are saved in `alife-agents/previous/`. Copy any instructions you want to keep using into **Project notes**.

#### Return to your Claude world

Start a new **Local** session in the same folder to reuse your world. To make that chat your Director, run `/alife-worlds:role director`.

#### Update Claude

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

Run `/alife-worlds:commands` to see the available commands.

[Full Claude setup guide](INSTALL-CLAUDE.md) · [Claude plugin checksum](packages/claude/SHA256SUMS) · [Claude Desktop plugin help](https://claude.com/docs/plugins/overview)

[Back to install choices](#install-alife-worlds)

## Check your version

In Codex, open **ALife Worlds** and look above the world canvas for the plugin version. **Check for updates** compares it with the latest public Codex release. Ask Director which version created your world and which version last ran it.

## Share a world or agent

[Submit a world or agent](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose) with a license and instructions so others can try it. Keep private chats, project data, and credentials out of submissions.

## Help and license

[Tabbed install guide](https://alifeworlds.github.io/alife-worlds-releases/) · [Website support](https://alifeworlds.com/support/) · [Report an issue](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose) · [MIT license](LICENSE) · [Third-party notices](THIRD_PARTY_NOTICES.md)
