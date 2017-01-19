package Task04.RoyalAccounting;

import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.math.MathContext;
import java.math.RoundingMode;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * Created by User on 8.5.2016 г..
 */
public class RoyalAccounting {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String regex = "^([a-zA-Z]+)\\s*;\\s*(\\d+)\\s*;\\s*(\\d+\\.*\\d*)\\s*;\\s*([a-zA-Z]+)$";
        Pattern pattern = Pattern.compile(regex);


        String team;
        String employeeName;
        BigDecimal workHours = BigDecimal.ZERO;
        BigDecimal dailyPayment = BigDecimal.ZERO;
        BigDecimal monthlyPayment = BigDecimal.ZERO;
        BigDecimal dailyIncome = BigDecimal.ZERO;
        //Team – employee – workHours -  dailyIncome
        HashMap<String, List<String>> allTeams = new HashMap<>();
        HashMap<String, BigDecimal> employeesDailyIncome = new HashMap<>();
        HashMap<String, BigDecimal> employeesWorkHours = new HashMap<>();
//         employees = new HashMap<>();

        String line;
        while (!(line = console.nextLine()).equals("Pishi kuf i da si hodim")) {
            Matcher matcher = pattern.matcher(line);
            if (matcher.find()) {
                //{employeeName};{workHoursPerDay};{dailyPayment};{team}
                employeeName = matcher.group(1);
                workHours = new BigDecimal(matcher.group(2));
                dailyPayment = new BigDecimal(matcher.group(3));
                team = matcher.group(4);

                if (!allTeams.containsKey(team)) {
                    allTeams.put(team, new ArrayList<>());
                }
                if (!allTeams.get(team).contains(employeeName)) {
                    allTeams.get(team).add(employeeName);
                    //((daily payment * work hours) / 24)
//                    MathContext mc = new MathContext(6, RoundingMode.HALF_UP);
                    BigDecimal product = new BigDecimal(0);
                    product = product.add(dailyPayment.multiply(workHours));
                    BigDecimal divider = new BigDecimal(24);
                    dailyIncome = new BigDecimal(0);
                    dailyIncome = dailyIncome.add((product.divide(divider, 6, BigDecimal.ROUND_HALF_UP)));
//                monthlyPayment = monthlyPayment.add(dailyIncome.multiply(BigDecimal.valueOf(30)));
                    employeesDailyIncome.put(employeeName, dailyIncome);
                    employeesWorkHours.put(employeeName, workHours);
                }

            }
        }

        /*
        You must order the teams,
by the amount of money every team has gathered, which depends on the sum of the monthly payment of each employee from that team.
Each employee’s monthly payment is calculated by his:
((daily payment * work hours) / 24) * 30

        * The order of the teams is descending, by the criteria specified above.
For every team you must print info about each of its employees.

The employees must also be sorted first by their work hours – descending order,
second by their daily income, which is (daily payment * work hours) / 24 – descending order.
If even after that they are not sorted, order them alphabetically.
        */
        //      team         employee    workHoursPerDay   dailyIncome
        //HashMap<String, HashMap<String, HashMap<BigDecimal, BigDecimal>>> allTeams = new HashMap<>();

        HashMap<String, BigDecimal> teamDailyIncome = new HashMap<>();
        BigDecimal dailyIncomePerTeam = BigDecimal.ZERO;
        for (Map.Entry<String, List<String>> entry : allTeams.entrySet()) {
            for (String employee : entry.getValue()) {
                dailyIncomePerTeam = dailyIncomePerTeam.add(employeesDailyIncome.get(employee));
            }
            teamDailyIncome.put(entry.getKey(), dailyIncomePerTeam);
            dailyIncomePerTeam = new BigDecimal(0);
        }
        int pos = 0;
        HashMap<String, List<String>> oldValue = new HashMap<>(allTeams);

        allTeams.entrySet().stream()
                .sorted((a1, a2) -> teamDailyIncome.get(a2.getKey()).compareTo(teamDailyIncome.get(a1.getKey())))
                .forEach(everyTeam -> {
//                    System.out.println("Team - " + everyTeam.getKey());
//                    oldValue.add(everyTeam.getValue().toString());
                    everyTeam.getValue().stream()
                            .sorted((b1, b2) -> employeesDailyIncome.get(b2).compareTo(employeesDailyIncome.get(b1)))
                            .sorted((c1, c2) -> employeesWorkHours.get(c2).compareTo(employeesWorkHours.get(c1)))
                            .collect(Collectors.toList());
                });

        for (Map.Entry<String, List<String>> entry : allTeams.entrySet()) {
            if ((entry.getValue().toString()).equals(oldValue.get(entry.getKey()).toString())) {
                Collections.sort(entry.getValue());
            }
        }

        for (Map.Entry<String, List<String>> entry : allTeams.entrySet()) {
            System.out.println("Team - " + entry.getKey());
            for (String employee : entry.getValue()) {
                System.out.printf("$$$%s - %.0f - %f", employee, employeesWorkHours.get(employee), employeesDailyIncome.get(employee));
                System.out.println();
            }
        }

    }
}
