import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyFrameComponent } from './spotify-frame.component';

describe('SpotifyFrameComponent', () => {
  let component: SpotifyFrameComponent;
  let fixture: ComponentFixture<SpotifyFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
