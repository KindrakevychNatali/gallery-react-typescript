import cl from 'classnames';
import { useRef, useEffect, useMemo } from 'react';
import style from './index.module.scss';
import { Photo, CommonClassProps } from '../types';


interface PreviewGalleryProps extends CommonClassProps {
   indexActivePhoto: number;
   photos: Photo[];
   setNewPhoto: (id: number) => void; 
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
   indexActivePhoto,
   photos,
   className,
   setNewPhoto
}) => {
   if (!photos.length) {
      return null;
   }

   const previewContainer = useRef<HTMLUListElement>(null);

   useEffect(() => {
      if(!previewContainer.current) {
          return;
      }

      previewContainer.current.style.transform = `translate3d(-${indexActivePhoto * 164}px, 0, 0)`;
  }, [ indexActivePhoto ]);

   return (
    <div className={cl(className, style.previewGallery)}>
      {useMemo(() => (
      <ul
           className={style.previewGalleryTrack}
           ref={previewContainer}
      >
           {photos.map((photo, id) => (
              <li key={photo.id}>
               <button
                 className={style.previewGalleryPreview}
                 onClick={() => setNewPhoto(id)}
              >
                 <img
                       src={photo.preview}
                       alt={photo.description}
                       className={style.previewGalleryImage}
                 />
                 </button>
              </li>
           ))}
      </ul> 
      ), [])}
        <div className={style.previewGalleryCover}>
           {indexActivePhoto +1} / {photos.length}
        </div>
   </div>
   )
   
};