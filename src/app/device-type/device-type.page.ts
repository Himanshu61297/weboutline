import { Component, OnInit } from '@angular/core';

interface DeviceCategory {
  name: string;
  description: string;
}

let deviceTypes: DeviceCategory[] = [];


@Component({
  selector: 'app-device-type',
  templateUrl: './device-type.page.html',
  styleUrls: ['./device-type.page.scss'],
})
export class DeviceTypePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const form = document.getElementById("deviceForm") as HTMLFormElement;
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = document.getElementById("categoryName") as HTMLInputElement;
      const name = nameInput.value.trim();

      if (name === "") {
        alert("Please fill out all fields.");
        return;
      }

      const category: DeviceCategory = {
        name: name,
        description: "",
      };

      deviceTypes.push(category);

      this.addRowToTable(category);
      form.reset();
    });
  }

  addRowToTable(category: DeviceCategory) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");

    nameCell.textContent = category.name;
    descriptionCell.textContent = category.description;
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
      this.deleteRowFromTable(row);
    });

    deleteCell.appendChild(deleteBtn);
    row.appendChild(nameCell);
    row.appendChild(descriptionCell);
    row.appendChild(deleteCell);

    const tableBody = document.getElementById("deviceTable") as HTMLTableSectionElement;
    tableBody.appendChild(row);
  }

  deleteRowFromTable(row: HTMLTableRowElement) {
    const tableBody = document.getElementById("deviceTable") as HTMLTableSectionElement;
    const index = Array.prototype.indexOf.call(tableBody.children, row);
    deviceTypes.splice(index, 1);
    tableBody.removeChild(row);
  }

}
