using System;
using System.ComponentModel;

class InstructionSet_broken
{
    static void Main()
    {
        string opCode = Console.ReadLine();
        while (opCode != "END")
        {
            string[] codeArgs = opCode.Split(' ');

            long result;
            bool validValue = true;
            switch (codeArgs[0])
            {
                case "INC":
                    {
                        long operandOne = long.Parse(codeArgs[1]);
                        result = operandOne + 1;
                        break;
                    }
                case "DEC":
                    {
                        long operandOne = long.Parse(codeArgs[1]);
                        result = operandOne - 1;
                        break;
                    }
                case "ADD":
                    {
                        long operandOne = long.Parse(codeArgs[1]);
                        long operandTwo = long.Parse(codeArgs[2]);
                        result = operandOne + operandTwo;
                        break;
                    }
                case "MLA":
                    {
                        long operandOne = long.Parse(codeArgs[1]);
                        long operandTwo = long.Parse(codeArgs[2]);
                        result = operandOne * operandTwo;
                        break;
                    }
                    default:
                    validValue = false;
                    result = 0;
                    break;
            }
            if (validValue)
            {
                Console.WriteLine(result);
            }
            opCode = Console.ReadLine();
        }
    }
}