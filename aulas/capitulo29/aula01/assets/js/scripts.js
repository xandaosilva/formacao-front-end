const container = document.querySelector("#user-container");
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

const getData = async() => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users", {
            headers: {
                "Content-Type": "application/json",
                custom: "header",
            }
        });
        return response.data;
    } catch (error) {
        console.log(`${error}`);
    }
};

const printData = async() => {
    const data = await getData();
    
    data.forEach((user) => {
        const div = document.createElement("div");
        const nameElement = document.createElement("h2");
        const emailElement = document.createElement("p");

        nameElement.textContent = user.name;
        emailElement.textContent = user.email;

        div.appendChild(nameElement);
        div.appendChild(emailElement);

        container.appendChild(div);
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts", { title: titleInput.value, body: bodyInput.value, userId: 1 });
});

printData();
