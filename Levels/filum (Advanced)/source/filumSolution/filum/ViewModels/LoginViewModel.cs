
//                                  //
// By Mher Movsisyan                //
// https://github.com/MovsisyanMher //
// For business inquiries           //
// Email: movsisyan@protonmail.com  //
//                                  //



using Caliburn.Micro;
using filum.Views;

namespace filum.ViewModels
{
    public class LoginViewModel : Screen
    {
        private string _userName;
        private string _password;

        /// <summary>
        /// This is the username input
        /// </summary>
        public string Username
        {
            get
            {
                return _userName;
            }
            set
            {
                _userName = value;
                NotifyOfPropertyChange(() => Username);
            }
        }



        /// <summary>
        /// This is the user's password input
        /// </summary>
        public string Password
        {
            get
            {
                return _password;
            }
            set
            {
                _password = value;
                NotifyOfPropertyChange(() => Password);
            }
        }
    }
}
