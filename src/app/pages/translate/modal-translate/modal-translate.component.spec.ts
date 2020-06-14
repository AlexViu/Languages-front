import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTranslateComponent } from './modal-translate.component';

describe('ModalTranslateComponent', () => {
  let component: ModalTranslateComponent;
  let fixture: ComponentFixture<ModalTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
