import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-fetch-data",
  templateUrl: "./fetch-data.component.html",
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public url = "";
  public http: HttpClient;
  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.url = baseUrl;
    this.http = http;
    http.get<WeatherForecast[]>(baseUrl + "weatherforecast").subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => console.error(error)
    );
  }

  onClick() {
    this.http
      .get<WeatherForecast[]>(this.url + "weatherforecast/note")
      .subscribe(
        (result) => {
          this.forecasts = result;
        },
        (error) => console.error(error)
      );
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
