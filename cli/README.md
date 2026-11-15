# fiveblocks

Command-line tool and JavaScript SDK for the [Five Blocks](https://www.fiveblocks.com/) public content API. Search Five Blocks research, services and Knowledge Center answers about Google, Wikipedia and AI reputation. No key needed.

## Command line

```
npx fiveblocks search "wikipedia conflict of interest"
npx fiveblocks page wikipedia-strategy
npx fiveblocks mcp
```

Add `--json` for JSON output.

## SDK

```js
import { search, getPage } from 'fiveblocks';

const { results, next_cursor } = await search('AI reputation', { limit: 5 });
const page = await getPage('about');
console.log(page.markdown);
```

## More

- API spec: https://www.fiveblocks.com/openapi.json (60 requests per minute)
- Developers page: https://www.fiveblocks.com/developers/
- Agent skills and MCP servers: https://github.com/Fiveblocks/agents
- Client data in AIQ and IMPACT: https://www.fiveblocks.com/auth.md
