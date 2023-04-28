export default async function analysis(req, res) {
    const url = `http://extrawebservice.com/sportus/webservice/load_home_soccer.php`;
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json({ data });
  }