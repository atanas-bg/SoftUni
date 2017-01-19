using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestPressureSystem
{
    using System.Security.Cryptography.X509Certificates;

    public interface ICheckable
    {
        double PopNextPressurePsiValue();
    }
}
