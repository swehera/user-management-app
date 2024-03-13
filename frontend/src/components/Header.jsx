import Container from "./ui/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" border-solid border-b-2 border-shadow-md">
      <Container className=" py-5 flex justify-between">
        <div>
          <p className="text-[18px] md:text-xl font-semibold text-orange-600">
            <Link to="/">User Management</Link>
          </p>
        </div>
        <div>
          <button className=" text-white bg-orange-600 py-1 px-3 rounded-md font-semibold">
            <Link className=" text-[14px]" to="/adding">
              Adding User
            </Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
