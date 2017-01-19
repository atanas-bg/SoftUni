package Task03;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

/**
 * Created by User on 23.4.2016 г..
 */
public class CriticalBreakPoint {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String inputData = console.nextLine();
        long criticalRatio = 0;
        int numLines = 0;
        ArrayList<String> result = new ArrayList<>();
        StringBuilder sb = new StringBuilder();
        boolean criticalBreakpointExists = true;

        while (!inputData.equals("Break it.")) {
            numLines = numLines + 1;
            String[] tokens = inputData.split(" ");
            int firstLineX = Integer.parseInt(tokens[0]);
            int firstLineY = Integer.parseInt(tokens[1]);
            int secondLineX = Integer.parseInt(tokens[2]);
            int secondLineY = Integer.parseInt(tokens[3]);
            long ratio = (secondLineX + (long)secondLineY) - (firstLineX + (long)firstLineY);
            if(ratio < 0){
                ratio*= -1;
            }
            if (ratio != 0) {
                if (criticalRatio == 0) {
                    criticalRatio = ratio;
                } else if (criticalRatio != ratio) {
                    System.out.println("Critical breakpoint does not exist.");
                    criticalBreakpointExists = false;
                    break;
                }
            }
            String str = String.join(", ", tokens);
            result.add("[" + str + "]");
            inputData = console.nextLine();
        }

        if (criticalRatio == 0) {
            System.out.println("Critical breakpoint does not exist.");
            criticalBreakpointExists = false;
        }

        if (criticalBreakpointExists) {

            BigInteger criticalBreakpoint = BigInteger.valueOf(criticalRatio).pow(numLines).remainder(BigInteger.valueOf(numLines));
            //long criticalBreakpoint = (long)Math.pow(criticalRatio, numLines) % numLines;

            for (int index = 0; index < result.size(); index++) {
                System.out.println("Line: " + result.get(index));
            }

            System.out.println("Critical Breakpoint: " + criticalBreakpoint);
        }
    }
}
