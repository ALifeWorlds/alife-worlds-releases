# ALife Worlds

ALife Worlds is a Codex plugin for making interactive worlds from pictures, your own artwork, or a few words. Build a place for a story or a small game, or give the agents in your project a place to work. You can start with the default world, bring an existing project, or build a world with no agents at all.

[Visit ALife Worlds](https://alifeworlds.com/) · [See the starting prompt](https://alifeworlds.com/worlds/#prompt-starter) · [Install in Codex](#install-in-codex-on-windows) · [Create your private world](#create-your-private-world) · [Download the release](#download-the-release-candidate) · [Report a bug or suggest an idea](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose)

## What you can do

- **Make the world yours.** Describe a setting or supply reference artwork in Codex. Start with a scene you can explore, then ask for changes to its appearance and interactions.
- **See when your team needs you.** In the colony, each connected agent has a room. When an agent asks for input, its ant shows that state. Open the activity list to see the latest recorded work.
- **Follow a sprint.** Check the goal, next action, blockers, and outstanding QA on a task card. Expand a sprint to see the tasks behind its progress.
- **Reuse rules across worlds.** At the bottom of the sprint section, open **Rules** to copy or export plugin and world rules. Review them in the destination project before importing them.

Your world starts in your local project. You can also pair it with an owner-private Site to view that project’s world and agents on the web. The [public ALife Worlds website](https://alifeworlds.com/) is open to everyone. Your private dashboard has its own address and access list.

Created by **[Itzel Juarez](https://github.com/ItzelJuarez)**. Official plugin releases are published by **[ALife Worlds](https://github.com/ALifeWorlds)**.

## Download the release candidate

**[Download ALife Worlds v0.4.8-rc.1 (.zip)](https://github.com/ALifeWorlds/alife-worlds-releases/releases/download/v0.4.8-rc.1/alife-worlds-0.4.8.zip)** · [Release notes](https://github.com/ALifeWorlds/alife-worlds-releases/releases/tag/v0.4.8-rc.1) · [SHA-256 checksum](packages/SHA256SUMS)

The release tag is **v0.4.8-rc.1**. The plugin inside the ZIP reports **0.4.8**.

The download above is the installable plugin ZIP. The [release guide](RELEASE.md) lists the changes in this candidate.

## Install in Codex on Windows

Already installed? Open **Codex → Plugins** and look for **ALife Worlds**. Then go to [Create your private world](#create-your-private-world).

For a first install, you need these three apps.

- [Codex desktop](https://developers.openai.com/codex/app/) is where you chat and use your world.
- [Node.js 20 or newer](https://nodejs.org/en/download) runs the plugin.
- [Codex CLI](https://developers.openai.com/codex/cli/) is the version of Codex that opens in a terminal.

Use the same Windows account for all three.

### 1. Download the plugin

Open the Windows Start menu, search for **PowerShell**, and open it.

Expand the box below. Copy all the commands, paste them into PowerShell, and press Enter. They download ALife Worlds and add it to the list of plugins you can install.

<details>
<summary>Show the commands to copy</summary>

```powershell
$ErrorActionPreference = 'Stop'
$release = Join-Path $env:LOCALAPPDATA 'ALifeWorlds\releases\v0.4.8-rc.1'
$plugin = Join-Path $release 'plugins\alife-worlds'
$catalog = Join-Path $release '.agents\plugins'
if (Test-Path -LiteralPath $release) { throw "The release folder already exists: $release. Use a new empty folder or register the existing installation." }
New-Item -ItemType Directory -Path $plugin, $catalog | Out-Null

$zip = Join-Path $release 'alife-worlds-0.4.8.zip'
$url = 'https://github.com/ALifeWorlds/alife-worlds-releases/releases/download/v0.4.8-rc.1/alife-worlds-0.4.8.zip'
Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $zip
$expected = '72ec4e2f9b52023dbb167609f1ea4f16e8bb2293fd7366377f76f9e9fa5fe150'
if ((Get-FileHash -LiteralPath $zip -Algorithm SHA256).Hash -ne $expected) { throw 'Checksum mismatch. Stop here.' }
Expand-Archive -LiteralPath $zip -DestinationPath $plugin

$entry = '{"name":"alife-worlds-releases","plugins":[{"name":"alife-worlds","source":{"source":"local","path":"./plugins/alife-worlds"},"policy":{"installation":"AVAILABLE","authentication":"ON_INSTALL"},"category":"Productivity"}]}'
[IO.File]::WriteAllText((Join-Path $catalog 'marketplace.json'), $entry, [Text.UTF8Encoding]::new($false))
codex plugin marketplace add "$release"
if ($LASTEXITCODE -ne 0) { throw 'Catalog registration failed.' }
```

Keep the folder these commands create. Codex uses it to find the plugin.

</details>

If PowerShell says the release folder already exists, check **Codex → Plugins** first. If the download was interrupted, keep that folder and use a new folder name on the `$release` line before trying again.

### 2. Install ALife Worlds

Open Codex desktop. In the message box, type **`/Alife worlds`**. Include the slash at the start.

Select **ALife Worlds** from the results. If Codex asks you to install it, choose **Install**.

### 3. Look for the plugin

Click **Plugins** in the Codex sidebar.

Watch for **ALife Worlds** to appear. Make sure it is installed and turned on. If it hasn’t appeared yet, close and reopen the app using the same Codex profile.

## Create your private world

### 1. Choose your project

Pick the option that fits your work.

- **Start fresh.** Make an empty folder. In Codex, choose **File → Open Folder** and open it.
- **Use an existing project.** Open that project’s folder in Codex.
- **Use your own pictures or notes.** Put them in a folder inside your project, such as `references/`. Tell the chat which folder to use. You can also attach pictures to your message.

Start a chat inside the project you chose. If Codex asks **Trust this folder?**, check that the folder is yours, then choose **Trust folder** if you want to use it.

Have an exported ALife world? Paste its `/import` command in this project’s chat and review the changes it suggests.

### 2. Ask ALife Worlds to create

In your project chat, type **`/Alife worlds`** and select **ALife Worlds** from the results.

Tell it what you want to make. You can copy this example.

> Create a private world for this project. Start with the default world. Use my approved agent settings at Standard speed. Open my world when it’s ready.

If you haven’t chosen settings for new agents, tell Codex which model and reasoning level you want it to use. You can choose the same settings you use for your chat.

### 3. Follow the setup

ALife Worlds sets up three main chats, called **Director**, **Agent Support**, and **World Requests**.

If a chat shows **Needs approval**, open it and read the request. Click **Allow once** for a step you approve. One request may ask to save setup progress in `.alife-project-operations`, a folder next to your project.

When setup says it is ready, open your world and check that it shows your project and agents.

To come back later, ask in that project’s chat.

> Open this project’s existing ALife World.

## Get a starting prompt from the website

A prompt is the message you send to Codex to describe what you want.

1. Open the [ALife Worlds starting prompt](https://alifeworlds.com/worlds/#prompt-starter).
2. Scroll to **What will your world be?**
3. Click **Copy starting prompt**.
4. Return to your project chat in Codex, type **`/Alife worlds`**, and select **ALife Worlds**.
5. Paste the prompt. Add your own idea, pictures, or reference folder, then send it.

You can read more examples for [using your artwork](https://alifeworlds.com/how-it-works/#your-art) or [connecting an existing team](https://alifeworlds.com/how-it-works/#existing-team).

## Open your world on a private website

After your world works in Codex, you can give it its own private web address.

1. Turn on the **Sites** plugin in Codex.
2. In the same project chat, send the message below.
3. Follow the sign-in and connection steps Codex shows.
4. Open the new link and sign in with the account that owns the Site.
5. Open that link in a private browser window while signed out. It should ask you to sign in or deny access.

> Create a private website for this world. Give access only to my account and connect only this project.

Keep your connection keys and private Site link out of public GitHub issues.

## Backups and liability

Before using the plugin on important work or approving a cleanup or deletion, save open files and make a backup you can restore. Include untracked files and any local world data you want to keep. Store private backups outside the project folder.

ALife Worlds is provided as is, without warranty. To the extent permitted by applicable law, the MIT License limits the liability of its authors and copyright holders, including original creator Itzel Juarez, for claims arising from use of the software. Examples include lost work, accidentally deleted projects, overwritten or corrupted files, and recovery costs. [License and explanatory note](LICENSE)

## Help improve the plugin

[Report a bug or suggest a change](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose). For a bug, include the release version, what you expected, what happened, and steps we can try in a sample world. For an idea, describe the change and who it would help. Please keep private Site links, pairing credentials, and chat logs out of public reports.

Read the [contribution guide](CONTRIBUTING.md) for how suggestions are reviewed. To report a sensitive issue, follow the [security reporting guide](SECURITY.md).

The software uses the [MIT license](LICENSE). Bundled fonts, audio, and artwork have their own [notices and credits](THIRD_PARTY_NOTICES.md).
