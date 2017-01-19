using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Bank.Tests
{
    [TestClass]
    public class AccountTests
    {
        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void TransferFund_ToSameAccount_ShouldThrow()
        {
            var account = new Account();
            account.TransferFunds(account, 200);
        }

        [TestMethod]
        public void TransferFund_ToOtherAccount_ShouldTransfer()
        {
            var account = new Account();
            var otherAccount = new Account();
            account.TransferFunds(otherAccount, 200);
        }

        [TestMethod]
        public void TransferFund_ToEmptyAccount_ShouldChangeBalance()
        {
            //Arrange
            var account = new Account();
            var otherAccount = new Account();

            //Act
            account.TransferFunds(otherAccount, 200);
            
            //Assert
            Assert.AreEqual(200, otherAccount.Balance, "The balance is not correct");
        }
    }
}
