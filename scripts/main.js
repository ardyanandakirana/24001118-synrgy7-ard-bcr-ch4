class kendaraan {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sopir() {
    const kendaraan = [
      {
        nama: "Brio",
        harga: 150000,
      },
      {
        nama: "Avanza",
        harga: 200000,
      },
      {
        nama: "Xenia",
        harga: 250000,
      },
    ];
    const output = document.getElementById('output-kendaraan');
    let outputHTML = '';
    for (let i = 0; i < kendaraan.length; i++) {
      outputHTML +=  `
          <div class="col-sm-4 py-3">
            <div class="card">
                  <div class="card-body">
                      <img src="images/car02.min.jpg" class="card-img-top">
                      <h5 class="card-title pt-3">${kendaraan[i].nama}</h5>
                      <h4 class="card-title">Rp ${kendaraan[i].harga}/Hari</h4>
                      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis magni repellendus expedita consequatur porro quae culpa perspiciatis quaerat! Sit aperiam iusto facilis labore corrupti?</p>
                      <ul>
                          <li>
                              <i class="fa-solid fa-user"></i> 6 Orang
                          </li>
                          <li>
                              <i class="fa-solid fa-gear"></i> Manual
                          </li>
                          <li>
                              <i class="fa-regular fa-calendar-days"></i> Tahun 2023
                          </li>
                      </ul>
                  </div>
                  <div class="container text-center container-btn-pesan">
                      <a href="javascript:void()" class="btn btn-success mb-2">Pesan</a>
                  </div>
              </div>
          </div>
      `;
    }
    output.innerHTML = `
    <div class="form-container">
      <div class="row">${outputHTML}</div>
    </div>
    `;
  }

  lepas_kunci() {
    const kendaraan = [
      {
        nama: "Brio",
        harga: 350000,
      },
      {
        nama: "Avanza",
        harga: 400000,
      },
      {
        nama: "Xenia",
        harga: 550000,
      },
    ];
    const output = document.getElementById('output-kendaraan');
    let outputHTML = '';
    for (let i = 0; i < kendaraan.length; i++) {
      outputHTML +=  `
          <div class="col-sm-4 py-3">
            <div class="card">
                  <div class="card-body">
                      <img src="images/car02.min.jpg" class="card-img-top">
                      <h5 class="card-title pt-3">${kendaraan[i].nama}</h5>
                      <h4 class="card-title">Rp ${kendaraan[i].harga}/Hari</h4>
                      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis magni repellendus expedita consequatur porro quae culpa perspiciatis quaerat! Sit aperiam iusto facilis labore corrupti?</p>
                      <ul>
                          <li>
                              <i class="fa-solid fa-user"></i> 6 Orang
                          </li>
                          <li>
                              <i class="fa-solid fa-gear"></i> Manual
                          </li>
                          <li>
                              <i class="fa-regular fa-calendar-days"></i> Tahun 2023
                          </li>
                      </ul>
                  </div>
                  <div class="container text-center">
                      <a href="javascript:void()" class="btn btn-success mb-2">Pesan</a>
                  </div>
              </div>
          </div>
      `;
    }
    output.innerHTML = `
    <div class="form-container">
      <div class="row">${outputHTML}</div>
    </div>
    `;
  }
}

function cariKendaraan() {
    let form = document.getElementById('form-driver');
    let cari_kendaraan = new kendaraan("nama", "jabatan");
    if (form.driver.value == 'supir') {
      cari_kendaraan.sopir();
    } else if (form.driver.value == "lepas_kunci") {
      cari_kendaraan.lepas_kunci();
    };
}
