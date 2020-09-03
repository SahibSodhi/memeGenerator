import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeDashboardComponent } from './meme-dashboard.component';

describe('MemeDashboardComponent', () => {
  let component: MemeDashboardComponent;
  let fixture: ComponentFixture<MemeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
