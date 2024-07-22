export const fetchCatDetails = async (id: string) => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cat details:", error);
    return null;
  }
};

export const fetchCatData = async () => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=beng&api_key=${process.env.CAT_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cat data:", error);
    return [];
  }
};
