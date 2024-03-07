interface DualColorTextProps {
  firstText: string;
  secondText: string;
  firstTextColor: string;
  secondTextColor: string;
  endText?: string;
  size?: string;
  weight?: string;
  extraClassname?: string;
}

export const DualColorText = ({
  endText,
  extraClassname,
  firstText,
  firstTextColor,
  secondText,
  secondTextColor,
  size,
  weight,
}: DualColorTextProps) => {
  return (
    <h1 className={`${size ?? 'text-2xl'} ${weight ?? 'font-bold'} ${firstTextColor} ${extraClassname}`}>
      {firstText} <span className={secondTextColor}>{secondText}</span>
      {endText}
    </h1>
  );
};
