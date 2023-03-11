import { Component, OnInit } from '@angular/core';

interface Site {
  name: string;
  city: string;
  region: string;
  pincode: number;
}

@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const form = document.getElementById("site-form") as HTMLFormElement;
    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();

      const nameInput = document.getElementById("name") as HTMLInputElement;
      const cityInput = document.getElementById("city") as HTMLInputElement;
      const regionInput = document.getElementById("region") as HTMLInputElement;
      const pincodeInput = document.getElementById("pincode") as HTMLInputElement;

      const site: Site = {
        name: nameInput.value,
        city: cityInput.value,
        region: regionInput.value,
        pincode: parseInt(pincodeInput.value),
      };

      this.addSite(site);

      form.reset();
    });

    const searchInput = document.getElementById("search-btn") as HTMLInputElement;
    searchInput.addEventListener("input", this.filterTable2);
  }

  addSite(site: Site) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = site.name;

    const cityCell = document.createElement("td");
    cityCell.textContent = site.city;

    const regionCell = document.createElement("td");
    regionCell.textContent = site.region;

    const pincodeCell = document.createElement("td");
    pincodeCell.textContent = site.pincode.toString();

    const deleteButtonCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      row.remove();
    });
    deleteButtonCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(cityCell);
    row.appendChild(regionCell);
    row.appendChild(pincodeCell);
    row.appendChild(deleteButtonCell);

    const tableBody = document.getElementById("site-table") as HTMLTableSectionElement;
    tableBody.appendChild(row);
  }

  filterTable2() {
    const tableBody = document.getElementById("site-table") as HTMLTableSectionElement;
    const searchInput = document.getElementById("search-input") as HTMLInputElement;

    let filter = searchInput.value.toLowerCase();
    let rows = tableBody.rows;
  
    for (let i = 1; i < rows.length; i++) {
      let cells = rows[i].cells;
      let found = false;
      for (let j = 0; j < cells.length; j++) {
        let cellText = cells[j].textContent;
        if (cellText !== null && cellText.toLowerCase().indexOf(filter) > -1) {
          found = true;
          break;
        }
      }
      if (found) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }

  // filterTable() {
  //   const tableBody = document.getElementById("table-body") as HTMLTableSectionElement;
  //   const searchInput = document.getElementById("search-input") as HTMLInputElement;

  //   const filterText = searchInput.value.toLowerCase();
  //   const rows = tableBody.getElementsByTagName("tr");

  //   for (let i = 0; i < rows.length; i++) {
  //     const cells = rows[i].getElementsByTagName("td");

  //     let shouldShow = false;

  //     for (let j = 0; j < cells.length; j++) {
  //       const cellText = cells[j].textContent.toLowerCase() ? "";

  //       if (cellText.includes(filterText)) {
  //         shouldShow = true;
  //         break;
  //       }
  //     }

  //     if (shouldShow) {
  //       rows[i].style.display = "";
  //     } else {
  //       rows[i].style.display = "none";
  //     }
  //   }
  // }
}
