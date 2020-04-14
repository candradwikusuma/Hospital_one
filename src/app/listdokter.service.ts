import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListdokterService {
  private data = [
    {
      category: 'Dokter',
      dokters: [
        { id: 0, name: 'dr.Ahmad Dian Wahyudhion,Sp.THT-KL asbfkabfs', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/sample.jpeg' },
        { id: 1, name: 'dr.Albert Efendi', specialist: 'Penyakit Dalam', img: '../../assets/image/sample.jpeg' },
        { id: 2, name: 'dr.Alucar', specialist: 'Jantung dan Pembuluh Darah', img: '../../assets/image/sample.jpeg' },
        { id: 3, name: 'dr.Franco', specialist: 'Penyakit Dalam', img: '../../assets/image/sample.jpeg' },
        { id: 4, name: 'dr.Daniel', specialist: 'BDKV(Bedah Thorax Kardiovaskuler', img: '../../assets/image/sample.jpeg' },
        { id: 5, name: 'dr.Pharsa', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/sample.jpeg' },
        { id: 6, name: 'dr.Digi', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/sample.jpeg' },
        { id: 7, name: 'dr.Lancel', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/sample.jpeg' },
        { id: 8, name: 'dr.Hilos', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/sample.jpeg' },
        { id: 9, name: 'dr.Ruby', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/sample.jpeg' },
        { id: 10, name: 'dr.Alice', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/sample.jpeg' },
        { id: 11, name: 'dr.Nana', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/sample.jpeg' },

      ]
    },
  ];
  constructor() { }
  getDokters() {
    return this.data;
  }
}

