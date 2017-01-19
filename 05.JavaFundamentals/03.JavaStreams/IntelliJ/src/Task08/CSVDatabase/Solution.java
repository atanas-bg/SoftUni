package com.company;

import java.io.IOException;
import java.util.*;
import java.io.*;


public class Solution {

    public static void main(String[] args) throws IOException {

        Scanner sc = new Scanner(System.in);


        BufferedReader readerStudents = new BufferedReader(
                new FileReader(
                        "students.txt"
                )
        );

        BufferedReader readerGrades = new BufferedReader(
                new FileReader(
                        "grades.txt"
                )
        );

        HashMap<String, Integer>
                studentsByFullName = new HashMap<>(); // association ["Full Name"] => Id

        HashMap<Integer, HashMap<String, String>>
                studentsProfilesById = new HashMap<>(); // association [Id] => { ["age"] => age, ["town"] => "town" }

        HashMap<Integer, HashMap<String, LinkedList<String>>>
                gradesByStudentId = new HashMap<>(); // association [Id] => { ["subject_1"] => grade1, grade2..., ["subject_2"] => grade1,... }

        String studentLine = readerStudents.readLine();

        while (studentLine != null) {
            String[] tokens = studentLine.split(","); // "id,name,lastname,age,city name
            int id = Integer.parseInt(tokens[0]); // [0] is always Id
            String fullName = tokens[1] + " " + tokens[2]; // fullname is always name(space)lastname
            int age = Integer.parseInt(tokens[3]); // [3] is always age
            String town = tokens[4]; // [4] is always the city
            studentsByFullName.put(fullName, id); // e.g. "Georgi Ivanov" => 5
            studentsProfilesById.put(id, new HashMap<>()); // e.g. 5 => {}
            studentsProfilesById.get(id)
                    .put("age", age+""); // e.g. 5 => { ["age"] => 14

            studentsProfilesById.get(id)
                    .put("town", town); // e.g. 5 => { ["town"] => "Novi Pazar"

            // full result:
            /**
             * 5 => {
             *      ["age"] => 14,
             *      ["town"] => "Novi Pazar"
             * }
             *
             * so we can extract profile info by id. You can add fullname as a pair too
             */

            studentLine = readerStudents.readLine();

        }

        String gradesLine = readerGrades.readLine();

        while (gradesLine != null) {
            String[] gradeTokens = gradesLine.split(","); // student_id,subject_1 grade_1, grade_2,subject_2 grade_1
            int id = Integer.parseInt(gradeTokens[0]); // [0] will always be the student_id
            gradesByStudentId.put(id, new HashMap<>()); // e.g. [5] => {}
            for (int i = 1; i < gradeTokens.length; i++) { // everything except the student_id remains {subject_1 grades},{subject_2 grades}...
                String[] subjectTokens = gradeTokens[i].split(" ");
                String subject = subjectTokens[0]; // [0] will always the subject name, and the rest will remain the grades
                gradesByStudentId.get(id).put(subject, new LinkedList<>()); // e.g. [5] => { ["math"] => [] }

                for (int j = 1; j < subjectTokens.length; j++) { // everything except the subject are the grades
                    gradesByStudentId.get(id).get(subject).add(subjectTokens[j]); // e.g. [5] => { ["math"] => add(5.00) }
                }
            }

            // full result:
            /**
             * 5 => {
             *      ["math"] => [5.00, 6.00, 3.50],
             *      ["literature"] => [2.00, 3.00]
             * }
             *
             * so we can extract subject => grades pairs by student_id
             */

            gradesLine = readerGrades.readLine();
        }

        String cmd = sc.nextLine();
        String[] cmdTokens = cmd.split(" ");
        switch (cmdTokens[0]) {
            case "Search-by-full-name":

                if (studentsByFullName.get(cmdTokens[1] + " " + cmdTokens[2]) == null) {
                    System.out.println("Student does not exist");
                } else {
                    int id = studentsByFullName.get(cmdTokens[1] + " " + cmdTokens[2]);
                    System.out.printf("%s (age: %s, town: %s)%n",
                            cmdTokens[1] + " " + cmdTokens[2],
                            studentsProfilesById.get(id).get("age"),
                            studentsProfilesById.get(id).get("town")
                    );

                    for (Map.Entry<String, LinkedList<String>> innerPair : gradesByStudentId.get(id).entrySet()) {
                        System.out.printf("# %s: %s%n",
                                innerPair.getKey(),
                                String.join(", ", innerPair.getValue())
                        );
                    }


                }
                break;
//            case "Search-by-id":
//                cmdTokens[1];
//                break;
//            case "Delete-by-id":
//                cmdTokens[1];
//                break;
//            case "Update-by-id":
//                cmdTokens[1];
//                break;
//            case "Insert-student":
//                cmdTokens[1];cmdTokens[2];cmdTokens[3];cmdTokens[4];
//                break;
//            case "Insert-grade-by-id":
//                cmdTokens[1];cmdTokens[2];cmdTokens[3];
//                break;
            default:
                break;
        }

    }

}