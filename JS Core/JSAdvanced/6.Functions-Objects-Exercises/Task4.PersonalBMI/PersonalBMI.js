/**
 * Created by User on 1.11.2016 г..
 */
function calcBMI(name, age, weight, height) {
    let patientChart = {
        name: name,
        personalInfo: {
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: Math.round(weight / Math.pow((height / 100), 2)),
    };

    function chooseStatus() {
        let bmi = patientChart.BMI;
        switch (true) {
            case (bmi < 18.5) :
                patientChart.status = 'underweight';
                break;
            case (bmi < 25) :
                patientChart.status = 'normal';
                break;
            case (bmi < 30) :
                patientChart.status = 'overweight';
                break;
            default :
                patientChart.status = 'obese';
                break;
        }
    }
    chooseStatus();

    if (patientChart['status'] === 'obese') {
        patientChart['recommendation'] = 'admission required';
    }

    return patientChart;
}

console.log(calcBMI('Honey Boo Boo', 9, 57, 137));