class App {
  constructor() {
    this.filterByDriver = document.getElementById("driver");
    this.filterByDate = document.getElementById("datePicker");
    this.filterByTime = document.getElementById("timePicker");
    this.filterByCapacity = document.getElementById("capacity");
    this.btnPrimary = document.getElementById("btn-primary");  
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = () => {
      this.clear();
      this.clearForm();
      this.clearNode();
      this.carContainerElement.innerHTML = "";
    };

    this.loadButton.onclick = () => {
      let driverTypeValue = this.filterByDriver.value == 'true';
      let dateValue = this.filterByDate.value;
      let newDate = new Date(dateValue);
      let timeValue = this.filterByTime.value;
      let capacityValue = this.filterByCapacity.value;

      if (driverTypeValue == null) {
        alert("asdasdasd");
        return;
      } else if (dateValue == null) {
        alert("");
        return;
      } else if (newDate.getDate() < this.dateNow()) {
        alert("");
        return;
      } else if (timeValue == "") {
        alert("");
      } else {
        this.getCarByFilter(driverTypeValue, newDate.toLocaleDateString(), parseInt(timeValue), parseInt(capacityValue));
      }
    };
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("row gy-2 gx-3 justify-content-center form-container");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load(driverType, date, time, capacity) {
    this.clearNode();
    const cars = await Binar.listCars(
      (car) =>
      car.available === true &&
      car.driverType === driverType &&
      (car.capacity >= capacity || 1) &&
      car.availableAt.toLocaleDateString() >= date &&
      car.availableAt.getHours() >= time
  );

    Car.init(cars);
    this.countResult.innerHTML = `<h3>Hasil : ${data.length} mobil ditemukan</h3>`;

    this.run();
  }

  clearForm = () => {
    this.filterByDriver.value = "";
    this.filterByDate.value = "";
    this.filterByTime.value = "";
    this.filterByCapacity.value = "";
  };

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
  dateNow = () => {
    let today = new Date().getDate();
    return today;
  };
}
