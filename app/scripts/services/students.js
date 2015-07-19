app.factory('students', function ($localForage, $q, Student) {

    var loadUsers = function () {
        return $localForage.getItem("users");
    };

    var storeUsers = function (users) {
        return $localForage.setItem("users", users);
    };

    var filterByName = function (name, users) {
       if (users[name]) {
            return users[name];
        }
        return $q.reject("student not found");
    };

    var addUser = function (newUser, users) {
        users = users || {};
        users['' + newUser.name] = newUser;
        return users;
    };

    return {
        loginUser:function(users){
            $localForage.setItem("currentUser", users);
        },
        getCurrentUser: function(){
            return $localForage.getItem("currentUser").then(function(data){
               return new Student(data.name);
            });
        },
        getByName: function (name) {
            var filter = _.curry(filterByName)(name);
            return loadUsers()
                .then(filter);
        },

        save: function (newUser) {
            var add = _.curry(addUser)(newUser);
            return loadUsers()
                .then(add)
                .then(storeUsers);
        }
    };
});