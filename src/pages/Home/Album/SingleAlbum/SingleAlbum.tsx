import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';

import { useParams } from 'react-router-dom';
import { RootState, useGetAlbumDetailQuery } from '../../../../redux';

import { arrToStr } from '../../../../utils/arrayToRgb';

export const SingleAlbum = () => {
  const token = useSelector((state: RootState) => state.rootReducer.auth.token);
  const { id } = useParams();
  const { data } = useGetAlbumDetailQuery({ token, id });
  const [color, setColor] = useState([87, 87, 87]);

  return (
    <div
      className={` overflow-y-auto`}
      style={{
        background: `linear-gradient(0deg, rgba(15, 15, 15, 0.506) 0%,rgba(${arrToStr(
          color
        )}, 0.3) 100%)`
      }}
    >
      <ColorExtractor
        rgb={true}
        getColors={(colors: number[][]) => {
          setColor(colors[0]);
        }}
      >
        <img
          className='h-56 w-56 ml-20 mt-28'
          src={data?.images[1]?.url}
          alt='imm'
        />
      </ColorExtractor>

      <div className='min-h-[40vh]'></div>
    </div>
  );
};
