﻿namespace BangaloreUniversityLearningSystem.Controllers
{
    using System;
    using System.Linq;
    using Core;
    using Interfaces;
    using Models;
    using Utilities;

    public class CoursesController : Controller
    {
        public CoursesController(IBangaloreUniversityData data, User user)
        {
            this.Data = data;
            this.CurrentUser = user;
        }

        public IView All()
        {
            return this.View(
                this.Data.Courses.GetAll()
                .OrderBy(c => c.Name)
                .ThenByDescending(c => c.Students.Count));
        }

        public IView Details(int courseId)
        {
            this.EnsureAuthorization(Role.Student, Role.Lecturer);
            var course = this.GetCourseById(courseId);
            var courseExists = this.CurrentUser.Courses.Contains(course);
           //var courseExists = course.Students.Any(u => u == this.CurrentUser);

            if (!courseExists)
            {
                throw new ArgumentException("You are not enrolled in this course.");
            }

            return this.View(course);
        }

        //BUG: Renamed id to courseID
        public IView Enroll(int courseId)
        {
            this.EnsureAuthorization(Role.Student, Role.Lecturer);
            var course = this.GetCourseById(courseId);

            if (this.CurrentUser.Courses.Contains(course))
            {
                throw new ArgumentException("You are already enrolled in this course.");
            }

            this.CurrentUser.EnrollInCourse(course);
            course.AddStudent(this.CurrentUser);

            return this.View(course);
        }

        public IView Create(string name)
        {
            if (!this.HasCurrentUser)
            {
                throw new ArgumentException("There is no currently logged in user.");
            }

            if (!this.CurrentUser.IsInRole(Role.Lecturer))
            {
                throw new AuthorizationFailedException(
                    "The current user is not authorized to perform this operation.");
            }

            var course = new Course(name);
            this.Data.Courses.Add(course);

            return this.View(course);
        }

        public IView AddLecture(int courseId, string lectureName)
        {
            if (!this.HasCurrentUser)
            {
                throw new ArgumentException("There is no currently logged in user.");
            }

            if (!this.CurrentUser.IsInRole(Role.Lecturer))
            {
                throw new AuthorizationFailedException(
                    "The current user is not authorized to perform this operation.");
            }

            Course course = this.GetCourseById(courseId);
            course.AddLecture(new Lecture(lectureName));

            return this.View(course);
        }

        //TODO: Extract to Repository?
        private Course GetCourseById(int courseId)
        {
            var course = this.Data.Courses.Get(courseId);

            if (course == null)
            {
                var message = string.Format("There is no course with ID {0}.", courseId);
                throw new ArgumentException(message);
            }

            return course;
        }
    }
}
