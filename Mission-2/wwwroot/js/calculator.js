$("#btnCalc").click(function () {

    //Get percent grade through calculation
    let percentGrade = ($("#assignments").val() * .55) + ($("#group").val() * .05) +
        ($("#quizzes").val() * .10) + ($("#exams").val() * .20) +
        ($("#intex").val() * .10)

    //Use percent grade to find letter grade
    let letterGrade = ''

    if (percentGrade >= 94) {
        letterGrade = 'A'
    }
    else if (percentGrade >= 90) {
        letterGrade = "A-"
    }
    else if (percentGrade >= 87) {
        letterGrade = "B+"
    }
    else if (percentGrade >= 84) {
        letterGrade = "B"
    }
    else if (percentGrade >= 80) {
        letterGrade = "B-"
    }
    else if (percentGrade >= 77) {
        letterGrade = "C+"
    }
    else if (percentGrade >= 74) {
        letterGrade = "C"
    }
    else if (percentGrade >= 70) {
        letterGrade = "C-"
    }
    else if (percentGrade >= 67) {
        letterGrade = "D+"
    }
    else if (percentGrade >= 64) {
        letterGrade = "D"
    }
    else if (percentGrade >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
    }

    //Display the letter grade and percent grade to the user
    alert("Letter Grade: " + letterGrade + "\nPercent Grade: " + percentGrade)

})

