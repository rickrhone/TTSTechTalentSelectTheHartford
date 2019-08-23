import { TestBed, inject } from "@angular/core/testing";

import { HW7ServiceService } from "./hw7-service.service";

describe("HW7ServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: HW7ServiceService = TestBed.get(HW7ServiceService);
    expect(service).toBeTruthy();
  });

  // Task 2 - Add some logic to the service and then write a test to validate the logic.

  //Creating a test to see if first name was assigned to Ricardo
  it("should be Ricardo", inject(
    [HW7ServiceService],
    (service: HW7ServiceService) => {
      expect(service.FirstName).toBe("Ricardo");
    }
  ));

  // Task 3 -  write a test for some functionality that doesn't yet exist in the service. It could be something like get person's full name.
  // Obviously since the function doesn't exist yet the test will not even compile, let alone pass. Now code just enough functionality in the service to make the test pass.

  it("should be Ricardo Rhone", inject(
    [HW7ServiceService],
    (service: HW7ServiceService) => {
      expect(service.getFullName()).toBe("Ricardo Rhone");
    }
  ));
});
