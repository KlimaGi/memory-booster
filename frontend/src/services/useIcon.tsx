interface Props {
  icon: string;
  name: string;
}

export const UseIcon = (props: Props) => (
  <img src={props.icon} alt={props.name} />
);
