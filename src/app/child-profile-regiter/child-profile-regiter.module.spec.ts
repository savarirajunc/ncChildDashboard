import { ChildProfileRegiterModule } from './child-profile-regiter.module';

describe('ChildProfileRegiterModule', () => {
  let childProfileRegiterModule: ChildProfileRegiterModule;

  beforeEach(() => {
    childProfileRegiterModule = new ChildProfileRegiterModule();
  });

  it('should create an instance', () => {
    expect(childProfileRegiterModule).toBeTruthy();
  });
});
