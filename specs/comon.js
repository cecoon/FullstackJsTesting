
beforeEach(function() {
    module('app');
});

afterEach(function () {
    store.users = [];
});


//region Helper
var failTest = function(error) {
    expect(error).toBeUndefined();
};

var passTest = function() {
    expect(true).toBeTruthy();
};

var applyPromise = function() {
    inject(function($rootScope) {
        $rootScope.$apply();
    });
};
//endregion

//region mocks
var store = {
    users: {}
};

function createDummyUserInStorage(studentName) {
    inject(function(Student) {
        var student = new Student(studentName);
        store.users[studentName] = student;
    });
}

function mockLocalstorage() {
    inject(function($localForage, $q) {
        spyOn($localForage, 'getItem').and.callFake(function (key) {
            var defer = $q.defer();
            defer.resolve(store[key]);
            return defer.promise;
        });

        spyOn($localForage, 'setItem').and.callFake(function (key, value) {
            var defer = $q.defer();
            store[key] = value;
            defer.resolve();
            return defer.promise;
        });
    });
}

//endregion