import React, { Component } from "react";
import {loadableP5 as Sketch} from './loadableP5'

let frameOne;
let frameTwo;
let frameThree;

export default class SketchTorus extends Component {

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
    p5.frameRate(p5.random(1, 200));
  };

  draw = p5 => {
    p5.background(0);

    frameOne = p5.frameCount;
    frameTwo = p5.frameCount;
    frameThree = p5.frameCount;

    p5.push();
    p5.normalMaterial();
    // translate(0, 0, 130);
    p5.rotateX(frameOne * p5.random(1, 200));
    p5.rotateY(frameTwo * p5.random(1, 200));
    p5.rotateZ(frameThree * p5.random(1, 200));
    p5.torus(p5.random(0, 1000), p5.random(0.01, 100));
    p5.pop();
  };

  windowResized = p5 => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} windowResized={this.windowResized} />;
  }
}