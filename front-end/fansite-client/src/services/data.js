const BASE_URL = 'http://localhost:4000'; // Use the local API server

const endpointUrl = BASE_URL + '/groups';

export async function findAllGroups() {
  try {
    const response = await fetch(endpointUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching groups data:', error);
    throw error;
  }
}

