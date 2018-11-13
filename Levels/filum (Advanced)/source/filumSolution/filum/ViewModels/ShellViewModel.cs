using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Caliburn.Micro;

namespace filum.ViewModels
{
    public class ShellViewModel : Screen
    {
        private string _userName;

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


        private string _password;

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
