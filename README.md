<img width="1365" height="634" alt="Capture" src="https://github.com/user-attachments/assets/ba263d91-ffb9-4c55-95e6-80afbba03e2b" /># 🌤️ Weather App

A modern weather application built with **React + Vite** that allows users to search for cities worldwide and view real-time weather data and 5-day forecasts.

---

## 🚀 Features

* 🔍 Search for any city worldwide
* 📍 Get weather using your current location
* 🌡️ Toggle between Celsius (°C) and Fahrenheit (°F)
* 📅 Display current date and time
* 🌅 Sunrise & 🌇 Sunset information
* 📊 5-day weather forecast
* 🎨 Modern UI with glassmorphism (blur + gradient background)

---

## 🛠️ Tech Stack

* React (Hooks)
* Vite
* Tailwind CSS
* OpenWeather API

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/abdellah-lasda/weatherMax.git

# Navigate to project
cd vite-project

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root of your project:

```env
VITE_API_KEY=your_openweather_api_key
```

⚠️ Important:

* Always prefix variables with `VITE_` when using Vite
* Restart the server after adding `.env`

---

## 🌍 API Used

### Current Weather

```
https://api.openweathermap.org/data/2.5/weather
```

### 5-Day Forecast

```
https://api.openweathermap.org/data/2.5/forecast
```

### Geolocation

* Browser API: `navigator.geolocation`

---

## 📸 Screenshots


<img width="1365" height="634" alt="Capture" src="https://github.com/user-attachments/assets/68a17182-860e-4420-8105-0cfc2d465dbe" />
<img width="1364" height="638" alt="Capture-2" src="https://github.com/user-attachments/assets/db7f50ce-8de4-4f63-878b-d6991155d486" />


---

## 💡 Usage

* Type a city name and click **Search**
* Select a city from the dropdown
* Click the location icon to use your current position
* Switch between °C and °F using the toggle

---

## ⚠️ Notes

* The API may not return city names for some coordinates → fallback handling is implemented
* Forecast data is provided every 3 hours → filtered to display daily results

---

## 🧠 Future Improvements

* 🌙 Dark mode
* 📱 Mobile optimization
* 🗺️ Map integration
* 🔔 Weather alerts

---

## 👨‍💻 Author

* abdellah lasda

---

## 📄 License

This project is open-source and available under the MIT License.
