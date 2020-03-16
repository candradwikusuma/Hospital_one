import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private data = [
    {
      category: 'Module',
      expanded: true,
      products: [
        { id: 0, name: 'Makanan Sehat', point: '8', img: 'https://picsum.photos/id/341/768/1024' },
        { id: 1, name: 'Nutrisi', point: '5', img: 'https://picsum.photos/id/366/768/1024' },
        { id: 2, name: 'Pertumbuhan Anak', point: '9', img: 'https://picsum.photos/id/370/768/1024' },
        { id: 3, name: 'Kehamilan', point: '7', img: 'https://picsum.photos/id/326/768/1024' }
      ]
    },
  ];
  constructor() { }
  getProducts() {
    return this.data;
  }
}
