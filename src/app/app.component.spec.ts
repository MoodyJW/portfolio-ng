import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
