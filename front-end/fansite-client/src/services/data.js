const BASE_URL = 'http://localhost:4000'; // TODO switch to BACKEND SERVER URL

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

export async function findGroupById(groupId) {
  try {
    console.log('Fetching group with ID:', groupId);
    const response = await fetch(`${BASE_URL}/groups/${groupId}`);;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching group by ID:', error);
    throw error;
  }
}


export async function findIdolsByGroupId(groupId) {
  try {
    const response = await fetch(`${BASE_URL}/idols?groupId=${groupId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching idols by group ID:', error);
    throw error;
  }
}




