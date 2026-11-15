#!/usr/bin/env node
import { search, getPage } from '../index.js';

const [cmd, ...rest] = process.argv.slice(2);
const json = rest.includes('--json');
const args = rest.filter((a) => a !== '--json');

const help = `fiveblocks - search and read Five Blocks content (Google, Wikipedia and AI reputation)

Usage:
  fiveblocks search <words> [--json]   Search research, services and Knowledge Center answers
  fiveblocks page <path-or-url> [--json]  Read one page as markdown
  fiveblocks mcp                       Show the Five Blocks MCP servers
  fiveblocks help

Examples:
  npx fiveblocks search "wikipedia conflict of interest"
  npx fiveblocks page wikipedia-strategy

No key needed for published content. Client data in AIQ and IMPACT: https://www.fiveblocks.com/auth.md`;

try {
  if (cmd === 'search' && args.length) {
    const r = await search(args.join(' '));
    if (json) console.log(JSON.stringify(r, null, 2));
    else if (!r.results.length) console.log('No results.');
    else for (const x of r.results) console.log(`- ${x.title}\n  ${x.url}${x.description ? '\n  ' + x.description : ''}\n`);
  } else if (cmd === 'page' && args[0]) {
    const r = await getPage(args[0]);
    console.log(json ? JSON.stringify(r, null, 2) : r.markdown);
  } else if (cmd === 'mcp') {
    console.log('Five Blocks Docs (public):  https://www.fiveblocks.com/docs-mcp');
    console.log('Five Blocks AIQ (clients):  https://aiq-mcp.fiveblocks.com/mcp');
    console.log('Five Blocks IMPACT (clients): https://impact-mcp.fiveblocks.com/mcp');
  } else {
    console.log(help);
    process.exit(cmd && cmd !== 'help' ? 1 : 0);
  }
} catch (e) {
  console.error(`Error: ${e.message}${e.hint ? '\n' + e.hint : ''}`);
  process.exit(1);
}
