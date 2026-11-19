# ALife Worlds

A local Codex plugin that gives your project’s agents a visual home. Create worlds, games, interactive experiences and stories from your ideas or your own licensed references. Created by **Itzel Juarez**.

[Website](https://alifeworlds.com/) · [Setup guide](https://alifeworlds.com/how-it-works) · [Support](https://alifeworlds.com/support/) · [Report an issue](https://github.com/ALifeWorlds/alife-worlds-releases/issues/new/choose)

## Downloads

**[Download ALife Worlds 0.4.23](packages/alife-worlds-0.4.23.zip)** · [SHA-256 checksum](packages/SHA256SUMS)

This qualified packet excludes website source/artwork, Dot assets and artwork with unverified redistribution rights. It restores the original creator-confirmed planet icon and includes an exact media/license inventory. Seven earlier binary downloads have been withdrawn; their plain version tags retain sanitized documentation history only. Do not install an older cached package.

## Use your project folder

Create worlds in a local **Codex project chat** using ALife Worlds → create-world. Keep each project’s files, imported roles, artwork and ordinary records in that project’s verified folder. Run /import from the destination project’s own chat. Regular ChatGPT can help prepare your prompt; local project creation takes place in Codex.

## Share your work

You can submit agent definitions and world designs through the Share a world or agent issue template. Share only material you have permission to redistribute, include its license and import instructions, and exclude private chats, identities, project data and credentials. Submissions need review before they are described as official or compatible.

## License

Retained project documentation and software notices use the existing [MIT license](LICENSE). The website and its images are a separate distribution. No website asset license is granted by this repository. See [Third-party notices](THIRD_PARTY_NOTICES.md), [Contributing](CONTRIBUTING.md) and [Security](SECURITY.md).

## Versioned agent imports

Imported agents keep their explicitly supplied version in creation names and saved definitions. Combining a local definition with an incoming update preserves both sources, resolves conflicting edits and prepares a version newer than both. Export includes the full combined definition and exact baseline versions. Same-identity adoption into a running agent still needs an actual supported writer and saved/native readback; the merge helper does not create or replace agents.

The 0.4.23 package passes 97 focused source checks and generated-rule/media gates. The release ZIP preserves every qualified packet byte. Codex installation, loaded-host visual acceptance and private-world activation are separate; this delivery leaves the existing Codex plugin and local runtime on 0.4.22. This is not OpenAI directory approval.

## Command menu

Every command has its own Codex skill entry and a short action description. Type / and search import, for example, then choose ALife Worlds → import. You can also attach $alife-worlds:import directly. See [all commands and their actions](COMMANDS.md).

## Plugin version and update status

The ALife Worlds view in 0.4.23 shows its actual plugin version above the world canvas and provides Check for updates. A verified newer stable public release shows Update available linking to its official release page. It never installs automatically. Offline checks remain unavailable.

Director can answer version questions using /plugin version. New projects retain the creation plugin version; verified runtime updates append project-local history in .alife-worlds/plugin-version.json. World-only changes do not change the plugin version.

The notice is new in 0.4.23, so 0.4.22 cannot display it before its first supported manual update. Git publication does not install a local plugin or guarantee a native Codex marketplace badge.
