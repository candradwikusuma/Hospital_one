import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoAntrianPage } from './no-antrian.page';

describe('NoAntrianPage', () => {
  let component: NoAntrianPage;
  let fixture: ComponentFixture<NoAntrianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAntrianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoAntrianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
