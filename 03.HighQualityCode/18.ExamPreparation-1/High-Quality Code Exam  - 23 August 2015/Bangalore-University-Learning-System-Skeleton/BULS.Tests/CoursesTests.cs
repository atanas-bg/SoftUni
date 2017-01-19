using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BULS.Tests
{
    using System;
    using System.Linq;
    using BangaloreUniversityLearningSystem.Controllers;
    using BangaloreUniversityLearningSystem.Data;
    using BangaloreUniversityLearningSystem.Interfaces;
    using BangaloreUniversityLearningSystem.Models;
    using Moq;

    /// <summary>
    /// Summary description for CoursesTests
    /// </summary>
    [TestClass]
    public class CoursesTests
    {
        private IBangaloreUniversityData mockedData;
        private Course course;

        [TestInitialize]
        public void InitializeMocks()
        {
            var dataMock = new Mock<IBangaloreUniversityData>();
            var courseRepoMock = new Mock<IRepository<Course>>();
            this.course = new Course("C# for babies");
            courseRepoMock.Setup(r => r.Get(It.IsAny<int>()))
                .Returns(this.course);

            dataMock.Setup(d => d.Courses)
                .Returns(courseRepoMock.Object);

            this.mockedData = dataMock.Object;
        }

        [TestMethod]
        public void AddLecture_ValidCourseId_ShouldAddToCourse()
        {
            const string lectureName = "Using Computers";
            //Arrange
            var controller = new CoursesController(this.mockedData, new User("Nasko", "123456", Role.Lecturer));

            string LectureName = DateTime.Now.ToString();
            //Act
            var view = controller.AddLecture(5, LectureName);

            //Assert
            Assert.AreEqual(this.course.Lectures.First().Name, LectureName);
            Assert.IsNotNull(view);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void AddLecture_InValidCourseId_ShouldThrow()
        {

        }
    }
}
