import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.Scanner;

public class HelloWorld {

public static void main(String[] args) {
    System.out.println("Hello, World");
    System.out.println();
    double x = 0.7;
    double y = 0.1;
    System.out.println(x + y);


    BigDecimal xbd = new BigDecimal("1.2");
    BigDecimal ybd = new BigDecimal("1.2");
    System.out.println(xbd.add(ybd));

    String Name = "Dolly";
    System.out.printf("Hello %s%n", Name);

//    Scanner input = new Scanner(System.in);
//    String Line = input.nextLine();
//    System.out.printf("Hello%s%n", Line);

    double amount = 123467.8901234;
    NumberFormat nf= NumberFormat.getCurrencyInstance();
    System.out.println(nf.format(amount));

}

}
