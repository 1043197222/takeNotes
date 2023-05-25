import { useEffect, useRef } from "react";
import "./拖动排序.css";
import './aa.scss'
const 拖动排序 = () => {
  const listRef = useRef<any>();
  const sourceNode = useRef<any>();
  useEffect(() => {
    const list = document.querySelector(".list");
  }, []);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="list main" ref={listRef}>
      {arr.map((item) => {
        return (
          <div
            key={item}
            draggable="true"
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDragEnd={(e) => {
              (e.target as HTMLDivElement).classList.remove("moving");
            }}
            onDragStart={(e) => {
              setTimeout(() => {
                (e.target as HTMLDivElement).classList.add("moving");
              }, 0);
              sourceNode.current = e.target;
              e.dataTransfer.effectAllowed = "move";
            }}
            onDragEnter={(e) => {
              e.preventDefault();

              if (
                e.target === listRef.current ||
                (e.target as any) === sourceNode
              ) {
                return;
              }
              const children = Array.from(listRef.current.children);
              const sourceIndex = children.indexOf(sourceNode.current);
              const targetIndex = children.indexOf(e.target);
              if (sourceIndex < targetIndex) {
                listRef.current.insertBefore(
                  sourceNode.current,
                  (e.target as HTMLDivElement).nextElementSibling
                );
              } else {
                listRef.current.insertBefore(sourceNode.current, e.target);
              }
            }}
            className="list-item"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default 拖动排序;
