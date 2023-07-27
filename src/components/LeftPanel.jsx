// import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../images/logo.svg";
import MenuOption from "./MenuOption";
import { MdFormatListBulleted } from 'react-icons/md'; // Asegúrate de importar el componente correctamente

function LeftPanel() {
  return (
    <div className="flex w-28 bg-white">
      <div className="flex flex-col h-screen">
        <div className="flex flex-col flex-auto items-center">
          <img src={logo} alt="logo" className="bg-white mt-10 w-12"></img>
        </div>

        <div className="flex-auto items-center">
          <ul className="space-y-12">
            {/* Utiliza el componente MdFormatListBulleted dentro del prop icon */}
            <MenuOption icon={<MdFormatListBulleted />} />
            {/* Resto de tu código */}
          </ul>
        </div>

        <button className="bg-mainYellow w-12 h-12 flex items-center justify-center rounded-full ml-8 mb-10">
          {/* Resto de tu código */}
        </button>
      </div>
    </div>
  );
}

export default LeftPanel;
