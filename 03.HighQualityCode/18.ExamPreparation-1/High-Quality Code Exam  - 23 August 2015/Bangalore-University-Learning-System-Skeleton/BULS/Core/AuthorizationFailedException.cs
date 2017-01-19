namespace BangaloreUniversityLearningSystem.Core
{
    using System;

    class AuthorizationFailedException : Exception
    {
        public AuthorizationFailedException(string message)
            : base(message)
        {
            
        }
    } 
}
