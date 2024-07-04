import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        {/* <creattie-embed
 src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/91879/E1tzWpGz4ZJMWktW.json"
 delay="1"
 speed="100"
 frame_rate="24"
 trigger="loop"
 style="width:610px;background-color: ">
</creattie-embed>
<script src="https://creattie.com/js/embed.js?id=3f6954fde297cd31b441" defer></script> */}
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}
