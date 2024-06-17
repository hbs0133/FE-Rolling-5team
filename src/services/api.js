const BASE_URL = "https://rolling-api.vercel.app/10-100";
const IMG_URL = "https://rolling-api.vercel.app";

async function GET(URL) {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to get data : ", error);
    throw error;
  }
}

export async function getRecipientList({ limit = 4, sort = "" } = {}) {
  return await GET(`${BASE_URL}/recipients/?limit=${limit}&sort=${sort}`);
}

export async function getCustomRecipient(url) {
  return await GET(url);
}

export async function getReactionList({
  id = null,
  limit = 10,
  sort = "",
  offset = 0,
} = {}) {
  return await GET(
    `${BASE_URL}/recipients/${id}/reactions/?limit=${limit}&offset=${offset}&sort=${sort}`
  );
}

export async function postReaction({
  id = 0,
  reaction = { emoji: "", type: "increase" },
}) {
  const url = `${BASE_URL}/recipients/${id}/reactions/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reaction),
  });

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}
