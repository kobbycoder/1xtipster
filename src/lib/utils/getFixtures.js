export default async function getFixtures(date) {
    const res = await fetch(`/api/fixtures?date=${date}`);
    const data = await res.json();

    return data;
  }