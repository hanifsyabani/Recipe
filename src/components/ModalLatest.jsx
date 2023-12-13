import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Steps from "./Steps";
import Nutritions from "./Nutritions";
import Footer from "../page/Footer";
import CommentsModal from "./CommentsModal";

const ModalLatest = ({ dataRecipe }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("full");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <h1
        className="font-semibold mt-4 hover:underline cursor-pointer text-sm lg:text-base text-center lg:text-left"
        onClick={() => handleSizeClick(size)}
      >
        {" "}
        {dataRecipe.title
          ? dataRecipe.title.length > 20
            ? dataRecipe.title.slice(0, 20) + "..."
            : dataRecipe.title
          : <p>No Title</p>}
      </h1>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{dataRecipe.title}</ModalHeader>
          <ModalCloseButton />
          <div className="w-full px-[5%]">
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center gap-2">
                <CiHeart size={25} color="black" />
                <p className="text-sm">{dataRecipe.aggregateLikes}</p>
              </div>
              <div className="flex gap-2">
                <FaStar size={12} color="orange" />
                <FaStar size={12} color="orange" />
                <FaStar size={12} color="orange" />
                <FaStar size={12} color="orange" />
                <FaStar size={12} color="orange" />
              </div>
            </div>

            <div>
              <h1>{dataRecipe.summary}</h1>
            </div>

            <div className="w-[55%] mt-10 mx-auto">
              <img
                src={dataRecipe.image}
                alt=""
                className="w-full object-contain"
              />
            </div>

            <div className="lg:flex mb-20 mt-10">
              <Steps dataRecipe={dataRecipe} />
              <Nutritions />
            </div>
            <CommentsModal/>
            <Footer />
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLatest;
