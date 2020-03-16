import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DokterPage } from './dokter.page';

describe('DokterPage', () => {
  let component: DokterPage;
  let fixture: ComponentFixture<DokterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DokterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
