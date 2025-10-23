export default function Die({
  value,
  isHeald,
  holdDie,
}: {
  value: number;
  isHeald: boolean;
  holdDie: () => void;
}) {
  const styles = {
    backgroundColor: isHeald ? '#59E391' : 'white',
  };
  return (
    <button
      style={styles}
      className="die"
      onClick={holdDie}
      aria-label={`Die with value ${value}, isHeald ? "Held" : "Not Heald"`}
    >
      {value}
    </button>
  );
}
