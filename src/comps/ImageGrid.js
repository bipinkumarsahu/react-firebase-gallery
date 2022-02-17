import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <div className="image" key={doc.id}>
              <motion.div
                className=" img-wrap"
                onClick={() => setSelectedImage(doc.url)}
                layout
                whileHover={{ opacity: 1 }}
              >
                <motion.img
                  src={doc.url}
                  alt="uploaded pic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </motion.div>
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
