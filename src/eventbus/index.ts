import mitt from "mitt";

type Events = {
  toComp1: string;
  toComp2: string;
};

const emitter = mitt<Events>();
export default emitter;
