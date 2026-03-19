interface CardProps {
  method: string;
  endpoint: string;
  description: string;
}

export default function Card({ method, endpoint, description }: CardProps) {
  return (
    <div className="my-card-post">
      <div className="my-card-top">
        <span className={`api-method ${method}`}>{method}</span>
        <span className="api-endpoint">
          {endpoint}
        </span>
      </div>

      <div className="my-card-bottom">{description}</div>
    </div>
  );
}
