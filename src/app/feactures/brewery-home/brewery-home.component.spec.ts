import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryHomeComponent } from './brewery-home.component';

describe('BreweryHomeComponent', () => {
  let component: BreweryHomeComponent;
  let fixture: ComponentFixture<BreweryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
