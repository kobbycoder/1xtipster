export default async function getAnalysis() {
    try {
      const res = await fetch(`/api/analysis`);
      const data = await res.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  