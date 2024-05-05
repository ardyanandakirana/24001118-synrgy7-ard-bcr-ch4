class App {
    constructor() {
      // Inisialisasi properti yang diperlukan
      this.filterByDriver = null;
      this.filterByDate = null;
      this.filterByTime = null;
      this.filterByCapacity = null;
      this.carContainerElement = null;
    }
  
    async init() {
      // Simulasi pengaturan elemen DOM
      this.filterByDriver = document.getElementById("driver");
      this.filterByDate = document.getElementById("datePicker");
      this.filterByTime = document.getElementById("timePicker");
      this.filterByCapacity = document.getElementById("capacity");
      this.carContainerElement = document.getElementById("cars-container");
  
      // Baca query parameter
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
  
      // Gunakan data dari query parameter
      if (params.driver) {
        this.filterByDriver.value = params.driver;
      }
      if (params.date) {
        this.filterByDate.value = params.date;
      }
      if (params.time) {
        this.filterByTime.value = params.time;
      }
      if (params.capacity) {
        this.filterByCapacity.value = params.capacity;
      }
  
      // Inisialisasi telah selesai
      console.log("Initialization completed.");
    }
  
    run = () => {
      // Implementasi run() sesuai kebutuhan aplikasi
      console.log("Application is running.");
    };
  }
  
  // Buat instance dari kelas App
  const app = new App();
  
  // Inisialisasi dan jalankan aplikasi setelah DOM siap
  document.addEventListener("DOMContentLoaded", async () => {
    await app.init();
    app.run();
  });
  