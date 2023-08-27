const postsFetch = axios.fetch({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Accept: "application/json",
        Authorization: "meunovotoken"
    }
});
