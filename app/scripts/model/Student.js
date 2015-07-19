app.factory('Student', function() {

    function Student(name){
        this.TOO_TIERED = 100;
        this.TOO_STRESST = 100;
        this.CLEVER = 100;

        this.name = name;
        this.needOfSleep = 0;
        this.needOfProcrastination = 0;
        this.knowledge = 0;
    }

    Student.prototype.sleep = function(){
        if(this.needOfSleep > 0){
            this.needOfSleep -= 10;
        }
        this.needOfProcrastination += 10;
    };

    Student.prototype.watchCatVideo = function(){
        if(this.needOfProcrastination > 0) {
            this.needOfProcrastination -= 10;
        }
        this.needOfSleep += 1;
    };

    Student.prototype.learn = function(){
        if(this.needOfSleep < this.TOO_TIERED && this.needOfProcrastination < this.TOO_STRESST){
            this.knowledge += 1;
        } else {
            this.knowledge -= 1;
        }

        this.needOfSleep += 10;
        this.needOfProcrastination += 10;
    };

    Student.prototype.doMathTest = function(){
        if(this.knowledge < this.CLEVER) {
            return false;
        }

        return Math.random() > 0.5;
    };

    return Student;
});