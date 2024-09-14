export default async function fetchData() {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=9");
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();