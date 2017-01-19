using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.ChampionsLeague
{
    class ChampionsLeague
    {
        static void Main()
        {
            // Real Madrid | Barcelona | 0:0 | 1:1

            string[] inputResults = Console.ReadLine().Split('|');
            string firstTeam = inputResults[0].Trim();
            string secondTeam = inputResults[1].Trim();
            int whoWins = 0;

            string[] firstGameResult = inputResults[2].Trim().Split(':');
            int firstTeamFirstGameGoals = int.Parse(firstGameResult[0]);
            int secondTeamFirstGameGoals = int.Parse(firstGameResult[2]);

            string[] secondGameResult = inputResults[3].Trim().Split(':');
            int firstTeamSecondGameGoals = int.Parse(secondGameResult[0]);
            int secondTeamSecondGameGoals = int.Parse(secondGameResult[2]);

            if (firstTeamFirstGameGoals + firstTeamSecondGameGoals == secondTeamFirstGameGoals + secondTeamSecondGameGoals)
            {
                if (firstTeamSecondGameGoals > secondTeamFirstGameGoals)
                {
                    whoWins = 1;
                }
                else
                {
                    whoWins = 2;
                }
            }


        }
    }
}
