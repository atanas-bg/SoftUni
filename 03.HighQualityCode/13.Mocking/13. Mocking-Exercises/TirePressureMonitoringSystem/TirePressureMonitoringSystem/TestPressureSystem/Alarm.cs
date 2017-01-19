namespace TestPressureSystem
{
    public class Alarm
    {
        bool _alarmOn = false;
        private const double LowPressureThreshold = 17;
        private const double HighPressureThreshold = 21;
        private readonly ICheckable _sensor;
        private double psiPressureValue;

        public Alarm(ICheckable sensor)
        {
            this._sensor = sensor;
        }

        //public bool AlarmOn
        //{
        //    get { return this._alarmOn; }
        //}

        public double PsiPressureValue
        {
            get { return this.psiPressureValue; }
            private set { this.psiPressureValue = value; }
        }

        public bool Check()
        {
            this.PsiPressureValue = this._sensor.PopNextPressurePsiValue();

            if (this.PsiPressureValue < LowPressureThreshold ||
                HighPressureThreshold < this.PsiPressureValue)
            {
                this._alarmOn = true;
            }

            return this._alarmOn;
        }
    }
}
