import { useParams } from "react-router";

export default function Practice() {
  const { love } = useParams();
  return (
    <ul>
      <li>react</li>
      <li>my love man utd and react</li>
      <li>{love}</li>
    </ul>
  );
}
