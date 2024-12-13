import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListVinylComponent} from './list-vinyl.component';

describe('ListVinylComponent', () => {
  let component: ListVinylComponent;
  let fixture: ComponentFixture<ListVinylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVinylComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
