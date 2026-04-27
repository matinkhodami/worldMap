interface Props {
  message: string;
}
export function Message({ message }: Props) {
  return (
    <div className="bg-primary-light/20 p-4 rounded-lg text-primary inset-shadow-sm inset-shadow-primary/10">
      {message}
    </div>
  );
}
