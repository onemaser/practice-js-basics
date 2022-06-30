function Student(firstNameVal, lastNameVal) {
    this.firstName = firstNameVal
    this.lastName = lastNameVal
    this.grades = {}
}

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined'){
        this.grades[subject] = []
    }

    this.grades[subject].push(grade)

}

Student.prototype.getAverageGrade = function(subject) {
    if(typeof subject === 'undefined'){
        const grades = []
        for(const key in this.grades) {
            const arr = this.grades[key]
        
            arr.forEach(function(item) {
                grades.push(item)       
            })
        }
            return this.avg(grades)
    }

    

    if(typeof this.grades[subject] === 'undefined'){
        this.grades[subject] = 0
    };

    const grades = this.grades[subject];

    return this.avg(grades)
}


Student.prototype.avg  = function(arr) {
    if(arr.length === 'undefined'){
        return 0 
    }
    const sum = arr.reduce(function(acc, curr){
        return acc + curr
    },0 )

    return sum / arr.length
}

const student = new Student('Marcin', 'Marcinkowski')
student.addGrade('maths', 4)
student.addGrade('maths', 3)
student.addGrade('maths', 3)
student.addGrade('polish', 6)
student.addGrade('polish', 4)
student.addGrade('geo', 4)

console.log(student)
console.log(student.getAverageGrade())
console.log(student.getAverageGrade('maths'))
console.log(student.getAverageGrade('polish'))