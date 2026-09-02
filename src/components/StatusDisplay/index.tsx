interface StatusDisplayProps {
  status: string;
}

function StatusDisplay({ status }: StatusDisplayProps) {
  function handleColorStatus(value: string): string {
    if (value === "Atenção") return "var(--amarelo-atencao)";
    if (value === "Sucesso") return "var(--verde-sucesso)";
    if (value === "Perigo") return "var(--vermelho-perigo)";
    return "var(--azul-informativo)";
  }

  return (
    <div
      title={status}
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: handleColorStatus(status),
      }}
    ></div>
  );
}

export default StatusDisplay;
