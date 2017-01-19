namespace BangaloreUniversityLearningSystem.Core
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using Controllers;
    using Data;
    using Interfaces;
    using Models;

    public class BangaloreUniversityEngine : IEngine
    {
        public void Run()
        {
            var dataBase = new BangaloreUniversityData();
            User loggedUser = null;

            while (true)
            {
                string routeUrl = Console.ReadLine();

                if (routeUrl == null)
                {
                    break;
                }

                var route = new Route(routeUrl);
                var expectedController = route.ControllerName;
                var controllerType = Assembly.GetExecutingAssembly()
                    .GetTypes()
                    .FirstOrDefault(type => type.Name == expectedController);

                var controller = Activator.CreateInstance(
                    controllerType,
                    dataBase,
                    loggedUser) as Controller;
                var action = controllerType.GetMethod(route.ActionName);
                object[] argumentsToPass = MapParameters(route, action);

                try
                {
                    var view = action.Invoke(controller, argumentsToPass) as IView;
                    var output = view.Display();
                    Console.WriteLine(output);
                    loggedUser = controller.CurrentUser;
                }
                catch (Exception ex)
                {
                    if (ex.InnerException is ArgumentException ||
                        ex.InnerException is AuthorizationFailedException)
                    {
                        Console.WriteLine(ex.InnerException.Message);
                    }

                    //throw ex;
                }
            }
        }

        private static object[] MapParameters(Route route, MethodInfo action)
        {
            //return action.GetParameters()
            //    .Select<ParameterInfo, object>(p =>
            //    {
            //        if (p.ParameterType == typeof(int))
            //        {
            //            return int.Parse(route.Parameters[p.Name]);
            //        }
            //        else
            //        {
            //            return route.Parameters[p.Name];
            //        }
            //    })
            //    .ToArray();
            var expectedMethodParatmeters = action.GetParameters();
            var argumentsPass = new List<object>();

            foreach (ParameterInfo param in expectedMethodParatmeters)
            {
                var currentArgument = route.Parameters[param.Name];

                if (param.ParameterType == typeof(int))
                {
                    argumentsPass.Add(int.Parse(currentArgument));
                }
                else
                {
                    {
                        argumentsPass.Add(currentArgument);
                    }
                }
            }

            return argumentsPass.ToArray();
        }
    }
}
