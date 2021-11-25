import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemItemsComponent } from './ordem-items.component';

describe('OrdemItemsComponent', () => {
  let component: OrdemItemsComponent;
  let fixture: ComponentFixture<OrdemItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
