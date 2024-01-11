import Input from "./Input";

export default function PutTask({ value, onChange }) {
  return (
    <div>
      <Input type="text" value={value} onChange={"onChange"} />
      <button onClick={"onClick"}>Mettre à jour</button>
    </div>
  );
}
