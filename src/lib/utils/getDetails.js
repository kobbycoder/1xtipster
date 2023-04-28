export default async function getDetails(event_id) {
    try {
      const res = await fetch(`/api/details?eventID=${event_id}`);
      const data = await res.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  