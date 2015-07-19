describe("Student", function () {
    var Student;
    beforeEach(inject(function (_Student_) {
        Student = _Student_;
    }));

    it("should fail the test if he is not clever", function() {
        var student = new Student();
        student.knowledge = 0;

        var passesTest = student.doMathTest();

        expect(passesTest).toBeFalsy();
    });

    it("should pass test if clever and has lucky day", function() {
        var student = new Student();
        student.knowledge = student.CLEVER;
        spyOn(Math, "random").and.returnValue(1);

        var passesTest = student.doMathTest();

        expect(passesTest).toBeTruthy();
    });

    it("should pass test if clever and has lucky day", function() {
        var student = new Student();
        student.knowledge = student.CLEVER;
        spyOn(Math, "random").and.returnValue(0);

        var passesTest = student.doMathTest();

        expect(passesTest).toBeFalsy();
    });

    //region sleep

    it("should have reduced need for sleep after sleeping", function() {
        var student = new Student();
        var initialNeedOfSleep = 100;
        student.needOfSleep = initialNeedOfSleep;

        student.sleep();

        expect(student.needOfSleep).toBeLessThan(initialNeedOfSleep);
    });


    it("should increase procrastination after sleeping too long", function() {
        var student = new Student();
        student.needOfSleep = 0;
        var initialNeedOfProc = 0;
        student.needOfProcrastination = initialNeedOfProc;

        student.sleep();

        expect(student.needOfProcrastination).toBeGreaterThan(initialNeedOfProc);
        expect(student.needOfSleep).toBe(0);
    });

    //endregion

    //region learn

    it("should increase knowledge, needOfSleep and needOfProc after learning", function() {
        var student = new Student();
        student.knowledge = 0;
        student.needOfProcrastination = 0;
        student.needOfSleep = 0;

        student.learn();

        expect(student.knowledge).toBeGreaterThan(0);
        expect(student.needOfProcrastination).toBeGreaterThan(0);
        expect(student.needOfSleep).toBeGreaterThan(0);
    });

    it("should decrease knowledge after learning when student is too tired", function() {
        var student = new Student();
        student.knowledge = 10;
        student.needOfProcrastination = 0;
        student.needOfSleep = student.TOO_TIERED;

        student.learn();

        expect(student.knowledge).toBeLessThan(10);
        expect(student.needOfProcrastination).toBeGreaterThan(0);
        expect(student.needOfSleep).toBeGreaterThan(student.TOO_TIERED);
    });

    it("should decrease knowledge after learning when student is too stresst", function() {
        var student = new Student();
        student.knowledge = 10;
        student.needOfProcrastination = student.TOO_STRESST;
        student.needOfSleep = 0;

        student.learn();

        expect(student.knowledge).toBeLessThan(10);
        expect(student.needOfProcrastination).toBeGreaterThan(student.TOO_STRESST);
        expect(student.needOfSleep).toBeGreaterThan(0);
    });

    //endregion

});