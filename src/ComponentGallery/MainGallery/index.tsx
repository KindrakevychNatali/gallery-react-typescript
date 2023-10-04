import cl from 'classnames';
import { Photo, CommonClassProps } from '../types';

import style from './index.module.scss';

interface MainGalleryProps extends CommonClassProps {
    prevPhoto?: Photo;
    activePhoto: Photo;
    nextPhoto?: Photo;
}

export const MainGallery: React.FC<MainGalleryProps> = ({
    prevPhoto,
    activePhoto,
    nextPhoto,
    className
}) => (
    <div className={cl(className, style.mainPhoto)}>
        {prevPhoto && (
            <img 
                className={style.mainPhotoImagePrev}
                src={prevPhoto.src}
                alt={prevPhoto.description}
            />
        )}
        <img 
                className={style.mainPhotoImage}
                src={activePhoto.src}
                alt={activePhoto.description}
        />
         {nextPhoto && (
            <img 
                className={style.mainPhotoImageNext}
                src={nextPhoto.src}
                alt={nextPhoto.description}
            />
        )}
    </div>
);