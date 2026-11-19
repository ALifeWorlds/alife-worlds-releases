# ALife Worlds

**Give your Codex agents a world you can see.** Turn your ideas or artwork into a home for your team, a game, an interactive experience or a story. Your ideas set the boundaries.

Created by **Itzel Juarez**. [Explore the website](https://alifeworlds.com/) · [See how it works](https://alifeworlds.com/how-it-works) · [Get help](https://alifeworlds.com/support/)

## Start here — no PowerShell experience needed

You do not need to understand GitHub, clone this repository or type terminal commands yourself. The easiest route is to let Codex handle the installation while you describe what you want.

### 1. Get Codex ready

1. **Install the desktop app** using [OpenAI's official download and setup guide](https://learn.chatgpt.com/docs/app), then sign in with your ChatGPT account.
2. **Choose Codex** in the app. Select **Local / This computer**, rather than Cloud, and open the folder where you want your world to live. A project is simply that folder and its chats. See [OpenAI's quickstart](https://learn.chatgpt.com/docs/quickstart) if this is your first time.
3. **Start a chat in that project** and paste the installation prompt below.

Already using Codex? Open your local project chat and go straight to the prompt.

### 2. Option 1: ask ChatGPT or Codex to help you install

Copy this whole message, including the GitHub link:

```text
Help me install ALife Worlds from this official release repository:
https://github.com/ALifeWorlds/alife-worlds-releases

I am new to Codex and do not want to type PowerShell commands myself.
First check whether this chat can work with files on my computer. If it
cannot, walk me through OpenAI's official desktop setup and give me this
prompt to continue in a local Codex project chat.

In local Codex, read the repository's README.md and INSTALL.md. Check for
an existing ALife Worlds installation before making changes. Install the
latest stable release using its named plugin ZIP and SHA256SUMS, verify
the checksum, and follow the documented Codex marketplace installation.
Check the Node.js and Codex requirements and help install missing tools
from their official sources if needed.

Keep the downloaded setup files inside this project's folder. Preserve
existing worlds, agents, settings and other plugins. Verify the installed
version and available ALife Worlds commands, then tell me how to open it.
Do not create a world or new agent chats until I ask.
```

**Starting in regular ChatGPT is fine for guidance.** A web chat without access to your computer cannot install this local plugin for you; continue in a local Codex chat for the installation. Giving ChatGPT the link alone does not install anything.

### 3. Create your first world

After Codex confirms the plugin is installed, send this in the project where you want the world:

```text
Use $alife-worlds:create-world to create an ALife World in this project.
Help me choose a world for my agents, or a game, interactive experience
or story. Start with my idea and explain the choices in plain language.
```

To use your own art, attach it in that same Codex chat or give Codex its folder path. Your project's artwork, world files, agent homes and ordinary working records stay with that project.

## Option 2: install with PowerShell

Comfortable with Codex and a terminal? Follow the [Windows PowerShell installation steps](INSTALL.md#windows-powershell-fresh-install). They cover downloading the release, checking its checksum, registering a local marketplace and verifying the installed plugin.

You need Node.js 20 or newer and the Codex command available. This route uses a verified release ZIP; you do not need to build the plugin or clone the source repository. Existing installations should use the [update guidance](INSTALL.md#already-installed) instead of creating a second copy.

## Downloads and commands

**[Latest release](https://github.com/ALifeWorlds/alife-worlds-releases/releases/latest)** · [Plugin ZIP 0.4.23](https://github.com/ALifeWorlds/alife-worlds-releases/releases/download/v0.4.23/alife-worlds-0.4.23.zip) · [Checksum](https://github.com/ALifeWorlds/alife-worlds-releases/releases/download/v0.4.23/SHA256SUMS)

On the release page, choose **alife-worlds-0.4.23.zip** under Assets. GitHub's **Source code** downloads contain this distribution repository, not the installable plugin packet.

Type `/` in the Codex composer and search for an ALife Worlds command, or attach its full name such as `$alife-worlds:import`. [See all nine commands and what they do.](COMMANDS.md)

## Know which version you are using

From version 0.4.23, the **ALife Worlds** view shows its plugin version above the world canvas. **Check for updates** looks for a newer stable public release. **Update available** opens that release's page; it does not install it automatically.

Ask Director which plugin version your project uses, or use `/plugin version`. Project metadata keeps the original creation version and later verified runtime updates separately from world changes. An older 0.4.22 installation needs its first manual update before it can display the new notice. A GitHub push alone does not update Codex or guarantee a native marketplace badge.

## Share a world or agent

Want others to import something you made? [Prepare a community submission](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose) with your agent definition or world design, its license and import instructions. Keep private chats, credentials and project data out of submissions. Community submissions are reviewed before being described as official or compatible.

Imported agents retain their explicit versions. Preparing an update preserves local changes and incoming improvements, with a choice for conflicts. Updating a running agent's instructions requires its separate supported adoption/readback workflow; preparing a definition does not complete that update.

## Help and license

[Website support](https://alifeworlds.com/support/) · [Report an issue](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose) · [MIT license](LICENSE) · [Third-party notices](THIRD_PARTY_NOTICES.md)

The plugin ZIP excludes website/Dot assets and artwork with unverified redistribution rights. The website is a separate distribution.

<details>
<summary>Release verification and older downloads</summary>

The 0.4.23 packet passed 97 focused source checks and generated-rule/media gates. All 395 ZIP entries match the sealed packet, and the published ZIP/checksum were verified anonymously. Installation, visible host behavior and world activation have separate verification; this is not OpenAI directory approval.

Earlier unqualified binary downloads were withdrawn. Historical plain-version tags retain sanitized documentation; use the current qualified release instead of an older cached packet.

</details>
