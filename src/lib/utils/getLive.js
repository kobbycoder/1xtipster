export default async function getLive() {
  try {
    const res = await fetch(`/api/live`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
