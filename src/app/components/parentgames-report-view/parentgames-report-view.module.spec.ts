import { ParentgamesReportViewModule } from './parentgames-report-view.module';

describe('ParentgamesReportViewModule', () => {
  let parentgamesReportViewModule: ParentgamesReportViewModule;

  beforeEach(() => {
    parentgamesReportViewModule = new ParentgamesReportViewModule();
  });

  it('should create an instance', () => {
    expect(parentgamesReportViewModule).toBeTruthy();
  });
});
