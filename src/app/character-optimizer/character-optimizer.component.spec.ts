import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterOptimizerComponent } from './character-optimizer.component';

describe('CharacterOptimizerComponent', () => {
  let component: CharacterOptimizerComponent;
  let fixture: ComponentFixture<CharacterOptimizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterOptimizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterOptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
