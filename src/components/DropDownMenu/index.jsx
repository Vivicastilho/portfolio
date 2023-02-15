import { useState } from "react";
import { Button, Dropdown, Content, Lable, ActiveFlag } from "./styles";
import brasilFlag from "../../assets/brasilFlag.png";
import USAFlag from "../../assets/USAflag.png";
import { AiOutlineDown } from "react-icons/ai";
import { useLang } from "../../hooks/lang";
export function DropDownMenu() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();

  function handleClick() {
    setOpen(!open);
  }

  function handleFlagChange(flang) {
    setLang(flang);
    setOpen(false);
  }

  return (
    <>
      <Dropdown>
        <Lable>
          <ActiveFlag>
            {lang === "pt" ? (
              <img src={brasilFlag} alt="" />
            ) : (
              <img src={USAFlag} alt="" />
            )}
          </ActiveFlag>
          <Button onClick={handleClick}>
            <AiOutlineDown />
          </Button>
        </Lable>
        {open && (
          <Content>
            <li onClick={() => handleFlagChange("pt")}>
              <img src={brasilFlag} alt="" />
              PT
            </li>
            <li onClick={() => handleFlagChange("en")}>
              <img src={USAFlag} alt="" />
              EN
            </li>
          </Content>
        )}
      </Dropdown>
    </>
  );
}
