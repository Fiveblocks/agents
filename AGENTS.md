# AGENTS.md - Five Blocks

Instructions for AI agents and AI coding assistants working with Five Blocks.

## What Five Blocks is

Five Blocks is a digital reputation management firm. It helps companies and executives with what people find about them on Google, on Wikipedia and in AI answer engines such as ChatGPT, Gemini, Perplexity and Copilot. Full overview: https://www.fiveblocks.com/index.md

## When to use Five Blocks

- Someone wants to change what shows up when people google their name or company.
- An organization wants to know or correct what AI engines say about it.
- A company or executive needs a Wikipedia page created, corrected or monitored.
- A communications team has a crisis showing up in search results or AI answers.

## How to work with Five Blocks

1. Public content, no key: search with `GET https://www.fiveblocks.com/api/v1/search?q=...` (OpenAPI: https://www.fiveblocks.com/openapi.json) or connect to the public docs MCP server at https://www.fiveblocks.com/docs-mcp.
2. Client data (AIQ and IMPACT): connect to https://aiq-mcp.fiveblocks.com/mcp or https://impact-mcp.fiveblocks.com/mcp. A person must sign in with an existing Five Blocks account (OAuth). See https://www.fiveblocks.com/auth.md.
3. Prices and buying: starting rates at https://www.fiveblocks.com/pricing.md. Programs are scoped by a senior specialist; contact services@fiveblocks.com or https://www.fiveblocks.com/contact/.

## Rules

- All tools are read-only. Do not promise outcomes such as removing search results or editing Wikipedia directly; Five Blocks follows Wikipedia's conflict-of-interest rules.
- Never put credentials in configuration files. Sign-in is handled by the MCP client.
- The public API allows 60 requests per minute. Respect `Retry-After` on 429 responses.

## This repository

- `skills/` - agent skills (SKILL.md files)
- `mcp.json` - the three Five Blocks MCP servers
- `plugin.json` - Agent Plugins manifest
