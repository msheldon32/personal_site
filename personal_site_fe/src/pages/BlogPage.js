import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import "shards-ui/dist/css/shards.min.css";
import {Paper} from "@mui/material";

import BlogPost from "../components/BlogPost.js"
import BlogParagraph from "../components/BlogParagraph.js"

import {color_palette} from '../style/StylePalette.js';

function BlogPage(props) {
  return (
    <Paper fixed elevation="1" variant="outlined">
      <BlogPost title="Lorem Ipsum" date="Apr 9 2022">
      <BlogParagraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet tellus cras adipiscing enim eu turpis egestas. A scelerisque purus semper eget duis at tellus. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Sed faucibus turpis in eu mi bibendum neque. Porttitor leo a diam sollicitudin tempor id. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Adipiscing diam donec adipiscing tristique risus nec feugiat. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Quis hendrerit dolor magna eget est lorem. Nec sagittis aliquam malesuada bibendum arcu. Turpis egestas integer eget aliquet nibh praesent. Facilisi nullam vehicula ipsum a arcu cursus vitae. Fusce id velit ut tortor pretium viverra. Sem viverra aliquet eget sit amet. Aenean euismod elementum nisi quis eleifend quam. Nisl nisi scelerisque eu ultrices.
      </BlogParagraph>

      <BlogParagraph>
      Id aliquet risus feugiat in ante metus dictum. Gravida in fermentum et sollicitudin ac. Ac tortor dignissim convallis aenean et tortor. Egestas pretium aenean pharetra magna. Pellentesque id nibh tortor id aliquet. Tortor at auctor urna nunc id. Amet venenatis urna cursus eget. Volutpat sed cras ornare arcu dui vivamus arcu felis. Cras fermentum odio eu feugiat pretium. Sollicitudin tempor id eu nisl nunc. Euismod elementum nisi quis eleifend quam. A erat nam at lectus. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Sit amet nisl purus in mollis. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Tellus molestie nunc non blandit massa enim nec dui nunc. Tincidunt ornare massa eget egestas purus.
      </BlogParagraph>

      <BlogParagraph>
      Nisl purus in mollis nunc sed id semper risus in. Eros in cursus turpis massa. Lacus vestibulum sed arcu non odio euismod. Aliquet enim tortor at auctor urna nunc. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Lectus arcu bibendum at varius vel. Suspendisse ultrices gravida dictum fusce. Neque convallis a cras semper auctor neque vitae tempus. Non blandit massa enim nec dui. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Dictumst vestibulum rhoncus est pellentesque elit. Diam quam nulla porttitor massa id neque aliquam. Mi quis hendrerit dolor magna.
      </BlogParagraph>

      <BlogParagraph>
      Elementum eu facilisis sed odio morbi. Convallis posuere morbi leo urna molestie at elementum eu. Arcu risus quis varius quam quisque id diam vel. Enim diam vulputate ut pharetra sit amet aliquam id. Sollicitudin ac orci phasellus egestas. Pharetra convallis posuere morbi leo urna molestie at. Habitant morbi tristique senectus et. Porta nibh venenatis cras sed felis. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Et netus et malesuada fames ac turpis egestas maecenas. Leo urna molestie at elementum eu. Praesent semper feugiat nibh sed. Scelerisque felis imperdiet proin fermentum leo vel orci. Id faucibus nisl tincidunt eget. Lorem ipsum dolor sit amet consectetur adipiscing. Faucibus nisl tincidunt eget nullam non nisi est.
      </BlogParagraph>

      <BlogParagraph>
      Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Habitasse platea dictumst vestibulum rhoncus est pellentesque. A diam maecenas sed enim ut sem viverra aliquet. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Faucibus purus in massa tempor nec feugiat nisl pretium. Volutpat diam ut venenatis tellus. Elit pellentesque habitant morbi tristique senectus et netus et. Augue neque gravida in fermentum et sollicitudin ac orci. Malesuada fames ac turpis egestas sed tempus. Enim ut tellus elementum sagittis vitae et leo duis ut. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Feugiat scelerisque varius morbi enim nunc faucibus a. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Cursus in hac habitasse platea dictumst quisque.
      </BlogParagraph>

      </BlogPost>
      <BlogPost title="Ipsum Lorem" date="Apr 8 2022">

      <BlogParagraph>
      Nisl purus in mollis nunc sed id semper risus in. Eros in cursus turpis massa. Lacus vestibulum sed arcu non odio euismod. Aliquet enim tortor at auctor urna nunc. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Lectus arcu bibendum at varius vel. Suspendisse ultrices gravida dictum fusce. Neque convallis a cras semper auctor neque vitae tempus. Non blandit massa enim nec dui. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Dictumst vestibulum rhoncus est pellentesque elit. Diam quam nulla porttitor massa id neque aliquam. Mi quis hendrerit dolor magna.
      </BlogParagraph>

      <BlogParagraph>
      Elementum eu facilisis sed odio morbi. Convallis posuere morbi leo urna molestie at elementum eu. Arcu risus quis varius quam quisque id diam vel. Enim diam vulputate ut pharetra sit amet aliquam id. Sollicitudin ac orci phasellus egestas. Pharetra convallis posuere morbi leo urna molestie at. Habitant morbi tristique senectus et. Porta nibh venenatis cras sed felis. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Et netus et malesuada fames ac turpis egestas maecenas. Leo urna molestie at elementum eu. Praesent semper feugiat nibh sed. Scelerisque felis imperdiet proin fermentum leo vel orci. Id faucibus nisl tincidunt eget. Lorem ipsum dolor sit amet consectetur adipiscing. Faucibus nisl tincidunt eget nullam non nisi est.
      </BlogParagraph>

      <BlogParagraph>
      Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Habitasse platea dictumst vestibulum rhoncus est pellentesque. A diam maecenas sed enim ut sem viverra aliquet. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Faucibus purus in massa tempor nec feugiat nisl pretium. Volutpat diam ut venenatis tellus. Elit pellentesque habitant morbi tristique senectus et netus et. Augue neque gravida in fermentum et sollicitudin ac orci. Malesuada fames ac turpis egestas sed tempus. Enim ut tellus elementum sagittis vitae et leo duis ut. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Feugiat scelerisque varius morbi enim nunc faucibus a. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Cursus in hac habitasse platea dictumst quisque.
      </BlogParagraph>

      <BlogParagraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet tellus cras adipiscing enim eu turpis egestas. A scelerisque purus semper eget duis at tellus. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Sed faucibus turpis in eu mi bibendum neque. Porttitor leo a diam sollicitudin tempor id. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Adipiscing diam donec adipiscing tristique risus nec feugiat. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Quis hendrerit dolor magna eget est lorem. Nec sagittis aliquam malesuada bibendum arcu. Turpis egestas integer eget aliquet nibh praesent. Facilisi nullam vehicula ipsum a arcu cursus vitae. Fusce id velit ut tortor pretium viverra. Sem viverra aliquet eget sit amet. Aenean euismod elementum nisi quis eleifend quam. Nisl nisi scelerisque eu ultrices.
      </BlogParagraph>

      <BlogParagraph>
      Id aliquet risus feugiat in ante metus dictum. Gravida in fermentum et sollicitudin ac. Ac tortor dignissim convallis aenean et tortor. Egestas pretium aenean pharetra magna. Pellentesque id nibh tortor id aliquet. Tortor at auctor urna nunc id. Amet venenatis urna cursus eget. Volutpat sed cras ornare arcu dui vivamus arcu felis. Cras fermentum odio eu feugiat pretium. Sollicitudin tempor id eu nisl nunc. Euismod elementum nisi quis eleifend quam. A erat nam at lectus. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Sit amet nisl purus in mollis. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Tellus molestie nunc non blandit massa enim nec dui nunc. Tincidunt ornare massa eget egestas purus.
      </BlogParagraph>

        </BlogPost>
    </Paper>);
}

export default BlogPage;
