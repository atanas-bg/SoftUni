using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.ProspectInHospitality
{
    class ProspectInHospitality
    {
        static void Main()
        {
            //  The number b – amount of builders needed.
            //•	The number r – amount of receptionists needed.
            //•	The number c – amount of chambermaids needed.
            //•	The number t – amount of technicians needed.
            //•	The number o – amount of other staff members needed.
            //•	The number n – Niki’s salary in USD.
            //•	The number u – USA’s currency rate at the moment.
            //•	The number s – your salary.
            //•	The number m – the budget.
            //            The numbers b, r, c, t and o are integers in the range[0... 4 294 967 285].
            //•	The numbers n, u, m and s are floating - point numbers in the range[0 … 7.9 x 1028].
            //    Builders    1500.04 lv.
            //Receptionists   2102.10 lv.
            //Chambermaids    1465.46 lv.
            //Technicians     2053.33 lv.
            //Others          3010.98 lv.

            //Sallaries of employees are constants
            decimal builderSalary = 1500.04M;
            decimal receptionistSalary = 2102.10M;
            decimal chambermaidSalary = 1465.46M;
            decimal technicianSalary = 2053.33M;
            decimal otherStaffSalary = 3010.98M;
            //decimal allStaffSalaries = 0;

            //Entering values from the console
            uint buildersCount = uint.Parse(Console.ReadLine());
            uint receptionistsCount = uint.Parse(Console.ReadLine());
            uint chambermaidsCount = uint.Parse(Console.ReadLine());
            uint techniciansCount = uint.Parse(Console.ReadLine());
            uint otherStaffCount = uint.Parse(Console.ReadLine());
            decimal nikiSalary = decimal.Parse(Console.ReadLine());
            decimal dollarsRate = decimal.Parse(Console.ReadLine());
            decimal mySalary = decimal.Parse(Console.ReadLine());
            decimal totalBudget = decimal.Parse(Console.ReadLine());

            //Calculating the salaries of employees
            decimal allBuildersSalaries = buildersCount * builderSalary;
            decimal allReceptionistsSalary = receptionistsCount * receptionistSalary;
            decimal allChambermaidsSalary = chambermaidsCount * chambermaidSalary;
            decimal allTechniciansSalary = techniciansCount * technicianSalary;
            decimal allOtherStaffSalary = otherStaffCount * otherStaffSalary;
            decimal nikiSalaryInLeva = nikiSalary * dollarsRate;

            decimal allStaffSalaries = allBuildersSalaries + allReceptionistsSalary + allChambermaidsSalary + allTechniciansSalary + allOtherStaffSalary + nikiSalaryInLeva + mySalary;

            //allStaffSalaries = buildersCount * builderSalary + receptionistsCount * receptionistSalary + chambermaidsCount * chambermaidSalary + techniciansCount * technicianSalary + otherStaffCount * otherStaffSalary + nikiSalary * dollarsRate + mySalary;
            Console.WriteLine("The amount is: {0:0.00} lv.", allStaffSalaries);

            //Calculating if the total budget is enough for all staff salaries to be paid
            if (allStaffSalaries <= totalBudget)
            {
                Console.WriteLine("YES \\ Left: {0:0.00} lv.", (totalBudget - allStaffSalaries));
            }
            else
            {
                Console.WriteLine("NO \\ Need more: {0:0.00} lv.", (allStaffSalaries - totalBudget));
            }
        }
    }
}
