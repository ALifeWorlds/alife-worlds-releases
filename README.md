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

You’ll need Codex desktop, the Codex CLI, and Node.js 20 or later. Use the same Windows account and Codex profile for the CLI and the desktop app. If ALife Worlds is already installed, go straight to step 3. [Codex desktop setup](https://developers.openai.com/codex/app/) · [Codex CLI setup](https://developers.openai.com/codex/cli/) · [Node.js downloads](https://nodejs.org/en/download)

**1. Add the release to your local catalog.** Run the following block in PowerShell once. It downloads the official ZIP, checks its SHA-256 checksum, and makes ALife Worlds available in the Codex plugin browser. Keep the release folder so Codex can find it.

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

**2. Install using `/plugins`.** In the same PowerShell window, enter `codex` to open Codex. At the Codex prompt, type **`/plugins`** with the leading slash and press Enter. Choose the **alife-worlds-releases** catalog, select **ALife Worlds**, and choose **Install**. [Codex slash-command guide](https://developers.openai.com/codex/cli/slash-commands/)

**3. Watch for ALife Worlds in Codex desktop.** Open the desktop app and select **Plugins** in the sidebar. When **ALife Worlds** appears as installed and enabled, you’re ready to create. If the app was open during installation and the plugin hasn’t appeared, reopen the app under the same profile and check **Plugins** again.

## Create your private world

Choose how you want to start in Codex desktop.

- **Create a new project.** Make an empty folder for your world. Use **File → Open Folder** to open it in Codex, then start a chat inside that project.
- **Bring an existing project.** Open its folder in Codex and start a chat there. Ask ALife Worlds to connect the project and reuse its existing agents. If you have an exported ALife world definition, paste its `/import` command in the destination project and review it there.
- **Use a folder of references.** Put your artwork, screenshots, or notes in a folder inside the project. Give the chat its relative path, such as `references/`, and say what you want to use. You can also attach individual images to your message.

If Codex asks **Trust this folder?**, check the path and choose **Trust folder** if you want your agents to work there.

**Start creating.** In the project chat, select the ALife Worlds skill **`alife-worlds:create-world`**. Send a request in your own words, or copy the example below. Replace the bracketed fields with your preferred model and reasoning level. If you already have approved agent settings, say “use my approved settings” instead.

> Create a private world for this project. Start with the default world. For new core agents, I approve [model ID] with [reasoning level] at Standard speed. Open my world when it’s ready.

For help writing your own request, open the Worlds page and choose **Copy starting prompt**. Edit it in your project chat before you send it. The website also has examples for using your art or connecting an existing team. [See and copy the starting prompt](https://alifeworlds.com/worlds/#prompt-starter) · [Use your artwork](https://alifeworlds.com/how-it-works/#your-art) · [Connect your existing team](https://alifeworlds.com/how-it-works/#existing-team)

**What happens next.** On first setup, the current chat becomes the **Director**. If a core chat shows **Needs approval**, open that chat to review the requested action. Choose **Allow once** for a step you approve. On Windows, the setup helper may ask to record its progress in the `.alife-project-operations` folder alongside your project. The plugin sets up **Agent Support** and **World Requests** and registers the world for this folder. Once setup reports ready, open the local dashboard in Codex and check that the project and agents are yours. To return later, ask “Open this project’s existing ALife World.”

**Optional hosted Site.** If you want a private web address, enable Sites in your signed-in account. In the same project ask, “Create an owner-private Site for this world and pair only this project with it.” Complete the private pairing flow in your account. Check that you can open the Site while signed in as its owner and that a signed-out browser window asks you to sign in or denies access. Keep pairing credentials out of chat, Git and public issues.

## Backups and liability

Before using the plugin on important work or approving a cleanup or deletion, save open files and make a backup you can restore. Include untracked files and any local world data you want to keep. Store private backups outside the project folder.

ALife Worlds is provided as is, without warranty. To the extent permitted by applicable law, the MIT License limits the liability of its authors and copyright holders, including original creator Itzel Juarez, for claims arising from use of the software. Examples include lost work, accidentally deleted projects, overwritten or corrupted files, and recovery costs. [License and explanatory note](LICENSE)

## Help improve the plugin

[Report a bug or suggest a change](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose). For a bug, include the release version, what you expected, what happened, and steps we can try in a sample world. For an idea, describe the change and who it would help. Please keep private Site links, pairing credentials, and chat logs out of public reports.

Read the [contribution guide](CONTRIBUTING.md) for how suggestions are reviewed. To report a sensitive issue, follow the [security reporting guide](SECURITY.md).

The software uses the [MIT license](LICENSE). Bundled fonts, audio, and artwork have their own [notices and credits](THIRD_PARTY_NOTICES.md).
