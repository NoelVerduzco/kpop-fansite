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
    const response = await fetch(`${BASE_URL}/groups?group_id=${groupId}`);
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

export async function findIdolById(idolId) {
  try {
    const response = await fetch(`${BASE_URL}/idols?id=${idolId}`);
    const data = await response.json();
    return data[0]; 
  } catch (error) {
    console.error('Error fetching idol by ID:', error);
    throw error;
  }
}

