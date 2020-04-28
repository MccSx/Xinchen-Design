export default function handleClasses(...params: (string | undefined)[]) {
  return params.filter(Boolean).join(" ");
}
