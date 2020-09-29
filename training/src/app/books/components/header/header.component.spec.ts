import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  beforeEach(() => {
    component = new HeaderComponent()
  });


  it('', () => {
    component.headerText = "Hello"
    expect(component.retriveHeaderText()).toBe("Hello");
  });

});
