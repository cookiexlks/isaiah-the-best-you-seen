using System;
using System.Collections.Generic;
using System.Threading;

namespace GrowABrainrot
{
    class Program
    {
        static List<string> glyphs = new List<string> { "⟴", "⟿", "⟲", "⧖", "⧗", "⧜", "⧫", "⟰", "⤫", "⤷" };
        static List<string> ranks = new List<string> { "Signal Seeker", "Lorekeeper", "Rank Architect", "Mythos Core" };
        static Dictionary<string, string> rituals = new Dictionary<string, string>
        {
            { "Surge", "Signal surge initiated. Glyphs aligning..." },
            { "Fracture", "⚠️ Lore fracture detected. Containment protocol engaged..." },
            { "Ascension", "⟰ Ascension trigger activated. Rank elevation pending..." }
        };

        static Random rand = new Random();
        static int signalCount = 0;
        static int currentRank = 0;

        static void Main()
        {
            Console.Title = "Grow a Brainrot // Mythos CLI";
            Console.ForegroundColor = ConsoleColor.Magenta;
            Console.WriteLine(":: INITIATING BRAINROT MODULE ::");
            Console.ResetColor();

            while (true)
            {
                Console.WriteLine("\nChoose an action:");
                Console.WriteLine("1. Pulse Signal");
                Console.WriteLine("2. Trigger Ritual");
                Console.WriteLine("3. Canonize Rank");
                Console.WriteLine("4. View Status");
                Console.WriteLine("0. Exit");

                Console.Write("\n> ");
                string input = Console.ReadLine();

                switch (input)
                {
                    case "1":
                        PulseSignal();
                        break;
                    case "2":
                        TriggerRitual();
                        break;
                    case "3":
                        CanonizeRank();
                        break;
                    case "4":
                        ViewStatus();
                        break;
                    case "0":
                        Console.WriteLine("Exiting Brainrot CLI. Mythos sealed.");
                        return;
                    default:
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine("Invalid input. Try again.");
                        Console.ResetColor();
                        break;
                }
            }
        }

        static void PulseSignal()
        {
            string glyph = glyphs[rand.Next(glyphs.Count)];
            signalCount++;
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine($"\n[Signal Surge] → {glyph} :: Entropy stabilized");
            Console.ResetColor();

            if (signalCount % 5 == 0)
            {
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine("⚡ Threshold reached. Surge ritual unlocked.");
                Console.ResetColor();
            }
        }

        static void TriggerRitual()
        {
            Console.WriteLine("\nAvailable Rituals:");
            foreach (var ritual in rituals.Keys)
            {
                Console.WriteLine($"- {ritual}");
            }

            Console.Write("\nEnter ritual name: ");
            string name = Console.ReadLine();

            if (rituals.ContainsKey(name))
            {
                Console.ForegroundColor = ConsoleColor.Magenta;
                Console.WriteLine($"\n:: {name.ToUpper()} RITUAL ::");
                Console.WriteLine(rituals[name]);
                Console.ResetColor();

                if (name == "Ascension")
                {
                    CanonizeRank();
                }
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Unknown ritual. Signal rejected.");
                Console.ResetColor();
            }
        }

        static void CanonizeRank()
        {
            if (currentRank < ranks.Count)
            {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine($"\n→ {ranks[currentRank]} activated at {DateTime.Now:T}");
                Console.ResetColor();
                currentRank++;
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.DarkYellow;
                Console.WriteLine("\nAll ranks canonized. Mythos core stabilized.");
                Console.ResetColor();
            }
        }

        static void ViewStatus()
        {
            Console.WriteLine("\n:: STATUS REPORT ::");
            Console.WriteLine($"Signal Count: {signalCount}");
            Console.WriteLine($"Current Rank: {(currentRank < ranks.Count ? ranks[currentRank] : "Mythos Core")}");
            Console.WriteLine("Available Rituals: " + string.Join(", ", rituals.Keys));
        }
    }
}
