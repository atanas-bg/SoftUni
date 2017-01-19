using System;


namespace _02.PrintCompanyInformation
{
    class PrintCompanyInformation
    {
        static void Main(string[] args)
        {
            Console.Write("Company Name: ");
            string companyName = Console.ReadLine();
            Console.WriteLine();
            Console.Write("Company Address: ");
            string companyAddress = Console.ReadLine();
            Console.WriteLine();
            Console.Write("Company Phone Number: ");
            string phoneNumber = Console.ReadLine();
            Console.WriteLine();
            Console.Write("Company Fax Number: ");
            string faxNumber = Console.ReadLine();
            Console.WriteLine();
            Console.Write("Company Web Site: ");
            string webSite = Console.ReadLine();
            Console.WriteLine();
            Console.Write("Manager First Name: ");
            string managerFirstName = Console.ReadLine();
            Console.WriteLine();
            Console.Write("Manager Last Name: ");
            string managerLastName = Console.ReadLine();
            Console.WriteLine();
            Console.Write("Manager Age: ");
            int managerAge = int.Parse(Console.ReadLine());
            Console.WriteLine();
            Console.Write("Manager Phone: ");
            string managerPhoneNumber = Console.ReadLine();
            Console.WriteLine();
            Console.WriteLine("Company Name: {0}", companyName);
            Console.WriteLine("Company Address: {0}", companyAddress);
            Console.WriteLine("Company Phone Number: {0}", phoneNumber);
            Console.WriteLine("Company Fax: {0}", faxNumber);
            Console.WriteLine("Company Website: {0}", webSite);
            Console.WriteLine("Manager Name: {0} {1} {2} {3} {4} {5} {6}", managerFirstName, managerLastName, " (Age: ", managerAge, ", tel. ", managerPhoneNumber, ")");
        }
    }
}
