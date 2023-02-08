let gradeTableElement = document.getElementById("gradeTable");

function addRow(){
    let tr = document.createElement("tr");
    let tdGrade = document.createElement("td");
    let tdWeight = document.createElement("td");
    let inputGrade = document.createElement("input")
    let inputWeight = document.createElement("input")

    //Grade
    inputGrade.setAttribute("type","number");
    inputGrade.setAttribute("step","0.5");
    inputGrade.setAttribute("min","1");
    inputGrade.setAttribute("max","6");
    inputGrade.setAttribute("class","grade")

    //Weight
    inputWeight.setAttribute("type","number");
    inputWeight.setAttribute("step","10");
    inputWeight.setAttribute("min","0");
    inputWeight.setAttribute("class","weight");

    tdGrade.appendChild(inputGrade);
    tdWeight.appendChild(inputWeight);
    tr.appendChild(tdGrade);
    tr.appendChild(tdWeight);
    gradeTableElement.appendChild(tr);
}

function deleteRow(){
    let allRows = document.getElementsByTagName("tr");
    let count = allRows.length;

    if(count > 2){
        allRows[count-1].parentNode.removeChild(allRows[count-1]);
    }
}

function calc(){
    let allGrades = document.getElementsByClassName("grade");
    let allWeights = document.getElementsByClassName("weight");

    let resultGrade = 0;
    let resultWeights = 0;

    for(let i = 0;i<allGrades.length;i++){
        resultGrade += allGrades[i].value * (allWeights[i].value/100);
        if(allGrades[i].value != ""){
            resultWeights += allWeights[i].value/100;
        }
    }

    let average = resultGrade/resultWeights;
    document.getElementById("result").innerText = "Result: " + average;
}

document.getElementById("addRow").addEventListener("click", e=>{
    addRow();
})
document.getElementById("deleteRow").addEventListener("click", e=>{
    deleteRow();
})
document.getElementById("calc").addEventListener("click", e=>{
    calc();
})