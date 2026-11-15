// Five Blocks public content API client. No key needed. Docs: https://www.fiveblocks.com/openapi.json
const BASE = 'https://www.fiveblocks.com/api/v1';

async function request(path, init = {}) {
  const res = await fetch(BASE + path, { ...init, headers: { Accept: 'application/json', ...(init.headers || {}) } });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const e = body.error || {};
    const err = new Error(e.message || `HTTP ${res.status}`);
    err.status = res.status;
    err.code = e.code;
    err.hint = e.hint;
    err.retryAfter = Number(res.headers.get('retry-after')) || undefined;
    throw err;
  }
  return body;
}

/** Search published Five Blocks content. Returns { query, results, next_cursor, has_more }. */
export function search(q, { limit = 10, cursor } = {}) {
  const p = new URLSearchParams({ q, limit: String(limit) });
  if (cursor) p.set('cursor', cursor);
  return request('/search?' + p.toString());
}

/** Read one published page as markdown, by path or full URL. */
export function getPage(slug) {
  return request('/page?' + new URLSearchParams({ slug }).toString());
}

export default { search, getPage };
