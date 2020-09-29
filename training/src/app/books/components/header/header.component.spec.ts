import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  beforeEach(() => {
    component = new HeaderComponent()
  });


  it('retrieves headertext', () => {
    component.headerText = "Hello"
    expect(component.retriveHeaderText()).toBe("Hello");
  });

});
