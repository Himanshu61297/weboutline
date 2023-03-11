import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}

let cities: City[] = [];

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let form = document.getElementById("city-form") as HTMLFormElement;
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.querySelector("#city-name") as HTMLInputElement;
      const codeInput = document.querySelector("#city-code") as HTMLInputElement;

      const name = nameInput.value.trim();
      const code = codeInput.value.trim();
    
      if (name && code) {
        const city = { name, code };
        cities.push(city);
        this.addCityToList(city);
        nameInput.value = "";
        codeInput.value = "";
      }
    });
  }

  addCityToList(city: City): void {
    let cityList = document.getElementById("city-list") as HTMLUListElement
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${city.name}</td>
      <td>${city.code}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
    cityList.appendChild(row);
  
    const deleteBtn = row.querySelector(".delete-btn") as HTMLButtonElement;
    deleteBtn.addEventListener("click", () => {
      cities = cities.filter((c) => c !== city);
      row.remove();
    });
  }

}
