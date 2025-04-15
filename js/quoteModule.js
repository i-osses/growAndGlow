export async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random?tags=motivational|success");
    const data = await response.json();
    return data;
  } catch (error) {
    return { content: "Stay strong and keep going!", author: "Unknown" };
  }
}
