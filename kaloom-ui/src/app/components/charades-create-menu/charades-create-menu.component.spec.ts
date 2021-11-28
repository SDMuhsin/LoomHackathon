import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharadesCreateMenuComponent } from './charades-create-menu.component';

describe('CharadesCreateMenuComponent', () => {
  let component: CharadesCreateMenuComponent;
  let fixture: ComponentFixture<CharadesCreateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharadesCreateMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharadesCreateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
