# RuangAPI NodeJS

## 1. Tentang

RuangAPI NodeJS merupakan package un-official dari ruangapi.com yang dapat digunakan developer untuk mengambil data wilayah mencakup provinsi, kota atau kabupaten, dan kecamatan, untuk melakukan cek ongkos kirim, dan melakukan cek resi atau waybill pada beberapa kurir. Package ini masih dalam tahap pengembangan dan akan terus di update. Jika ada bug atau error silahkan di issue atau kontak mbahcip00@gmail.com

## 2. Installation

### 2.1 Pre-required

```sh
1. NodeJS versi 4 ke atas
2. API dari RuangAPI (bisa mendaftar di https://ruangapi.com/)
```

### 2.2 Installation

Package ruangapi-nodejs membutuhkan NPM (Node Package Manager), jika anda belum menginstallnya, silahkan install npm terlebih dahulu, lalu lakukan cara di bawah ini supaya package tersimpan di file package.json

```sh
$ npm install --save ruangapi-nodejs
```

## 3. Penggunaan

RuangAPI memiliki beberapa endpoint yaitu ongkir, search engine, marketplace, wilayah, currency, penduduk. Di versi kali ini baru dirilis untuk cek ongkir (include get wilayah dan cek resi)

### Ongkir

```
var RuangApi = require("ruangapi-nodejs").Ongkir('apikey');

RuangAPI.getProvinces().then((res) => {
    //respon sukses
}).catch((err) => {
    //respon gagal
})
```

Beberapa fitur antara lain:

- `getProvinces()` untuk menampilkan semua provinsi
- `getProvince(id_provinsi)` untuk menampilkan detail provinsi by id_provinsi
- `getCity(id_provinsi)` untuk menampilkan kota/kabupaten berdasarkan id_provinsi
- `searchCity(query)` untuk menampilkan kota/kabupaten berdasarkan query
- `getDistrict(id_city)` untuk menampilkan kecamatan berdasarkan id_city
- `searchDistrict(query)` untuk menampilkan kecamatan berdasarkan query
- `getJNECost(origin, destination, weight)` untuk menampilkan ongkir JNE
  origin = id_city, destination = id_district, weight = berat (gram)
- `getJNTCost(origin, destination, weight)` untuk menampilkan ongkir JNT
  origin = id_city, destination = id_district, weight = berat (gram)
- `getPOSCost(origin, destination, weight)` untuk menampilkan ongkir POS (Not available)
  origin = id_city, destination = id_district, weight = berat (gram)
- `getTikiCost(origin, destination, weight)` untuk menampilkan ongkir Tiki
  origin = id_city, destination = id_district, weight = berat (gram)
- `getLionCost(origin, destination, weight)` untuk menampilkan ongkir Lion
  origin = id_city, destination = id_district, weight = berat (gram)
- `getNinjaCost(origin, destination, weight)` untuk menampilkan ongkir Ninja express (Not available)
  origin = id_city, destination = id_district, weight = berat (gram)
- `getWahanaCost(origin, destination, weight)` untuk menampilkan ongkir Wahana (Not available)
  origin = id_city, destination = id_district, weight = berat (gram)
- `getSicepatCost(origin, destination, weight)` untuk menampilkan ongkir sicepat
  origin = id_city, destination = id_district, weight = berat (gram)
- `getAlfatrexCost(origin, destination, weight)` untuk menampilkan ongkir Alfatrex
  origin = id_city, destination = id_district, weight = berat (gram)
- `getPCPCost(origin, destination, weight)` untuk menampilkan ongkir PCP
  origin = id_city, destination = id_district, weight = berat (gram)
- `getSAPCost(origin, destination, weight)` untuk menampilkan ongkir SAP
  origin = id_city, destination = id_district, weight = berat (gram)
- `getJNEWaybill(waybill)` untuk cek resi JNE
- `getJNTWaybill(waybill)` untuk cek resi JNT
- `getPOSWaybill(waybill)` untuk cek resi POS (Not available)
- `getTikiWaybill(waybill)` untuk cek resi Tiki
- `getLionWaybill(waybill)` untuk cek resi Lion
- `getNinjaWaybill(waybill)` untuk cek resi Ninja express (Not available)
- `getWahanaWaybill(waybill)` untuk cek resi Wahana (Not available)
- `getSicepatWaybill(waybill)` untuk cek resi sicepat
- `getAlfatrexWaybill(waybill)` untuk cek resi Alfatrex (Not available)
- `getPCPWaybill(waybill)` untuk cek resi PCP (Not available)
- `getSAPWaybill(waybill)` untuk cek resi SAP (Not available)
