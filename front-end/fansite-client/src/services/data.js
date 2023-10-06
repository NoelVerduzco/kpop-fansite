const BASE_URL = 'http://localhost:3000'; // TODO switch to BACKEND SERVER URL

export async function findAllGroups() {
    const response = await fetch(`${BASE_URL}/groups`);
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}

export async function findGroupById(groupId) {
    const response = await fetch(`${BASE_URL}/groups?id=${groupId}`);
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}

export async function findIdolsByGroupId(groupId) {
    const response = await fetch(`${BASE_URL}/idols?group_id=${groupId}`);
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}

export async function findAllIdols() {
    const response = await fetch(`${BASE_URL}/idols`);
    const content = response.json();
    if (response.ok) {
        return content;
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}

export async function findIdolById(idolId) {
    const response = await fetch(`${BASE_URL}/idols?id=${idolId}`);
    const content = response.json();
    if (response.ok) {
        return content;
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}
