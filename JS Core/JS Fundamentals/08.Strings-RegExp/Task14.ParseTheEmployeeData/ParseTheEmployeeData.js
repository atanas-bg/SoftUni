/**
 * Created by User on 13.10.2016 г..
 */
// input :
// Jonathan - 2000 - Manager
// Peter- 1000- Chuck
// George - 1000 - Team Leader

// output :
// Name: Jonathan
// Position: Manager
// Salary: 2000

// Name: George
// Position: Team Leader
// Salary: 1000

// {employeeName} - {employeeSalary} - {employeePosition}

function validateEmployeeData(sentences) {
    let regex = /^([A-Z][a-zA-Z]+) - ([1-9][0-9]*) - ([A-Za-z0-9- ]+)$/g;
    let result = [];
    for (let sentence of sentences) {
        let match = regex.exec(sentence);
        if (match) {
            let str = 'Name: ' + match[1] + '\n' + 'Position: ' + match[3] + '\n' + 'Salary: ' + match[2] + '\n';
            result.push(str);
        }
    }
    return result.join('\n');
}

console.log(validateEmployeeData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader  ']));
console.log(validateEmployeeData(['Jonathan- 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader  ']));