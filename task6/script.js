function pageLoaded() {
    const input = document.querySelector("#input");
    const input2 = document.querySelector("#input2");
    const btn = document.querySelector("#button");
    const output = document.querySelector("#output");
    let data = '';
    function sendRequest() {
        if (!validateInput(input.value)) {
            writeOutput("Номер страницы вне диапазона от 1 до 10")
        };
        if (!validateInput(input2.value)) {
            writeOutput("Лимит вне диапазона от 1 до 10")
        };
        if (!validateInput(input.value) && !validateInput(input2.value)) {
            writeOutput("Номер страницы и лимит вне диапазона от 1 до 10")
        };

        if (validateInput(input.value) && validateInput(input2.value)) {

            fetch(
                `https://picsum.photos/v2/list?page=${input.value}&limit=${input2.value}`
            )
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    writeOutput(formatOutput(data));
                })
        }

    }

    function formatOutput(data) {
        let cards = '';
        data.forEach(item => {
            const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
            cards = cards + cardBlock;
        });
        localStorage.setItem('cards', cards)
        return cards;
    }

    function writeOutput(message) {
        output.innerHTML = message;
    }

    if (data === '') {
        writeOutput(localStorage.getItem('cards'));
    }

    function validateInput(input) {
        let validated = true;
        if (input < 1 || input > 10 || input === '' || isNaN(+input)) {
            validated = false;
        }
        return validated;
    }

    btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);