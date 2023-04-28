export default async function live(req, res) {
  const url = `https://static.holoduke.nl/footapi/fixtures/feed_livenow.json?lang=gh`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json({ data });
}
