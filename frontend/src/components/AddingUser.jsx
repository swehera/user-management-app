import axios from "axios";
import Container from "./ui/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddingUser = () => {
  const [name, setAddName] = useState("");
  const [username, setAddUserName] = useState("");
  const navigate = useNavigate();

  const AddUser = () => {
    if (name == "") {
      toast.error("enter the name");
    } else if (username == "") {
      toast.error("enter the username");
    } else {
      axios.post("https://user-management-app-bay.vercel.app/post", {
        name,
        username,
      });
      setAddName("");
      setAddUserName("");
      navigate("/");
      toast.success("User Added");
    }
  };

  return (
    <div>
      <Container className=" mt-4  flex items-center justify-center">
        <form>
          <div className="p-4 grid grid-cols-1 justify-center gap-2 ">
            <div>
              <input
                type="text"
                name="name"
                onChange={(e) => setAddName(e.target.value)}
                value={name}
                placeholder="Enter Name"
                className=" px-3 py-1 rounded-md outline-none border-solid border-2 border-gray-600"
              />
            </div>
            <div>
              <input
                type="text"
                name="username"
                onChange={(e) => setAddUserName(e.target.value)}
                value={username}
                placeholder="Enter User Name"
                className=" px-3 py-1 rounded-md outline-none border-solid border-2 border-gray-600"
              />
            </div>
          </div>
        </form>
      </Container>
      <div className="  flex items-center justify-center mt-3">
        <button
          onClick={AddUser}
          className=" bg-orange-600 px-3 py-1 rounded-md text-white"
        >
          Adding
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default AddingUser;
