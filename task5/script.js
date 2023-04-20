function pageLoaded() {
    const input = document.querySelector("#input");
    const btn = document.querySelector("#button");
    const output = document.querySelector("#output");
    function sendRequest() {
        if (validateInput()) {

            fetch(`https://jsonplaceholder.typicode.com/users/${input.value}/todos`)
                .then(
                    response => {
                        return response.json();
                    }
                )
                .then(data => {
                    writeOutput(formatOutput(data));
                })
        }
    }

    function formatOutput(data) {
        if (data != '') {
            let list = '';
            data.forEach(item => {
                if (item.completed) {
                    const title = `
      <li>${item.title}</li>`;
                    list = list + title;
                } else {
                    const title = `
       <li><del>${item.title}</del></li>`;
                    list = list + title;
                }
            });
            return list;
        } else {
            let list = '<li>Пользователь с указанным id не найден</li>';
            return list;
        }
    }

    function writeOutput(message) {
        output.innerHTML = message;
    }

    function validateInput() {
        let validated = true;
        if (input.value === '' || isNaN(+input.value)) {
            validated = false;
        }
        return validated;
    }

    btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);