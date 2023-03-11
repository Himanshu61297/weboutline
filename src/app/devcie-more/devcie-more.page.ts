import { Component, OnInit } from '@angular/core';

interface Site {
  deviceType: string;
  gateway: string;
  nodeId: string;
  deviceCat: string;
  name: string;
  location: string;
  schedule: string;
  model: string;
}

@Component({
  selector: 'app-devcie-more',
  templateUrl: './devcie-more.page.html',
  styleUrls: ['./devcie-more.page.scss'],
})
export class DevcieMorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const form = document.getElementById("site-form") as HTMLFormElement;
    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();

      const type = document.getElementById("type") as HTMLInputElement;
      const Gateway = document.getElementById("Gateway") as HTMLInputElement;
      const nodeId = document.getElementById("nodeId") as HTMLInputElement;
      const cat = document.getElementById("cat") as HTMLInputElement;
      const Name = document.getElementById("Name") as HTMLInputElement;
      const Location = document.getElementById("Location") as HTMLInputElement;
      const Schedule = document.getElementById("Schedule") as HTMLInputElement;
      const Model = document.getElementById("Model") as HTMLInputElement;

      const site: Site = {
        deviceType: type.value,
        gateway: Gateway.value,
        nodeId:nodeId.value,
        deviceCat: cat.value,
        name: Name.value,
        location: Location.value,
        schedule: Schedule.value,
        model: Model.value,
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
    cityCell.textContent = site.deviceType;

    const regionCell = document.createElement("td");
    regionCell.textContent = site.gateway;

    const pincodeCell = document.createElement("td");
    pincodeCell.textContent = site.nodeId;

    const location = document.createElement("td");
    pincodeCell.textContent = site.location;

    const status = document.createElement("td");
    pincodeCell.textContent = "OFF";

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
    row.appendChild(status);
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
