import { Injectable } from "@angular/core";
import { Docter } from "./docter.model";

@Injectable({
  providedIn: "root",
})
export class DocterService {
  private _docter: Docter[] = [
    new Docter(
      "d1",
      "dr.Ahmad Dian Wahyudhion,Sp.THT-KL",
      "Bedah Plastik dan Rekontruksi",
      "../../assets/image/sample.jpeg",

      [
        { id: 1, day: "senin", start: "07:00", end: "09:30" },
        { id: 2, day: "senin", start: "10:00", end: "12:30" },
        { id: 3, day: "senin", start: "13:00", end: "15:30" },
      ]
    ),
    new Docter(
      "d2",
      "dr.Albert Efendi",
      "Penyakit Dalam",
      "../../assets/image/sample.jpeg",

      [
        { id: 1, day: "selasa", start: "08:00", end: "10:30" },
        { id: 2, day: "selasa", start: "10:30", end: "12:30" },
      ]
    ),
    new Docter(
      "d3",
      "dr.Alucard",
      "Jantung dan Pembuluh Darah",
      "../../assets/image/sample.jpeg",

      [
        { id: 1, day: "rabu", start: "07:30", end: "09:30" },
        { id: 2, day: "rabu", start: "11:00", end: "14:30" },
      ]
    ),
    // new Docter(
    //   "d4",
    //   "dr.Fany",
    //   "Jantung dan Pembuluh Darah",
    //   "../../assets/image/sample.jpeg"
    // ),
    // new Docter(
    //   "d5",
    //   "dr.Tigreal",
    //   "Jantung dan Pembuluh Darah",
    //   "../../assets/image/sample.jpeg"
    // ),
    // new Docter(
    //   "d6",
    //   "dr.Miya",
    //   "Jantung dan Pembuluh Darah",
    //   "../../assets/image/sample.jpeg"
    // ),
    // new Docter(
    //   "d7",
    //   "dr.Ahmad Dian Wahyudhion,Sp.THT-KL",
    //   "Bedah Plastik dan Rekontruksi",
    //   "../../assets/image/sample.jpeg"
    // ),
    // new Docter(
    //   "d8",
    //   "dr.Albert Efendi",
    //   "Penyakit Dalam",
    //   "../../assets/image/sample.jpeg"
    // ),
    // new Docter(
    //   "d9",
    //   "dr.Alucard",
    //   "Jantung dan Pembuluh Darah",
    //   "../../assets/image/sample.jpeg"
    // ),
    // new Docter(
    //   "d10",
    //   "dr.Fany",
    //   "Jantung dan Pembuluh Darah",
    //   "../../assets/image/sample.jpeg"
    // ),
    // new Docter(
    //   "d11",
    //   "dr.Tigreal",
    //   "Jantung dan Pembuluh Darah",
    //   "../../assets/image/sample.jpeg"
    // ),
    // new Docter(
    //   "d12",
    //   "dr.Miya",
    //   "Jantung dan Pembuluh Darah",
    //   "../../assets/image/sample.jpeg"
    // ),
  ];

  get dokter() {
    return [...this._docter];
  }

  private docter = [];

  constructor() {}
  getDokter(id: string) {
    return {
      ...this._docter.find((d) => d.id === id),
    };
  }
  get;
}
