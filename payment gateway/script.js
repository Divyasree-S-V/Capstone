const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Andra Pradesh", "Maharashtra", "Punjab", "Gujarat", "Goa", "Rajasthan", "West Bengal",
                 "Himachal Pradesh", "Sikkim", "Telangana", "Karnataka", "Bihar", "Chhattisgarh", "Mizoram", "Tamil Nadu",
                 "Arunachar Paradesh", "Meghalaya", "Odisha", "Delhi", "Uttar Pradesh", "Assam", "Madhya Pradesh", "Tripura",
                 "Manipur", "Haryana", "Kerala", "Uttarakhand", "Jharkhand", "Jammu and Kashmir"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
