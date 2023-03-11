import { Component, OnInit } from '@angular/core';

interface Site {
  code: string;
  gateway: string;
  mac: string;
  imei: string;
  name: string;
  site: string;
}

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.page.html',
  styleUrls: ['./gateway.page.scss'],
})
export class GatewayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const form = document.getElementById("site-form") as HTMLFormElement;
    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();

      const Code = document.getElementById("Code") as HTMLInputElement;
      const Gateway = document.getElementById("Gateway") as HTMLInputElement;
      const Site = document.getElementById("Site") as HTMLInputElement;
      const MAC = document.getElementById("MAC") as HTMLInputElement;
      const Name = document.getElementById("Name") as HTMLInputElement;
      const IMEI = document.getElementById("IMEI") as HTMLInputElement;

      const site: Site = {
        code: Code.value,
        gateway: Gateway.value,
        site: Site.value,
        mac: MAC.value,
        name: Name.value,
        imei: IMEI.value,
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
    nameCell.textContent = site.gateway;

    const cityCell = document.createElement("td");
    cityCell.textContent = site.site;

    const regionCell = document.createElement("td");
    regionCell.textContent = site.mac;

    console.log(new Date().toUTCString());
    const pincodeCell = document.createElement("td");
    pincodeCell.textContent = new Date().toUTCString();

    const location = document.createElement("td");
    location.textContent = "GOOD"

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
    row.appendChild(location);
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

}
