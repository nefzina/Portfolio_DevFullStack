import * as React from "react";
import PropTypes from "prop-types";
import { Menu } from "@mui/base/Menu";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { MenuButton } from "@mui/base/MenuButton";
import { Dropdown } from "@mui/base/Dropdown";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";
import menu from "../assets/menu.png";
import { Link } from "react-scroll";
import "../sass/menuMobile.scss";

export default function MenuMobile() {
  return (
    <Dropdown>
      <MenuButton className="TriggerButtonIntroduction">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L20 18" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12L20 12" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 6L20 6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </MenuButton>

      <Menu
        className="CustomMenuIntroduction"
        slots={{
          listbox: Listbox,
        }}
        slotProps={{
          listbox: { className: "CustomMenuIntroduction--listbox" },
        }}
      >
        <Link
          className="navLink"
          to="descriptionBg"
          spy
          smooth
          duration={500}
        >
          <MenuItem className="CustomMenuIntroduction--item">Description</MenuItem>
        </Link>
        <Link
          className="navLink"
          to="projectsContainer"
          spy
          smooth
          duration={500}
        >
          <MenuItem className="CustomMenuIntroduction--item">Projects</MenuItem>
        </Link>
        <MenuItem className="CustomMenuIntroduction--item">About me</MenuItem>
        <Link className="navLink" to="footer" spy smooth duration={1000}>
          <MenuItem className="CustomMenuIntroduction--item">Contact</MenuItem>
        </Link>
      </Menu>
    </Dropdown>
  );
}

const Listbox = React.forwardRef(function Listbox(props, ref) {
  const { ownerState, ...other } = props;
  const popupContext = React.useContext(PopupContext);

  if (popupContext == null) {
    throw new Error(
      "The `Listbox` component cannot be rendered outside a `Popup` component"
    );
  }

  const verticalPlacement = popupContext.placement.split("-")[0];

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <ul {...other} ref={ref} />
    </CssTransition>
  );
});

Listbox.propTypes = {
  ownerState: PropTypes.object.isRequired,
};
