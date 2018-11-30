//                                  //
// By Mher Movsisyan                //
// https://github.com/MovsisyanMher //
// For business inquiries           //
// Email: movsisyan@protonmail.com  //
//                                  //


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace filumCL
{
    class Program
    {
        static void Main(string[] args)
        {
            string username = "withlovefrom";
            string password = "password420";
            string flag = "CTF{4D686572}";

            Console.WindowWidth = 90;
            Console.WindowHeight = 35;
            Console.Title = "Filum";
            Console.ForegroundColor = ConsoleColor.Green;
            Console.BackgroundColor = ConsoleColor.Black;

            Console.WriteLine(@"____________________________________________________________________________________");
            Console.WriteLine(@"|                                                                                  |");
            Console.WriteLine(@"|                                                                           ____   |");
            Console.WriteLine(@"|       ____         __________      __________    _____     __________    |__  |  |");
            Console.WriteLine(@"|       |  |        /  /    \  \    /   ____   \   |   |    /   ____   \    __| |  |");
            Console.WriteLine(@"|       |  |       |  |      |  |  |   /    \___\  |   |   |   /    \___\  |__  |  |");
            Console.WriteLine(@"|       |  |       |  |      |  |  |  |            |   |   |  |             __| |  |");
            Console.WriteLine(@"|       |  |       |  |      |  |  |  |    _____   |   |   |  |            |____|  |");
            Console.WriteLine(@"|       |  |       |  |      |  |  |  |   |__   /  |   |   |  |      ___           |");
            Console.WriteLine(@"|       |  |_____  |  |      |  |  |   \____/  /   |   |   |   \____/  /           |");
            Console.WriteLine(@"|       |________|  \__\____/__/    \_________/    |___|    \_________/            |");
            Console.WriteLine(@"|                                                                                  |");
            Console.WriteLine(@"|                                                                                  |");
            Console.WriteLine(@"|__________________________________________________________________________________|");
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("                                        Commands:                                    ");
            Console.WriteLine(" '!get ILSpy'    Redirects to the ILSpy download page.                               ");
            Console.WriteLine(" '!info'         Prints out information about this project.                          ");
            Console.WriteLine(" There also exist hidden Commands which allow you to take a shortcut.                ");
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Enter the username");

            Listen();
        }

        public static void Listen()
        {
            string interpretation = Console.ReadLine();

            if (interpretation[0] == '!')
            {
                if (interpretation.Contains("get ILSpy"))
                {
                    Console.WriteLine("Redirecting to the ILSpy page...");
                    System.Diagnostics.Process.Start("http://www.ilspy.net/");
                    Listen();
                }
                else if (interpretation.Contains("info"))
                {
                    Console.WriteLine(" Logic Cubed is a simple CTF designed by AUA students (freshmen) Maro Zohrabyan (CS)," +
                                      " Mery Minassian (CS), and Mher Movsisyan (DS). It was created for final CS110 Project submissions." +
                                      " Our goal is to engage beginners and starting developers in CTFs, where they can learn" +
                                      " a lot of problem solving skills and gain experience. To give them the first push," +
                                      " the first rush of joy and excitement is what we aim to do.");
                    Console.WriteLine();
                    Console.WriteLine("Github Page: https://github.com/meryminas/logicCubed.github.io");
                    Console.WriteLine();
                    Listen();
                }
                else if (interpretation.Contains("strings"))
                {
                    Console.WriteLine();
                    Console.WriteLine("withlovefrom");
                    Console.WriteLine("password420");
                    Console.WriteLine("CTF{4D686572}");
                    Listen();
                }
            }
            else if (interpretation == "withlovefrom")
            {
                Console.WriteLine("Enter the password");
                string interpretationOfPass = Console.ReadLine();
                if(interpretationOfPass == "password420")
                {
                    Console.WriteLine("CTF{4D686572}");
                    Listen();
                }
                Console.WriteLine("Incorrect");
                Listen();
            }
            Console.WriteLine("Incorrect");
            Listen();
            return;
        }
    }
}