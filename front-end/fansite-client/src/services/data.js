// ALL GROUP DATA IS RETRIEVED FROM THE MYSQL DATABASE
// MYSQL USES camelCase FOR KEYS
const MYSQL_URL = 'http://localhost:8080';

export async function findAllGroups() {
    const response = await fetch(`${MYSQL_URL}/api/fansite/kpop/group`);
    if (response.ok) {
        const content = response.json();
        return content;
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}

export async function findGroupById(groupId) {
    const response = await fetch(
        `${MYSQL_URL}/api/fansite/kpop/group/${groupId}`
    );
    if (response.ok) {
        const content = response.json();
        return content;
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}

export async function searchGroups(query) {
    const response = await fetch(
        `${MYSQL_URL}/api/fansite/kpop/group?search=${query}`
    );
    if (response.ok) {
        const content = await response.json();
        return content;
    } else {
        throw new Error(`Unexpected status code ${response.status}`);
    }
}

// ALL IDOL DATA IS RETRIEVED FROM THE JSON SERVER DATABASE
// JSON SERVER USES snake_case CASE FOR KEYS
const JSON_SERVER_URL = 'http://localhost:3000';

export async function findIdolsByGroupId(groupId) {
    const response = await fetch(
        `${JSON_SERVER_URL}/idols?group_id=${groupId}`
    );
    if (response.ok) {
        const content = response.json();
        return content;
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}

export async function findAllIdols() {
    const response = await fetch(`${JSON_SERVER_URL}/idols`);
    if (response.ok) {
        const content = response.json();
        return content;
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}

export async function findIdolById(idolId) {
    const response = await fetch(`${JSON_SERVER_URL}/idols?id=${idolId}`);
    if (response.ok) {
        const content = response.json();
        return content;
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}

export async function searchIdols(query) {
    const response = await fetch(`${JSON_SERVER_URL}/idols?search=${query}`);
    if (response.ok) {
        const content = await response.json();
        return content;
    } else {
        throw new Error(`Unexpected status code ${response.status}`);
    }
}
