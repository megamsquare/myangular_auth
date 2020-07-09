import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRoutingComponent } from './team-routing.component';

describe('TeamRoutingComponent', () => {
  let component: TeamRoutingComponent;
  let fixture: ComponentFixture<TeamRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
