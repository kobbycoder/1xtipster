export default async function analysis(req, res) {
  const id = req.query.eventID;
  const formData = new URLSearchParams();
  formData.append("event_id", id);

  await fetch(
    "http://extrawebservice.com/sportus/webservice/soccer_game_details.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    }
  )
    .then((response) => {
      // Handle the response
      response.json().then((data) => {
        console.log(data);
        res.status(200).json({ data });
      });
    })
    .catch((error) => {
      // Handle the error
      console.log(error);
    });
}
