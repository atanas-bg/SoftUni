namespace BULS.Tests
{
    using System.Collections.Generic;
    using BangaloreUniversityLearningSystem.Data;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using BangaloreUniversityLearningSystem.Interfaces;
    using BangaloreUniversityLearningSystem.Models;

    /// <summary>
    /// Testing a repository with valid and invalid id
    /// </summary>
    [TestClass]
    public class RepositoryTests
    {
        private IRepository<User> users;

        [TestInitialize]
        public void InitializeRepository()
        {
            this.users = new Repository<User>();
        }

        [TestMethod]
        public void Get_ValidID_ShouldReturnElelement()
        {
            //Arrange
            var userList = new List<User>()
            {
                new User("Pesho", "123456", Role.Lecturer),
                new User("Gosho", "121365", Role.Student)
            };

            foreach (User user in userList)
            {
                this.users.Add(user);
            }
           
            //Act
            const int Id = 1;
            var actualUser = this.users.Get(Id);

            //Assert
            Assert.AreEqual(userList[Id -1], actualUser);
        }

        [TestMethod]
        public void Get_InValidID_ShouldReturnDefault()
        {
            //Act
            const int Id = 1;
            var actualUser = this.users.Get(Id);

            //Assert
            Assert.AreEqual(default(User), actualUser);
        }

        [TestMethod]
        public void Get_InValidID_ShouldReturnDefaultUser()
        {
            //Arrange
            var userList = new List<User>()
            {
                new User("Pesho", "123456", Role.Lecturer),
                new User("Gosho", "121334", Role.Student)
            };

            foreach (User user in userList)
            {
                this.users.Add(user);
            }

            //Act
            int id = userList.Count + 1;
            var actualUser = this.users.Get(id);

            //Assert
            Assert.AreEqual(default(User), actualUser);
        }
    }
}
