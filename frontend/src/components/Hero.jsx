import { useState } from "react";
import Container from "./ui/Container";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Hero = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const AllUser = () => {
    axios.get("https://user-management-app-bay.vercel.app/home").then((res) => {
      if (res?.status === 200) {
        setUser(res?.data);
      } else {
        console.log("data feteching error");
      }
    });
  };

  useEffect(() => {
    AllUser();
  }, []);

  console.log(user);
  console.log(search);

  //delete user
  const deleteUser = async (id) => {
    axios
      .delete(`https://user-management-app-bay.vercel.app/delete/${id}`)
      .then((res) => {
        if (res?.status === 200) {
          AllUser();
          navigate("/");
          toast.error("Deleted Successfully");
        } else {
          toast.error("data not found");
        }
      });
  };

  //update user

  return (
    <Container className="mt-3">
      <div className=" flex items-center justify-center">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here"
          className=" w-3/4 md:w-1/3 px-3 py-1 rounded-md outline-0 border-solid border-[1px] border-shadow-md"
        />
      </div>
      <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {user
          .filter((item) => {
            return search.toUpperCase() === ""
              ? item
              : item.name.toUpperCase().includes(search);
          })
          .map((item) => (
            <div
              key={item._id}
              className=" border-solid border-[1px] border-gray-700/60 rounded-md px-3 py-1"
            >
              <div>
                <p>
                  <span className=" font-semibold text-blue-950">Name : </span>
                  {item?.name}
                </p>
                <p>
                  <span className=" font-semibold text-blue-950">
                    Username :{" "}
                  </span>
                  {item?.username}
                </p>
                <p>
                  <span className=" font-semibold text-blue-950">
                    Subscription :{" "}
                  </span>
                  {item?.subscription}
                </p>
              </div>

              <div className=" flex items-start justify-start  gap-2">
                <button
                  onClick={() => deleteUser(item?._id)}
                  className=" text-red-600 font-semibold"
                >
                  Delete
                </button>
                <button>
                  <Link to={`/update/${item?._id}`}>Edit</Link>
                </button>
              </div>
            </div>
          ))}
      </div>
      <Toaster />
    </Container>
  );
};

export default Hero;
