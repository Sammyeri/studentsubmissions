var submissions =[{name: "Jane", score: 95, date: "2020-01-24", passed: true}, {name: "Joe", score: 77, date: "2018-05-14", passed: true},{name: "Jack", score: 59, date: "2019-07-05", passed: false}, {name: "Jill", score: 88, date: "2020-04-22", passed: true} ];

function addSubmission(array, newName, newScore, newDate){
    if(newScore >= 60){
        grade = true;
    } else{
        grade = false;
    }
    const newSubmission = {name: newName, score: newScore, date: newDate, passed: grade};
    array.push(newSubmission);
}

function deleteSubmissionsByIndex(array, index){
    array.splice(index, 1);
}

function deleteSubmissionsByName(array, name){
    position = array.findIndex(x => x.name === name);
    array.splice(position, 1);
}

function editSubmission(array, index, score){
    if(score >= 60){
        grade = true;
    } else{
        grade = false;
    }
    array[index].score = score;
    array[index].passed = grade;
}

function findSubmissionByName(array, name){
    entry = array.findIndex(x => x.name === name);
    console.log(array[entry]);
}

function findLowestScore(array){
    var lowestScore = Infinity;
    array.forEach(x => {
        if(x.score < lowestScore){
            lowestScore = x.score;
            }
    });
    entry = array.findIndex(x => x.score === lowestScore);
    console.log(array[entry]);
}

function findAverageScore(array){
    var temp = []; 
    array.forEach(x => {
        avgscore = x.score
        temp.push(avgscore);
     });
     rawTotal = 0;
     for(value of temp){
        rawTotal = rawTotal + value;
     }
     averageScore = rawTotal / temp.length;
     console.log(averageScore);
}

function filterPassing(array){
    passOnly = array.filter(x => x.passed === true);
    console.log(passOnly);
}

function filter90AndAbove(array){
    above90 = array.filter(x => x.score >= 90);
    console.log(above90);
}

//extended challenge

function createRange(start, end){
    array = [];
    for (i = start; i <= end ; i++){
        array.push(i);
    }
    console.log(array);
}

function countElements(array){
    let totals = {};
    for(const item of array){
        if(totals[item]){
            totals[item] += 1;
        }else{
            totals[item] = 1;
        }
    }
    console.log(totals);
}

//testing grounds

// addSubmission(submissions, "Jeremy", 50, "2020-05-19");
// addSubmission(submissions, "Jenny", 98, "2021-06-26");
// addSubmission(submissions, "Jacob", 62, "2010-05-29");
// deleteSubmissionsByIndex(submissions, 5);
// deleteSubmissionsByName(submissions, "Jeremy");
// editSubmission(submissions, 4, 19);
// findSubmissionByName(submissions, "Jane");
// findLowestScore(submissions);
// findAverageScore(submissions);
// filterPassing(submissions);
// filter90AndAbove(submissions);
// console.log(submissions);
// createRange(0, 10);
// countElements(["a", "b", "b", "c"]);