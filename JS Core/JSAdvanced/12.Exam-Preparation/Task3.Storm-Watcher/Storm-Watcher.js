/**
 * Created by User on 12.11.2016 г..
 */
let Record = (function () {
    let id = 0;

    class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.id = id++;
            // this.id = Record.getID();
        }

        toString() {
            let weatherStatus = 'Not stormy';
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                weatherStatus = 'Stormy'
            }

            return `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${weatherStatus}`
        }

        static getId() {
            if (!Record.nextId) {
                Record.nextId = 0;
            }
            return Record.nextId++;
        }
    }

    return Record;
})();

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());
