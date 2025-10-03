describe("Money", () => {
  beforeEach(() => {
    // Setup code here
  });

  afterEach(() => {
    // Cleanup code here
  });

  it("should create a new instance", () => {
    let fiver = new Doller(5);
    let tenner = fiver.times(2);
    expect(tenner.amount).toBe(10);
  });
});
