import {
  Autofocus,
  ColorAverage,
  DotScreen,
  EffectComposer,
  Glitch,
  Grid,
  HueSaturation,
  Outline,
  Pixelation,
  Sepia,
} from "@react-three/postprocessing";
import * as THREE from "three";

interface PostProcessorProps {}

function PostProcessor({}: PostProcessorProps) {
  return (
    <EffectComposer>
      <></>
      {/* <ColorAverage
      blendFunction={BlendFunction.NORMAL} // blend mode
      /> */}
      {/* <Autofocus /> */}
      {/* <Bloom
        intensity={0.5}
        mipmapBlur
        luminanceThreshold={1}
        luminanceSmoothing={0.2}
       /> */}
      {/* <BrightnessContrast brightness={-0.2} contrast={0.58} /> */}
      {/* <DotScreen angle={Math.PI / 6} scale={1} /> */}
      {/* <Glitch
        delay={new THREE.Vector2(0, 1)}
        duration={new THREE.Vector2(0.5, 1)}
        strength={new THREE.Vector2(0.01, 1.0)}
        ratio={0.5}
      /> */}
      {/* <Grid scale={1} lineWidth={0.1} /> */}
      {/* <HueSaturation hue={Math.PI / 2} saturation={1} /> */}
      {/* <Pixelation granularity={5} /> */}
      {/* <Sepia intensity={0.5} /> */}
      {/* <Outline blur edgeStrength={100} /> */}
    </EffectComposer>
  );
}

export default PostProcessor;
