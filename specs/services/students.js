describe("students services ", function () {
    var Student, students;
    beforeEach(inject(function (_students_, _Student_) {
        students = _students_;
        Student = _Student_;
    }));

    it("should be present", function () {
        expect(students).toBeDefined();
    });

    it("should find a student by name and return its name", function (done) {
        var studentName = "Alfred";
        mockLocalstorage();
        createDummyUserInStorage(studentName);

        students.getByName(studentName)
            .then(function (user) {
                expect(user.name).toBe(studentName);
            })
            .catch(failTest)
            .finally(done);

        applyPromise();
    });

    it("should find a student by name and fail if student hasnt found", function (done) {
        mockLocalstorage();

        students.getByName("hans")
            .then(failTest)
            .catch(passTest)
            .finally(done);

        applyPromise();
    });
});