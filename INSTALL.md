# Install ALife Worlds

For a guided install, open the [Codex instructions in the README](README.md#install-alife-worlds) and paste the installation prompt into your local Codex chat.

[Requirements](#before-you-start) · [Install with PowerShell](#windows-powershell-fresh-install) · [Update an existing install](#already-installed)

## Before you start

- Install and sign in to the [official desktop app](https://learn.chatgpt.com/docs/app), choose Codex, and open your project using **Local / This computer**.
- ALife Worlds requires **Node.js 20 or newer** available as `node`. Get the current LTS from [Node.js](https://nodejs.org/en/download) if needed, then reopen the app/terminal so it can find Node.
- For the terminal route, the `codex` command must also be available. Follow [OpenAI's CLI installation guide](https://learn.chatgpt.com/docs/cli) if it is missing. The desktop app and command-line tool are separate entry points.

No GitHub account or Git clone is required for the release-ZIP route. This repository distributes plugin ZIPs; its GitHub **Source code** archives are not plugin install packages.

## Windows PowerShell fresh install

These steps are for a **new installation**. They stop if an ALife Worlds plugin or this installation folder already exists. For updates, use [Already installed](#already-installed).

### 1. Open your project folder

Open an ordinary PowerShell window and change to the folder you chose in Codex. Replace the example path with your own:

```powershell
Set-Location -LiteralPath 'C:\path\to\your\project'
```

Everything downloaded below stays inside this folder's `.alife-worlds\plugin-install` directory. Codex manages its own installed cache separately. No administrator shell or execution-policy change is required by these commands.

### 2. Download and verify the plugin

This example installs **0.4.32**. Keep its versioned folder after installation because the local marketplace points to it.

```powershell
$ErrorActionPreference = 'Stop'
Get-Command node, codex -ErrorAction Stop | Out-Null
if ([int]((node --version).TrimStart('v').Split('.')[0]) -lt 20) {
    throw 'Install Node.js 20 or newer, then reopen PowerShell.'
}
$alifeExisting = codex plugin list --json | ConvertFrom-Json
if ($LASTEXITCODE -ne 0) { throw 'Could not read the Codex plugin list.' }
if (@($alifeExisting.installed | Where-Object { $_.name -eq 'alife-worlds' }).Count -gt 0) {
    throw 'ALife Worlds is already installed. Use the update guidance instead.'
}

$alifeVersion = '0.4.32'
$alifeInstallRoot = Join-Path (Get-Location).Path '.alife-worlds\plugin-install'
if (Test-Path -LiteralPath $alifeInstallRoot) {
    throw 'This setup folder already exists. Preserve it and ask Codex to inspect it.'
}
New-Item -ItemType Directory -Path $alifeInstallRoot | Out-Null
$alifeReleaseUrl = "https://github.com/ALifeWorlds/alife-worlds-releases/releases/download/v$alifeVersion"
$alifeZip = Join-Path $alifeInstallRoot "alife-worlds-$alifeVersion.zip"
$alifeChecksums = Join-Path $alifeInstallRoot 'SHA256SUMS'
Invoke-WebRequest -UseBasicParsing -Uri "$alifeReleaseUrl/alife-worlds-$alifeVersion.zip" -OutFile $alifeZip
Invoke-WebRequest -UseBasicParsing -Uri "$alifeReleaseUrl/SHA256SUMS" -OutFile $alifeChecksums
$alifeExpected = (Get-Content -LiteralPath $alifeChecksums | Where-Object {
    $_ -match ('^[0-9a-fA-F]{64}\s+alife-worlds-' + [regex]::Escape($alifeVersion) + '\.zip$')
})
if (@($alifeExpected).Count -ne 1) { throw 'Expected one matching release checksum.' }
$alifeExpectedHash = ($alifeExpected -split '\s+')[0]
if ((Get-FileHash -LiteralPath $alifeZip -Algorithm SHA256).Hash -ne $alifeExpectedHash) {
    throw 'Checksum mismatch. Do not install this download.'
}
$alifePluginPath = Join-Path $alifeInstallRoot "alife-worlds-$alifeVersion"
Expand-Archive -LiteralPath $alifeZip -DestinationPath $alifePluginPath
$alifeManifest = Get-Content -LiteralPath (Join-Path $alifePluginPath '.codex-plugin\plugin.json') -Raw | ConvertFrom-Json
if ($alifeManifest.name -ne 'alife-worlds' -or $alifeManifest.version -ne $alifeVersion) {
    throw 'The extracted plugin identity does not match the release.'
}
```

### 3. Register and install through Codex

The ZIP is the complete plugin packet, not a Git source checkout. Create a small local catalogue beside it so Codex can install the packet through its supported marketplace command. Do not run a build step or pass the ZIP itself to `codex plugin add`.

```powershell
$alifeCatalogue = Join-Path $alifeInstallRoot '.agents\plugins'
New-Item -ItemType Directory -Path $alifeCatalogue | Out-Null
$alifeCatalogueJson = @{
    name = 'alife-worlds-release'
    interface = @{ displayName = 'ALife Worlds' }
    plugins = @(@{
        name = 'alife-worlds'
        source = @{ source = 'local'; path = "./alife-worlds-$alifeVersion" }
        policy = @{ installation = 'AVAILABLE'; authentication = 'ON_INSTALL' }
        category = 'Productivity'
    })
} | ConvertTo-Json -Depth 6
[System.IO.File]::WriteAllText(
    (Join-Path $alifeCatalogue 'marketplace.json'),
    $alifeCatalogueJson,
    [System.Text.UTF8Encoding]::new($false)
)

codex plugin marketplace add "$alifeInstallRoot" --json
if ($LASTEXITCODE -ne 0) { throw 'Marketplace registration failed. Preserve the folder and inspect the error.' }
codex plugin add alife-worlds@alife-worlds-release --json
if ($LASTEXITCODE -ne 0) { throw 'Plugin installation failed. Preserve the registration and inspect the error.' }
codex plugin list --marketplace alife-worlds-release --json
```

The plugin list should show `alife-worlds@alife-worlds-release`, version `0.4.32`, as enabled. Run `codex plugin --help` to see the commands available in your version of Codex.

### 4. Open it and make a world

Start a new Codex chat in your chosen local project. Type `@create-world`, select the ALife Worlds skill, and ask to use the bundled Anthill. You can also send this prompt.

```text
Use $alife-worlds:create-world to set up the bundled Anthill world in this project.
```

Installation alone creates no world or agent team. To see help first, use `$alife-worlds:commands`. [All commands](COMMANDS.md).

## Already installed

Use the existing installation and its marketplace rather than adding another ALife Worlds copy. Give your local Codex chat the repository link and ask:

```text
Update my existing ALife Worlds plugin using the latest stable release from
https://github.com/ALifeWorlds/alife-worlds-releases
Read INSTALL.md, inspect my current installation and marketplace first,
verify the release ZIP checksum, and use the supported Codex refresh flow.
Preserve my worlds, agents, settings and other plugins. Do not migrate or
restart existing project runtimes. Verify the installed version afterward.
```

The version notice in 0.4.23 and later appears at the top of the ALife Worlds view. **Update available** links to the newer release; it does not run an installer. A 0.4.22 copy needs its first manual update to gain that notice. Project creation/runtime history and world versions remain independent. Git publication alone does not update an installed local copy.

## macOS, Linux or a managed computer

Use the guided prompt and tell Codex your operating system. The local catalogue and `codex plugin` flow are portable, but the PowerShell path/download example above is for Windows. ALife Worlds' included reconnect helpers are Windows-specific; other operating-system workflows are not qualified by this Windows guide. Your organization's plugin policies can also determine which local plugins you may install.

## If something stops

Paste the error into your local Codex chat or [ask for support](https://alifeworlds.com/support/). Keep the downloaded folder so the original attempt can be inspected. An incomplete download, catalogue registration or installation is not a working plugin; do not replace its files or delete an existing installation to hide the error.

References: [OpenAI local-plugin packaging](https://developers.openai.com/plugins/build/plugins), [Codex plugin commands](https://learn.chatgpt.com/docs/developer-commands), [desktop setup](https://learn.chatgpt.com/docs/app).
