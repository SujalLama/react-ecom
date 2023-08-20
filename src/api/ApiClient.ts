
class ApiClient {
    url: string;
    constructor() {
        this.url = "https://dummyjson.com";
    }

    isAuthenticated (token: string) : Record<string, string> {
        if(token) {
            return {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }
        }
        return {
            'Content-Type': 'application/json'
        }
    }

    async get(route : string, token = '') {
       const headers = this.isAuthenticated(token);
       const response = await fetch(this.url + route, {
        method: 'GET',
        headers
       });
        return await response.json()
    }

    async post(route : string, data: unknown, token = '') {
       const headers = this.isAuthenticated(token);
       const response = await fetch(this.url + route, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
       });

        return await response.json()
    }

    async patch(route : string, data: unknown, token = '') {
       const headers = this.isAuthenticated(token);
       const response = await fetch(this.url + route, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data)
       });
        return await response.json()
    }

    async delete(route : string, data: unknown, token = '') {
       const headers = this.isAuthenticated(token);
       const response = await fetch(this.url + route, {
        method: 'DELETE',
        headers,
        body: JSON.stringify(data)
       });
        return await response.json()
    }
}

export default new ApiClient();