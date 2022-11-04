import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualizzaLavoriSpecificoPage } from './visualizza-lavori-specifico.page';

describe('VisualizzaLavoriSpecificoPage', () => {
  let component: VisualizzaLavoriSpecificoPage;
  let fixture: ComponentFixture<VisualizzaLavoriSpecificoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaLavoriSpecificoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizzaLavoriSpecificoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
