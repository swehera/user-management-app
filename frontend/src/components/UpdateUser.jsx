import { useNavigate, useParams } from "react-router-dom";
import Container from "./ui/Container";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const UpdateUser = () => {
  const { uid } = useParams();
  const [name, setAddName] = useState("");
  const [username, setAddUserName] = useState("");
  const navigate = useNavigate();

  //for single data fetch
  useEffect(() => {
    axios
      .get(`https://user-management-app-bay.vercel.app/update/${uid}`)
      .then((res) => {
        setAddName(res?.data?.name), setAddUserName(res?.data?.username);
      });
  }, []);

  const UpdateOne = async () => {
    axios.put(`https://user-management-app-bay.vercel.app/update/${uid}`, {
      name,
      username,
    });
    await navigate("/");
  };

  return (
    <div>
      <Container className=" mt-10  flex items-center justify-center">
        <form>
          <div className=" grid grid-cols-1 gap-2 ">
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
          onClick={UpdateOne}
          className=" bg-orange-600 px-3 py-1 rounded-md text-white"
        >
          Update
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default UpdateUser;
