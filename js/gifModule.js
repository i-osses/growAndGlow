const apiKey = "7iNASa5CtxR86i7PAOmLllXka5kcKOi2";

export async function getGIF(keyword) {
  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}&limit=1`);
    const data = await res.json();
    return data.data[0]?.images?.downsized?.url || "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif";
  } catch (e) {
    return "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif";
  }
}
