import { Photo } from "./types";
import { useState } from "react";
import { PreviewGallery } from "./PreviewGallery";
import { MainGallery } from "./MainGallery";
import { Navigation } from "./Navigation";

import style from './index.module.scss';

interface ComponentGalleryProps {
    photos: Photo[];
}

export const ComponentGallery: React.FC<ComponentGalleryProps> = ({
    photos,
}) => {
    if (!photos.length) {
        return null;
    }
    
    const [ indexActivePhoto, setIndexActivePhoto ] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto -1];
    const nextPhoto = photos[indexActivePhoto +1];

    return (
        <div className={style.componentGallery}>
           <div className={style.componentGalleryContainer}>
                <MainGallery 
                    prevPhoto={prevPhoto}
                    activePhoto={activePhoto}
                    nextPhoto={nextPhoto}
                    className={style.componentGalleryMainPhoto}
                />
                <Navigation 
                    className={style.componentGalleryNavigation}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick={() => {
                        setIndexActivePhoto(indexActivePhoto - 1);
                    }}
                    onNextClick={() => {
                        setIndexActivePhoto(indexActivePhoto +1);
                    }}
                />
            </div>
            <PreviewGallery 
                className={style.componentGalleryPreviewList}
                photos={photos}
                indexActivePhoto={indexActivePhoto}
                setNewPhoto={setIndexActivePhoto}

            />
        </div>
    )
}
 