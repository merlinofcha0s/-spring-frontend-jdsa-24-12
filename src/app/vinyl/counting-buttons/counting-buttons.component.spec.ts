import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CountingButtonsComponent} from './counting-buttons.component';

describe('CountingButtonsComponent', () => {
  let component: CountingButtonsComponent;
  let fixture: ComponentFixture<CountingButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountingButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
