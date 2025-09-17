import { getWeatherData } from "./weatherModel.js";
function greet(name) {
    return `Hello, ${name}! Your TypeScript is working.`;
}
const data = getWeatherData();
// renderWeather(data);
console.log(data);
console.log("Controller ran successfully.");
console.log(greet("Weather Hacker"));
//# sourceMappingURL=appController.js.map