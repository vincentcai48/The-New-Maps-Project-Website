import React from "react";
import { storage, firestore } from "../config/firebase";

class Gallery extends React.Component {
  // <!--SAMPLE:
  //     <li>
  //       <img src="" />
  //       <label></label>
  //     </li> -->

  render() {
    return (
      <div id="gallery">
        <h3>Images</h3>
        <ul id="all-images">
          <li>
            <img src="https://firebasestorage.googleapis.com/v0/b/weighty-forest-287112.appspot.com/o/galleryimages%2FNMP-gallery-1.PNG?alt=media&token=2f090fe7-0219-47a6-b722-801077de6753" />
            <label>Connecticut, Threshold: 95%, Visualized.</label>
          </li>
          <li>
            <img src="https://firebasestorage.googleapis.com/v0/b/weighty-forest-287112.appspot.com/o/galleryimages%2FNMP-gallery-2.PNG?alt=media&token=c6fe4abd-2ac2-4714-bd5b-a6c9f8711052" />
            <label>West Virginia, Threshold 80%, Visualized</label>
          </li>
          <li>
            <img src="https://firebasestorage.googleapis.com/v0/b/weighty-forest-287112.appspot.com/o/galleryimages%2FNMP-gallery-3.PNG?alt=media&token=de23ad60-a79a-4e04-9155-924758c635eb" />
            <label>
              Sample file format to input into the Java Algorithm, Massachusetts
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Gallery;
