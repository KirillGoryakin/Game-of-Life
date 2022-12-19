import { useEffect } from "react";
import { canvasScript } from "../../canvasScipt";

const Middle = () => {

  useEffect(() => {
    canvasScript();
  }, []);

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <canvas
        id='canvas'
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
        }}
      >
        HTML canvas is not supported {":("}
      </canvas>
    </div>
  )
};

export { Middle };