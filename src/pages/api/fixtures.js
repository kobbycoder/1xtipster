export default async function fixtures(req, res) {
  const date = req.query.date || "26-04-2023";
  const url = `https://static.holoduke.nl/footapi/fixtures/feed_matches_aggregated_short.json?lang=gh&date=${date}&tzoffset=0`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json({ data });
}