import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}
  body {
    margin: 0 auto;
    text-align: center;
    background-color: #1E213F; 

  }

  .circular {
          height: 100px;
          width: 100px;
          position: relative;
  }

  .circular .inner,
  .circular .outer,
  .circular .circle {
         position: absolute;
         z-index: 6;
         height: 100%;
         width: 100%;
         border-radius: 100%;
         box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2);
      }

      .circular .inner {
         top: 50%;
         left: 50%;
         height: 80px;
         width: 80px;
         margin: -40px 0 0 -40px;
         background-color: #dde6f0;
         border-radius: 100%;
         box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
      }

      .circular .circle {
         z-index: 1;
         box-shadow: none;
      }

      .circular .numb {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         z-index: 10;
         font-size: 18px;
         font-weight: 500;
         color: #4158d0;
      }

      .circular .bar {
         position: absolute;
         height: 100%;
         width: 100%;
         background: #fff;
         border-radius: 100%;
         clip: rect(0px, 100px, 100px, 50px);
      }

      .circle .bar .progress {
         position: absolute;
         height: 100%;
         width: 100%;
         border-radius: 100%;
         clip: rect(0px, 50px, 100px, 0px);
      }

      .circle .bar .progress,
      .dot span {
         background: #4158d0;
      }

      .circle .left .progress {
         z-index: 1;
         animation: left 4s linear both;
      }

      @keyframes left {
         100% {
            transform: rotate(180deg);
         }
      }

      .circle .right {
         z-index: 3;
         transform: rotate(180deg);
      }

      .circle .right .progress {
         animation: right 4s linear both;
         animation-delay: 4s;
      }

      @keyframes right {
         100% {
            transform: rotate(180deg);
         }
      }

      .circle .dot {
         z-index: 2;
         position: absolute;
         left: 50%;
         top: 50%;
         width: 50%;
         height: 10px;
         margin-top: -5px;
         animation: dot 8s linear both;
         transform-origin: 0% 50%;
      }

      .circle .dot span {
         position: absolute;
         right: 0;
         width: 10px;
         height: 10px;
         border-radius: 100%;
      }

      @keyframes dot {
         0% {
            transform: rotate(-90deg);
         }

         50% {
            transform: rotate(90deg);
            z-index: 4;
         }

         100% {
            transform: rotate(270deg);
            z-index: 4;
         }
      }

  `;
