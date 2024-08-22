import React from "react";
import { motion } from "framer-motion";
interface Item {
  item: {
    todo: string;
    _id: string;
  };
}
const TodoItem = ({ item }: Item) => {
  return (
    <motion.div>
      <p>{item.todo}</p>
    </motion.div>
  );
};

export default TodoItem;
