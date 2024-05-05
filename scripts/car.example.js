class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="form-container justify-content-center d-flex">
      <form class="row gy-2 gx-3" id="form-driver">
        <div class="col-auto">
          <label class="form-label" for="select">Tipe Driver</label>
          <select class="form-select" name="driver">
            <option selected="Pilih Tipe Driver" hidden>Pilih Tipe Driver</option>
            <option value="supir">Dengan Sopir</option>
            <option value="lepas_kunci">Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>
        <div class="col-auto">
          <label class="form-label" for="datePicker">Tanggal</label>
          <input type="date" class="form-control" id="datePicker">
        </div>
        <div class="col-auto">
          <label class="form-label" for="timePicker" placeholder="Pilih Waktu">Waktu Jemput/Ambil</label>
          <input type="time" class="form-control" id="timePicker">
        </div>
        <div class="col-auto">
          <label class="form-label" for="textInput">
            <span class="icon"></span>Jumlah Penumpang (Optional)<i class="bi bi-person-fill"></i></label>
          <input type="number" class="form-control" id="capacity" placeholder="Jumlah Penumpang">
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary" onclick="cariKendaraan()">Cari Mobil</button>
        </div>
      </form>
    </div>
    `;
  }
}
