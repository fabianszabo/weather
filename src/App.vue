<script setup>
import { ref } from "vue";

const search = ref("");
const searchResults = ref([]);
const currentWeather = ref(null);
const currentWeatherUnits = ref(null);

const handleSearch = () => {
  currentWeather.value = null;
  currentWeatherUnits.value = null;
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (
        "results" in data &&
        Array.isArray(data.results) &&
        data.results.length > 0
      ) {
        searchResults.value = data.results;
      } else {
        throw new Error("No results found");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const handleSelectLocation = (location) => {
  searchResults.value = [];
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m`,
  )
    .then((response) => response.json())
    .then((data) => {
      if (!("current" in data) && !("current_units" in data)) {
        throw new Error("Returned data is not in the expected format");
      }
      currentWeather.value = data.current;
      currentWeatherUnits.value = data.current_units;
    })
    .catch((error) => {
      console.error(error);
    });
};

const degreeToCardinalDirection = (degree) => {
  if (degree > 337.5) return "N";
  if (degree > 292.5) return "NW";
  if (degree > 247.5) return "W";
  if (degree > 202.5) return "SW";
  if (degree > 157.5) return "S";
  if (degree > 122.5) return "SE";
  if (degree > 67.5) return "E";
  if (degree > 22.5) return "NE";
  return "N";
};
</script>

<template>
  <header class="p-7 text-center text-xl font-light">Current Weather</header>
  <main class="flex flex-col items-center justify-center gap-2 p-7">
    <div class="flex gap-2">
      <input
        class="border border-minimal-border p-1"
        type="text"
        v-model="search"
      />
      <button
        class="rounded-sm bg-primary-action px-2 py-1 text-white"
        @click="handleSearch"
      >
        Search
      </button>
    </div>

    <div v-for="result in searchResults" :key="result.id">
      <span>
        {{ result.name }}, {{ result.admin1 }}{{ result.admin1 ? "," : "" }}
        {{ result.country }}, latitude: {{ result.latitude }}, longitude:
        {{ result.longitude }}
      </span>
      <button @click="handleSelectLocation(result)">Select</button>
    </div>

    <div v-if="currentWeather">
      <p>
        {{
          ` Current temperature: ${currentWeather.temperature_2m} ${currentWeatherUnits.temperature_2m}`
        }}
      </p>
      <p>
        {{
          ` Relative humidity: ${currentWeather.relative_humidity_2m} ${currentWeatherUnits.relative_humidity_2m}`
        }}
      </p>
      <p>
        {{
          ` Apparent temperature: ${currentWeather.apparent_temperature} ${currentWeatherUnits.apparent_temperature}`
        }}
      </p>
      <p>
        {{
          ` Precipitation: ${currentWeather.precipitation} ${currentWeatherUnits.precipitation}`
        }}
      </p>
      <p>
        {{ ` Rain: ${currentWeather.rain} ${currentWeatherUnits.rain}` }}
      </p>
      <p>
        {{
          ` Showers: ${currentWeather.showers} ${currentWeatherUnits.showers}`
        }}
      </p>
      <p>
        {{
          ` Snowfall: ${currentWeather.snowfall} ${currentWeatherUnits.snowfall}`
        }}
      </p>
      <p>
        {{
          ` Cloud cover: ${currentWeather.cloud_cover} ${currentWeatherUnits.cloud_cover}`
        }}
      </p>
      <p>
        {{
          ` Wind direction: ${degreeToCardinalDirection(currentWeather.wind_direction_10m)}`
        }}
      </p>
      <p>
        {{
          ` Wind speed: ${currentWeather.wind_speed_10m} ${currentWeatherUnits.wind_speed_10m}`
        }}
      </p>
      <p>
        {{
          ` Wind gusts: ${currentWeather.wind_gusts_10m} ${currentWeatherUnits.wind_gusts_10m}`
        }}
      </p>
    </div>
  </main>
</template>
