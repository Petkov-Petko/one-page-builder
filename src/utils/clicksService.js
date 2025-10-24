// src/clicksService.js

const CONFIG = {
  webAppUrl:
    "https://script.google.com/macros/s/AKfycbzq-n264rH_HrvybL2TACI_8Nf33OaZZ2q2QQVUfpPeO5kUwcVc32p6xWAyUdg9tSoytw/exec",
  sharedKey: "petkovv",
  userIdKey: "uid",
};

export function setConfig({ webAppUrl, sharedKey, userIdKey }) {
  if (webAppUrl) CONFIG.webAppUrl = webAppUrl;
  if (sharedKey) CONFIG.sharedKey = sharedKey;
  if (userIdKey) CONFIG.userIdKey = userIdKey;
}

export function getUserId() {
  let id = localStorage.getItem(CONFIG.userIdKey);
  if (!id) {
    id =
      crypto && crypto.randomUUID
        ? crypto.randomUUID()
        : String(Math.random()).slice(2);
    localStorage.setItem(CONFIG.userIdKey, id);
  }
  return id;
}

export async function logClick(delta = 1) {
  if (!CONFIG.webAppUrl || !CONFIG.sharedKey) {
    throw new Error(
      "clicksService not configured: call setConfig({ webAppUrl, sharedKey }) first."
    );
  }
  const userId = getUserId();

  const res = await fetch(CONFIG.webAppUrl, {
    method: "POST",
    body: JSON.stringify({ key: CONFIG.sharedKey, userId, delta }),
  });

  let json = {};
  try {
    json = await res.json();
  } catch (_) {}
  console.log("POST status", res.status, json);

  if (!res.ok || json.ok === false) {
    throw new Error(json.error || `POST failed: ${res.status}`);
  }
  return true;
}

export async function fetchTable() {
  if (!CONFIG.webAppUrl || !CONFIG.sharedKey) {
    throw new Error(
      "clicksService not configured: call setConfig({ webAppUrl, sharedKey }) first."
    );
  }
  const url = new URL(CONFIG.webAppUrl);
  url.searchParams.set("key", CONFIG.sharedKey);
  const res = await fetch(url.toString());
  const data = await res.json();
  return data.rows || [];
}

export async function fetchMyClicks() {
  const rows = await fetchTable();
  const me = getUserId();
  const row = rows.find((r) => r.userId === me);
  return row ? row.clicks : 0;
}
