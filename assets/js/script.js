const country = document.querySelector('#country');
fetch('https://restcountries.com/v3.1/all')

.then(
    () => {
        const countryItem = document.querySelectorAll('.countryItem');
        const select = document.querySelector('#select');

        countryItem.forEach(element => {
            element.addEventListener('click', () => {
                                    select.innerHTML = `${element.children[0].innerHTML} <img src="https://flagcdn.com/${element.children[0].innerHTML}.svg" width="20px" class="mb-1">`;
                                    });
                                });
    }
);

