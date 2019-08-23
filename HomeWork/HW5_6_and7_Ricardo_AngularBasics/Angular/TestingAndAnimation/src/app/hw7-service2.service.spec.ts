// Task 4 - Create a new service component WITHOUT the automatically generated .spec ﬁle. Run "ng generate help" to get the proper syntax for the option.
// Create tests for the new service by manually creating the spec ﬁle.

import { TestBed, inject } from "@angular/core/testing";

import { HW7Service2Service } from "./hw7-service2.service";

describe("HW7Service2Service", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: HW7Service2Service = TestBed.get(HW7Service2Service);
    expect(service).toBeTruthy();
  });

  // test to check getPersonInfo() method

  it("should be Ric is 33", inject(
    [HW7Service2Service],
    (service: HW7Service2Service) => {
      expect(service.getPersonInfo()).toBe("Ric is 33");
    }
  ));
});
