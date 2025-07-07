type InfoProps = {
   temp: number;
   feels: number;
   hum: number;
};

export const Info: React.FC<InfoProps> = ({ temp, feels, hum }) => {

    return (
        <div className="widget-info">
        <div className="widget-info-feels">
          <span>Чувствуется как</span>
          <span>{feels} *С</span>
          </div>
        <div className="widget-info-temp">
          <span>Температура</span>
          <span>{temp} C</span>
          </div>
        <div className="widget-info-hum">
          <span>Влажность</span>
          <span>{hum}</span>
          </div>
        </div>
    );
};