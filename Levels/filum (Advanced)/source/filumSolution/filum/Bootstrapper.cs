//----------------------------------//
// By Mher Movsisyan                //
// https://github.com/MovsisyanMher //
// For business inquiries           //
// Email: movsisyan@protonmail.com  //
//----------------------------------//
using System.Windows;
using Caliburn.Micro;
using filum.ViewModels;

namespace filum
{
    public class Bootstrapper : BootstrapperBase
    {
        // Ctor
        public Bootstrapper()
        {
            Initialize();
        }

        protected override void OnStartup(object sender, StartupEventArgs e)
        {
            
            // Launch point assigned
            DisplayRootViewFor<ShellViewModel>();

        }
    }
}
