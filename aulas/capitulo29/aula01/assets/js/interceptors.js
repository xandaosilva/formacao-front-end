axios.interceptors.request.use(
    function(config){
        console.log("Antes da requisição ...");
        return config;
    },

    function(error){
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function(config){
        console.log("Antes da responsa ...");
        return config;
    },

    function(error){
        return Promise.reject(error);
    }
);
