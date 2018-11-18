//----------------------------------//
// By Mher Movsisyan                //
// https://github.com/MovsisyanMher //
// For business inquiries           //
// Email: movsisyan@protonmail.com  //
//----------------------------------//

using System;
using System.Windows;
using System.Windows.Input;

namespace filum.Views
{
    /// <summary>
    /// Interaction logic for ShellView.xaml
    /// </summary>
    public partial class ShellView : Window
    {
        private void Window_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if (e.ChangedButton == MouseButton.Left)
                this.DragMove();
        }

        

        public ShellView()
        {
            InitializeComponent();
        }

        private void ButtonClose_Click(object sender, RoutedEventArgs e)
        {
            // No custom exit code interpretation needed, 1 if this doesn't get called and 0 if everything went fine.
            Environment.Exit(0);
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if (Backend.Backlogic.CheckCredentials(Username.Text, Password.Text) == true)
            {
                try
                {
                    MessageBox.Show(Credentials.Storage.flag);
                }
                catch (Exception)
                {

                    throw;
                }
            }
        }
    }
}
