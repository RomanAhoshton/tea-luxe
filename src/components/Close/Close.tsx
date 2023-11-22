import React from "react";
import styles from "./index.module.scss";

interface Props {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const Close = ({ open, setOpen }: Props) => {
  return (
    <button className={styles.menuIcon} onClick={() => setOpen(!open)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M0.553438 0.553437C-0.184479 1.29135 -0.184479 2.48775 0.55344 3.22567L7.32778 10L0.553436 16.7743C-0.184481 17.5123 -0.18448 18.7086 0.553437 19.4466C1.29136 20.1845 2.48776 20.1845 3.22567 19.4466L10 12.6722L16.7743 19.4465C17.5122 20.1845 18.7086 20.1845 19.4466 19.4465C20.1845 18.7086 20.1845 17.5122 19.4466 16.7743L12.6722 10L19.4466 3.2257C20.1845 2.48778 20.1845 1.29138 19.4466 0.553464C18.7086 -0.184451 17.5122 -0.184451 16.7743 0.553466L10 7.32777L3.22567 0.553437C2.48775 -0.18448 1.29136 -0.18448 0.553438 0.553437Z"
          fill="#754E29"
        />
      </svg>
    </button>
  );
};

export default Close;
