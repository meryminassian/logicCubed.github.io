using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
