import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function PopInWhenVisible(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const sideVariants = { 
      visible: { opacity: 1, scale: 1 },
      hidden:  { opacity: 0, scale: 0 } 
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        animate={controls}
        initial="hidden"
        transition={{ 
          duration: props.duration ? props.duration : 0.3,
          delay: props.delay ? props.delay : 0.0,
          ease: props.ease ? props.ease : "easeInOut"
        }}
        variants={sideVariants}
        className={props.classes}
      >
        {props.children}
      </motion.div>
      <div ref={ref} className={props.top ? "invisible mt-" + props.top : "invisible mt-96"}></div>
    </>
  );
}


function SlideUpCardWhenVisible(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const sideVariants = { 
      visible: { opacity: 1, y: 0, },
      hidden:  { opacity: 0, y: "50vh", } 
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        animate={controls}
        initial="hidden"
        transition={{
          type: "spring",
          stiffness: 50,
          duration: props.duration ? props.duration : 0.3,
          delay: props.delay ? props.delay : 0.0,
          ease: props.ease ? props.ease : "linear"
        }}
        variants={sideVariants}
        className={props.classes}
      >
        {props.children}
      </motion.div>
      <div ref={ref} className="invisible mt-96"></div>
    </>
  );
}

function SlideRightCardWhenVisible(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const sideVariants = { 
      visible: { opacity: 1, x: 0, },
      hidden:  { opacity: 0, x: "-50vh", } 
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        animate={controls}
        initial="hidden"
        transition={{
          type: "spring",
          stiffness: 50,
          duration: props.duration ? props.duration : 0.3,
          delay: props.delay ? props.delay : 0.0,
          ease: props.ease ? props.ease : "linear"
        }}
        variants={sideVariants}
        className={props.classes}
      >
        {props.children}
      </motion.div>
      <div ref={ref} className="invisible mt-96"></div>
    </>
  );
}

module.exports = {
  PopInWhenVisible: PopInWhenVisible,
  SlideUpCardWhenVisible: SlideUpCardWhenVisible,
  SlideRightCardWhenVisible: SlideRightCardWhenVisible
}