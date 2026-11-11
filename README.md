# ALife Worlds

ALife Worlds is a Codex plugin for making interactive worlds from pictures, your own artwork, or a few words. Build a place for a story or a small game, or give the agents in your project a place to work. You can start with the included ant colony, bring an existing project, or build a world with no agents at all.

[Visit ALife Worlds](https://alifeworlds.com/) · [Install in Codex](#install-in-codex-on-windows) · [Create your private world](#create-your-private-world) · [Download the release](#download-the-release-candidate) · [Report a bug or suggest an idea](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose)

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

You’ll need the Codex desktop app, the Codex CLI, and Node.js 20 or later. Run these commands in PowerShell under the same Windows account and Codex profile you use for the app. For a first install, `codex --version`, `codex plugin --help`, and `node --version` should all work. [Codex desktop setup](https://developers.openai.com/codex/app/) · [Codex CLI setup](https://developers.openai.com/codex/cli/) · [Node.js downloads](https://nodejs.org/en/download)

**1. Download, verify, and install the plugin.** Paste the following block into PowerShell. It downloads the release asset, checks the published SHA-256, and creates the local catalog Codex needs to install this ZIP. Keep the release folder after installation so Codex can find the catalog again.

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
codex plugin add alife-worlds@alife-worlds-releases --json
if ($LASTEXITCODE -ne 0) { throw 'Plugin installation failed.' }
```

**2. Check your installation.** Run the command below. Look for `alife-worlds` from `alife-worlds-releases` with version `0.4.8` and `enabled: true`. If the first block reports an existing release folder, check the installation here before doing anything else. If installation was interrupted, keep that folder and rerun the first block with a new, unused `$release` path.

```powershell
codex plugin list --json
```

This path was tested with Codex CLI 0.164.0 and Node.js 24 on Windows, starting from an empty Codex profile. Codex loaded the `alife-worlds:create-world` skill and the `open_world` launcher. Before setup, a new profile lists zero worlds.

## Create your private world

1. In Codex desktop, add or open the local project folder where you want your world to live. An empty folder works for a first run. Start a new chat **inside that saved project**.
2. In the chat’s skill picker, select **`alife-worlds:create-world`**. Paste the request below, replacing both bracketed fields with the model ID and reasoning level you want for the new agents. Then send it. If you already have approved agent settings, you can say “use my approved settings” instead.

   > Create a private local ALife World for this project using the default colony. For new core agents, I approve [model ID] with [reasoning level] at Standard speed. Open my world when it’s ready.

3. On first setup, the current chat becomes the **Director**. The plugin sets up **Agent Support** and **World Requests** and registers the world for this folder. Once setup reports ready, open the local dashboard in Codex and check that the project and agents are yours. To return later, ask “Open this project’s existing ALife World.”
4. **Optional hosted Site.** If you want a private web address, enable Sites in your signed-in account. In the same project ask, “Create an owner-private Site for this world and pair only this project with it.” Complete the private pairing flow in your account. Check that you can open the Site while signed in as its owner and that a signed-out browser window asks you to sign in or denies access. Keep pairing credentials out of chat, Git and public issues.

## Backups and liability

Before using the plugin on important work or approving a cleanup or deletion, save open files and make a backup you can restore. Include untracked files and any local world data you want to keep. Store private backups outside the project folder.

ALife Worlds is provided as is, without warranty. To the extent permitted by applicable law, the MIT License limits the liability of its authors and copyright holders, including original creator Itzel Juarez, for claims arising from use of the software. Examples include lost work, accidentally deleted projects, overwritten or corrupted files, and recovery costs. [License and explanatory note](LICENSE)

## Help improve the plugin

[Report a bug or suggest a change](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose). For a bug, include the release version, what you expected, what happened, and steps we can try in a sample world. For an idea, describe the change and who it would help. Please keep private Site links, pairing credentials, and chat logs out of public reports.

Read the [contribution guide](CONTRIBUTING.md) for how suggestions are reviewed. To report a sensitive issue, follow the [security reporting guide](SECURITY.md).

The software uses the [MIT license](LICENSE). Bundled fonts, audio, and artwork have their own [notices and credits](THIRD_PARTY_NOTICES.md).
