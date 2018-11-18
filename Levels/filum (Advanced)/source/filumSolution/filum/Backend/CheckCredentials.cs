
//                                  //
// By Mher Movsisyan                //
// https://github.com/MovsisyanMher //
// For business inquiries           //
// Email: movsisyan@protonmail.com  //
//                                  //


namespace filum.Backend
{
    public static partial class Backlogic
    {
        /// <summary>
        /// Checks to see if the username and password match
        /// </summary>
        /// <param name="Username">The Username</param>
        /// <param name="Password">The Password</param>
        /// <returns>false if not matching, true if matching, null if invalid input type</returns>
        public static bool? CheckCredentials(string Username, string Password)
        {
            if(Username == null || Password == null)
            {
                return null;
            }
            if(Username == Credentials.Storage.username)
            {
                if (Password == Credentials.Storage.password)
                {
                    return true;
                }
            }
            return false;
        }
    }
}