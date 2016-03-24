import java.util.Scanner;

/**
 * Created by User on 23.3.2016 г..
 */
public class TriangleArea {
    public static void main(String[] args) {
        //|Ax(B y  − C y) + B x(C y  −  A y) + C x(A y − B y) |/2
        Scanner console = new Scanner(System.in);
        int ax = console.nextInt();
        int ay = console.nextInt();
        int bx = console.nextInt();
        int by = console.nextInt();
        int cx = console.nextInt();
        int cy = console.nextInt();
        int triangleArea = Math.abs(ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)) / 2;
        System.out.println(triangleArea);
    }
}
