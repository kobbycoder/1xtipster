export default async function handler(req, res) {
  const date = req.query.date || "26-04-2023";
  const url = `https://probet.tips/api/predictions?date=${date}`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json({ data });
}