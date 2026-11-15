# Five Blocks agent skills and MCP servers

Skills, MCP server configuration and agent instructions for [Five Blocks](https://www.fiveblocks.com/), a digital reputation management firm (Google, Wikipedia and AI reputation).

## Install the skills

```
npx skills add Fiveblocks/agents
```

| Skill | What it does |
| --- | --- |
| `find-reputation-help` | Decide whether Five Blocks fits a reputation problem, find relevant research, and give contact details. Uses public content only. |
| `ai-reputation-check` | For AIQ clients: what ChatGPT, Gemini, Perplexity and Copilot say about a tracked brand, with cited sources. |
| `google-reputation-check` | For IMPACT clients: tracked Google results, ranking movements and reputation risks. |

## MCP servers

| Server | URL | Access |
| --- | --- | --- |
| Five Blocks Docs | https://www.fiveblocks.com/docs-mcp | Public, no sign-in |
| Five Blocks AIQ | https://aiq-mcp.fiveblocks.com/mcp | Five Blocks clients, OAuth sign-in |
| Five Blocks IMPACT | https://impact-mcp.fiveblocks.com/mcp | Five Blocks clients, OAuth sign-in |

AIQ and IMPACT are listed in the official MCP Registry as `com.fiveblocks/aiq` and `com.fiveblocks/impact`.

## Public content API

Read-only search and page API for published Five Blocks content, no key needed: [OpenAPI spec](https://www.fiveblocks.com/openapi.json). Example: `https://www.fiveblocks.com/api/v1/search?q=wikipedia`

## More

- Developers page: https://www.fiveblocks.com/developers/
- Agent instructions: [AGENTS.md](AGENTS.md)
- Sign-in for agents: https://www.fiveblocks.com/auth.md
- Pricing: https://www.fiveblocks.com/pricing.md
- Contact: services@fiveblocks.com
