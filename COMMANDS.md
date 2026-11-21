# ALife Worlds commands

These workflows are ALife Worlds skills. To see the menu in a local Codex chat, send `Use $alife-worlds:commands to show the ALife Worlds command menu.` For an individual workflow, use its exact skill name, such as `$alife-worlds:import`. Codex controls which entries appear in its `/` menu, and availability varies by desktop version.

| Command | What it does |
| --- | --- |
| /create-world | Create or connect a world in this Codex project. |
| /import | Import an agent, world or plugin into this project. |
| /export | Export an agent, world or plugin to reuse elsewhere. |
| /world | Customize your world's art, layout and behavior. |
| /plugin | Check plugin versions, updates, rules and workflows. |
| /rule | Set or view rules for the agent in this chat. |
| /universal | Set rules inherited by new agents and successors. |
| /delete | Review and clear this project's folder contents. |
| /commands | Show every ALife Worlds command and what it does. |

Only create-world runs the project setup flow. /rule applies to the agent in this chat; /universal controls incoming-agent inheritance; /world manages the world; /plugin manages plugin-wide rules and workflows. The four rule commands also support list and export. /export directly prepares a portable definition or scoped rule prompt. /commands shows help.

/import writes only to this chat's verified project and preserves incoming agent versions and compatible local changes. Definitions transfer no private chat history, credentials or native identity. New-agent creation stays with Agent Support. /delete shows a recovery-backed plan and requires the exact final human confirmation. Menu selection alone performs no import, deletion, installation or publication.

The download contains the full command and integration guides. The website, Dot assets and private world data remain outside the plugin distribution.

/plugin version is a read-only check of the invoked packet and project creation/current runtime records. /plugin status --check-updates also checks the official public release. The version/update notice is part of 0.4.23 and later.
