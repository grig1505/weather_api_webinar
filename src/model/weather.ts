export interface IWeather {
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    };
    weather: [{
        main: number;
        description: string;
        icon: string;
    }];
}