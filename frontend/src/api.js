const BASE_URL = "http://127.0.0.1:8000";

export async function analyzeText(text) {
  const response = await fetch(`${BASE_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze text");
  }

  return await response.json();
}

export function exportPDF() {
  window.open(`${BASE_URL}/export/pdf`, "_blank");
}

export function exportWord() {
  window.open(`${BASE_URL}/export/word`, "_blank");
}