export async function getQuote() {
  try {
    const response = await fetch('https://qapi.vercel.app/api/random');
    if (!response.ok) {
      throw new Error('Quote API request failed');
    }
    const data = await response.json();
    return {
      content: data.quote,
      author: data.author || 'Unknown'
    };
  } catch (error) {
    console.error('Error fetching quote:', error);
    return {
      content: "Stay strong and keep going!",
      author: "Unknown"
    };
  }
}
