import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListdokterService {
  private data = [
    {
      category: 'Dokter',
      dokters: [
        { id: 0, name: 'dr.Ahmad Dian Wahyudhion,Sp.THT-KL', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 1, name: 'dr.Albert Efendi', specialist: 'Penyakit Dalam', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 2, name: 'dr.Alucar', specialist: 'Jantung dan Pembuluh Darah', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 3, name: 'dr.Franco', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 4, name: 'dr.Daniel', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 5, name: 'dr.Pharsa', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 6, name: 'dr.Digi', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 7, name: 'dr.Lancel', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 8, name: 'dr.Hilos', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 9, name: 'dr.Ruby', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 10, name: 'dr.Alice', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/avatar_dokter.jpg' },
        { id: 11, name: 'dr.Nana', specialist: 'Bedah Plastik dan Rekontruksi', img: '../../assets/image/avatar_dokter.jpg' },

      ]
    },
  ];
  constructor() { }
  getDokters() {
    return this.data;
  }
}

