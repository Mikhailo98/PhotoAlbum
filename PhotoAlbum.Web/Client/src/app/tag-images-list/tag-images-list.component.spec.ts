import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagImagesListComponent } from './tag-images-list.component';

describe('TagImagesListComponent', () => {
  let component: TagImagesListComponent;
  let fixture: ComponentFixture<TagImagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagImagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagImagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
