/**
 * Created by User on 6.10.2016 г..
 */
// input : ["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]

// output :
// <?xml version="1.0" encoding="UTF-8"?>
// <quiz>
//   <question>
//     Dry ice is a frozen form of which gas?
//   </question>
//   <answer>
//     Carbon Dioxide
//   </answer>
//   <question>
//     What is the brightest star in the night sky?
//   </question>
//   <answer>
//     Sirius
//   </answer>
//  </quiz>


function quiz(input) {
    // print template header
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    // print questions and answers
    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];
        html += `  <question>\n    ${question}\n  </question>\n  <answer>\n    ${answer}\n  </answer>\n`;
    }
    // print template footer
    html += '</quiz>';
    console.log(html);
}

quiz(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]);