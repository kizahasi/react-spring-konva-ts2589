import { animated } from "@react-spring/konva";
import * as ReactKonva from "react-konva";

export default function App() {
  return (
    <ReactKonva.Stage>
      <ReactKonva.Layer>
        <animated.Rect />
      </ReactKonva.Layer>
    </ReactKonva.Stage>
  );
}
