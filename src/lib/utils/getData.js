export default async function getData(date) {
  const res = await fetch(`/api/handler?date=${date}`);
  const data = await res.json();

  return data;
}