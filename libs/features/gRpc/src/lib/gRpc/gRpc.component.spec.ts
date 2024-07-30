import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GRcpComponent } from './gRpc.component';

describe('GRcpComponent', () => {
  let component: GRcpComponent;
  let fixture: ComponentFixture<GRcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GRcpComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GRcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
