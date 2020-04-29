export default function handleClasses(
  ...params: (string | undefined | null)[]
) {
  return params.filter(Boolean).join(" ");
}
