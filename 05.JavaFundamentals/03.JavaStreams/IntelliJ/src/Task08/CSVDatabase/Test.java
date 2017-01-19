package Task08.CSVDatabase;

import java.lang.reflect.Array;
import java.util.*;
import java.util.function.UnaryOperator;

/**
 * Created by User on 7.4.2016 г..
 */
public class Test {
    public static void main(String[] args) {
        LinkedHashMap<String, TreeMap<String, LinkedList<Double>>> students = new LinkedHashMap<String, TreeMap<String, LinkedList<Double>>>();
        students.put("Ivan", new TreeMap<>());
        students.put("Nasko", new TreeMap<>());
        students.get("Ivan").put("Java Fundamentals", new LinkedList<>());
        students.get("Nasko").put("Advanced C#", new LinkedList<>());
        students.get("Ivan").get("Java Fundamentals").add(4.56);
        LinkedList<Double> ivanJavaFundamentalsGrades = students.get("Ivan").get("Java Fundamentals");
        ivanJavaFundamentalsGrades.add(6.0);
        ivanJavaFundamentalsGrades.add(3.45);
        LinkedList<Double> naskoAdvancedCSharpGrades = students.get("Nasko").get("Advanced C#");
        naskoAdvancedCSharpGrades.add(5.20);
        naskoAdvancedCSharpGrades.add(6.00);
        naskoAdvancedCSharpGrades.set(0, 4.0);

        for (Map.Entry<String, TreeMap<String, LinkedList<Double>>> keyValuePair : students.entrySet()) {
            System.out.println("The value for the key " + keyValuePair.getKey() + " is: " + keyValuePair.getValue().get("Java Fundamentals"));
        }
    }
}
