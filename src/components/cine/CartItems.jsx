import PropsType from "prop-types";
import deleteLogo from "../../assets/delete.svg";
import { getImgUrl } from "../../utils/cine-utils";

const CartItems = ({ item, onDelete }) => {
  return (
    <div key={item.id} className="grid grid-cols-[1fr_auto] gap-4">
      <div className="flex items-center gap-4">
        <img
          className="rounded overflow-hidden"
          src={getImgUrl(item.cover)}
          alt="cart item"
          height={72}
          width={60}
        />
        <div>
          <h3 className="text-base md:text-xl font-bold">{item.title}</h3>
          <p className="max-md:text-xs text-[#575A6E]">{item.genre}</p>
          <span className="max-md:text-xs">${item.price}</span>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <button
          className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
          onClick={(e) => onDelete(e, item)}
        >
          <img className="w-5 h-5" src={deleteLogo} alt="delete" />
          <span className="max-md:hidden">Remove</span>
        </button>
      </div>
    </div>
  );
};

CartItems.propTypes = {
  item: PropsType.object.isRequired,
  onDelete: PropsType.func.isRequired,
};

export default CartItems;
