import React from "react";
import Matter from "matter-js";


class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    
    var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Mouse = Matter.Mouse,
        MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      // positionIterations: 20
    });

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 1368,
        height: 908,
        wireframes: false
      }
    });

    var rectA = Bodies.rectangle(410, 100, 120, 50, { restitution: 0.5 });
    var rectB = Bodies.rectangle(110, 50, 80, 50, { restitution: 0.5 });
    var rectC = Bodies.rectangle(70, 50, 140, 50, { restitution: 0.5 });
    var rectD = Bodies.rectangle(300, 50, 90, 50, { restitution: 0.5 });
    World.add(engine.world, [
      // walls
      Bodies.rectangle(678, 700, 1386, 50, { isStatic: true }),
      Bodies.rectangle(1343, 350, 50, 700, { isStatic: true }),
      Bodies.rectangle(25, 350, 50, 700, { isStatic: true })
    ]);

    World.add(engine.world, [rectA, rectB, rectC, rectD]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {
      World.add(engine.world, Bodies.rectangle(event.mouse.mousedownPosition.x, 50, 120, 50, { restitution: 0.7 }));
    });

    Engine.run(engine);

    Render.run(render);
  }

  render() {
    return <div ref="scene" />;
  }
}
export default Scene;