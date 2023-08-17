
class ApiClient {
    url: string;
    constructor() {
        this.url = "https://dummyjson.com";
    }

    async get(route : string) {
       const response = await fetch(this.url + route);
        return await response.json()
    }
}

export default new ApiClient();