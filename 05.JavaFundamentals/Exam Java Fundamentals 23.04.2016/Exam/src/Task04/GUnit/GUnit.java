package Task04.GUnit;

import sun.security.pkcs11.wrapper.Functions;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * Created by User on 23.4.2016 г..
 */
public class GUnit {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String regex = "^([A-Z][a-zA-Z0-9]+)\\s+\\|\\s+([A-Z][a-zA-Z0-9]+)\\s+\\|\\s+([A-Z][a-zA-Z0-9]+)$";
        TreeMap<String, TreeMap<String, TreeSet<String>>> classesData = new TreeMap<>();

        String inputData = console.nextLine();
        while (!inputData.equals("It's testing time!")) {
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(inputData);
            while (matcher.find()) {
                //{class name} | {method name} | {unit test name}
                String className = matcher.group(1);
                String methodName = matcher.group(2);
                String unitTestName = matcher.group(3);

                if (!classesData.containsKey(className)) {
                    classesData.put(className, new TreeMap<>());
                }

                if (!classesData.get(className).containsKey(methodName)) {
                    classesData.get(className).put(methodName, new TreeSet<>());
                }

                if (!classesData.get(className).get(methodName).contains(unitTestName)) {
                    classesData.get(className).get(methodName).add(unitTestName);
                }

            }

            inputData = console.nextLine();
        }

        TreeMap<String, Integer> classTotalTests = new TreeMap<>();

        for (Map.Entry<String, TreeMap<String, TreeSet<String>>> entry : classesData.entrySet()) {
            int counter = 0;
            for (Map.Entry<String, TreeSet<String>> method : entry.getValue().entrySet()) {
                counter += method.getValue().size();
            }

            classTotalTests.put(entry.getKey(), counter);
        }

        classesData.entrySet().stream()
                .sorted((a1, a2) -> Integer.compare(a1.getValue().size(), a2.getValue().size()))
                .sorted((b1, b2) -> Integer.compare(classTotalTests.get(b2.getKey()), classTotalTests.get(b1.getKey())))
                .forEach(classs -> {
                    System.out.println(classs.getKey() + ":");
                    classs.getValue().entrySet().stream().sorted((method1, method2) -> Integer.compare(method2.getValue().size(), method1.getValue().size()))
                            .forEach(method -> {
                                System.out.println("##" + method.getKey());
                                method.getValue().stream().sorted((test1, test2) -> Integer.compare(test1.length(), test2.length()))
                                        .forEach(test -> {
                                            System.out.println("####" + test);
                                        });
                            });
                });
    }
}
